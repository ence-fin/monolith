import {loginWithGoogleService} from '../service/login'

async function loginWithGoogleHandler(request: any, reply: any) {
  const googleAuthToken = request.body.authToken
  const idToken = request.body.id_token
  const accessToken = request.body.accessToken

  const googleService = await loginWithGoogleService(googleAuthToken, accessToken, idToken)
  console.log(googleService)
}

export {loginWithGoogleHandler}
