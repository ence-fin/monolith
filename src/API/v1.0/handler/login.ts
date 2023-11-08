import {loginWithGoogleService} from '../service/login'

async function loginWithGoogleHandler(request: any, reply: any) {
  const googleAuthToken = request.body.authToken
  const state = request.body.state
  const accessToken = request.accessToken

  const googleService = await loginWithGoogleService(googleAuthToken, state, accessToken)
  console.log(googleService)
}

export {loginWithGoogleHandler}
