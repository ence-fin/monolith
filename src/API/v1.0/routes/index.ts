import loginRoutes from './login'

async function routes(fastify: any) {
  fastify.register(loginRoutes)
}

export {routes}
