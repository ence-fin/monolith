import axios, {AxiosError, AxiosResponse} from 'axios'
import {URLSearchParams} from 'url'
import {oauth} from '../../config/google'
import {v4 as uuidv4} from 'uuid'
import customConsole from './console'

const GOOGLE_OAUTH_TOKEN_URL = 'https://oauth2.googleapis.com/token'

class GoogleOAuth {
  static async getTokenData(authCode: string): Promise<any> {
    try {
      const response: AxiosResponse<any> = await axios.post(
        GOOGLE_OAUTH_TOKEN_URL,
        new URLSearchParams({
          code: authCode,
          client_id: oauth.CLIENT_ID,
          client_secret: oauth.CLIENT_SECRET,
          redirect_uri: oauth.REDIRECT_URL,
          grant_type: oauth.GRANT_TYPE
        })
      )
      customConsole.log('in ouath ---->', response.data)
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError: AxiosError = error
        console.error('Error while getting Google oauth token data', axiosError.code)
        if (axiosError.response) {
          console.error(axiosError.response.data)
        }
      }
    }
  }

  static decodeIdToken(authToken: any) {
    const idToken = authToken.id_token
    const idTokenParts = idToken.split('.')
    const idTokenPayload = JSON.parse(Buffer.from(idTokenParts[1], 'base64').toString('utf-8'))
    return idTokenPayload
  }

  static async getUserData(authToken: any) {
    const tokenData = await this.getTokenData(authToken)
    if (!tokenData || !tokenData.id_token) {
      return
    }
    return {...this.decodeIdToken(tokenData.id_token)}
  }

  static async generateOauthManifest(sourceOrigin: string | undefined, signedState: string | undefined, nextUrl: string | undefined): Promise<{url: string; state: string}> {
    const redirectUrl = sourceOrigin ? `${sourceOrigin}/callback/login/google` : oauth.REDIRECT_URL

    let state: string | object = {id: uuidv4()}

    if (nextUrl) {
      state = {...state, n: nextUrl}
    }

    const encodedState = Buffer.from(JSON.stringify(state)).toString('base64')
    const stateQueryParam = encodeURI(signedState ?? encodedState)

    const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=openid%20profile%20email&include_granted_scopes=true&response_type=code&state=${stateQueryParam}&redirect_uri=${redirectUrl}&client_id=${oauth.CLIENT_ID}`

    return {url, state: stateQueryParam}
  }
}

export default GoogleOAuth
