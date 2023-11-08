import Repo from '../../../repo'
import createNewToken from '../../../utils/access'
import Constants from '../../../utils/constants'
import Invite from '../../../utils/invite'
import GoogleOAuth from '../../../utils/oauth/google'

async function loginWithGoogleService(googleAuthToken: any, _accessToken: any, idToken: any) {
  let accessToken = _accessToken
  let nextUrl = null
  const decodedIdToken = await Invite.decodeSignature(idToken)
  console.log('[DECODED]', decodedIdToken)

  if (!decodedIdToken) {
    throw new Error('Invalid idToken')
  }

  if (decodedIdToken && decodedIdToken.status === 'VALID') {
    try {
      //@ts-ignore
      nextUrl = decodedIdToken.payload.payload.sub
    } catch (err) {
      console.error('Error while parsing idToken', err)
    }
  }

  if (decodedIdToken.status === 'EXPIRED') {
    console.error('Invite code expired', Constants.HTTP_CODES.BAD_REQUEST)
  }

  // if (!_accessToken) {
  //   console.log('running?')
  //   accessToken = createNewToken()
  //   await Repo.User.saveNewAccessToken(accessToken) //TODO: OPEN after check
  // }

  // const accessTokenUserData = await Repo.User.getAccessTokenData(accessToken)

  // if (accessTokenUserData && ![-1, 0].includes(accessTokenUserData.userId)) {
  //   console.error('access token already logged in', Constants.HTTP_CODES.FORBIDDEN)
  // }

  const userData = await GoogleOAuth.getUserData(googleAuthToken).catch(error => {
    console.error('unable to get user data from Google', error)
    console.error('unable to get user data from Google', Constants.HTTP_CODES.INTERNAL_SERVER_ERROR)
  })

  const googleUserIdentifier = userData.sub
}

export {loginWithGoogleService}
