import Repo from '../../../repo'
import createNewToken from '../../../utils/access'
import Constants from '../../../utils/constants'
import Invite from '../../../utils/invite'
import GoogleOAuth from '../../../utils/oauth/google'

async function loginWithGoogleService(googleAuthToken: any, _accessToken: any, state: any) {
  let accessToken = _accessToken
  let nextUrl = null
  const decodedState = Invite.decodeSignature(state)
  console.log('DECODED STATE', decodedState)

  if (!decodedState) {
    throw new Error('Invalid state')
  }

  if (state && decodedState.status === 'VALID') {
    try {
      nextUrl = JSON.parse(Buffer.from(state, 'base64').toString('utf-8'))
    } catch (err) {
      console.error('Error while parsing state', err)
    }
  }

  if (decodedState.status === 'EXPIRED') {
    console.error('Invite code expired', Constants.HTTP_CODES.BAD_REQUEST)
  }

  if (!_accessToken) {
    accessToken = createNewToken()
    await Repo.User.saveNewAccessToken(accessToken)
  }

  const accessTokenUserData = await Repo.User.getAccessTokenData(accessToken)

  if (accessTokenUserData && ![-1, 0].includes(accessTokenUserData.userId)) {
    console.error('acess token already logged in', Constants.HTTP_CODES.FORBIDDEN)
  }

  const userData = await GoogleOAuth.getUserData(googleAuthToken).catch(error => {
    console.error('unable to get user data from Google', error)
    console.error('unable to get user data from Google', Constants.HTTP_CODES.INTERNAL_SERVER_ERROR)
  })
}

export {loginWithGoogleService}
