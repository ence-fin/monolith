import {isServiceHealthy} from '../../utils/health'

const health = {
  response: {
    200: {
      type: 'object',
      properties: {
        healthy: {
          type: 'boolean'
        },
        service: {
          type: 'string'
        },
        version: {
          type: 'string'
        }
      }
    }
  }
}

async function route(fastify, options) {
  fastify.route({
    method: 'GET',
    url: '/health',
    schema: health,
    handler: async (request, reply) => {
      const healthy = await isServiceHealthy()
      reply.code(healthy ? 200 : 500)
      return {
        healthy,
        service: 'ence',
        version: options.version || 'any'
      }
    }
  })
}

export {route as healthCheck}
