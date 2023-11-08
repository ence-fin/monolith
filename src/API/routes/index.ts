import {routes as v1Dot0} from '../v1.0/routes'

async function routes(fastify: any) {
  fastify.register(v1Dot0, {prefix: '/v1'})
}

export default routes
