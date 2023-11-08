import {loginWithGoogleHandler} from '../handler/login'
import {loginWithGoogleValidator} from '../validator/login'

async function loginRoutes(fastify: any) {
  fastify.route({
    method: 'POST',
    url: '/login/google',
    schema: loginWithGoogleValidator,
    handler: loginWithGoogleHandler
  })
}
