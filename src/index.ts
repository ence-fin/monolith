import Fastify, {FastifyInstance} from 'fastify'
import multipart from '@fastify/multipart'
import cors from '@fastify/cors'
import {config} from './config/server'
import {corsConfig} from './config/cors'
import {healthCheck} from './API/routes/health'
import routes from './API/routes'

const fastify: FastifyInstance = Fastify({
  ignoreTrailingSlash: true,
  logger: config.DEBUG ? (config.LOG_LEVEL ? {level: config.LOG_LEVEL} : config.DEBUG) : config.DEBUG
})

fastify.register(multipart, {limits: {fileSize: 50 * 1000000}})

fastify.register(healthCheck, {version: 'any'})
fastify.register(routes, {prefix: '/api'})
fastify.register(cors, corsConfig)

fastify
  .listen({port: config.PORT, host: config.HOST})
  .then(address => {
    console.info(`⚡Ence server running at ${address}⚡`)
    fastify.server.keepAliveTimeout = config.KEEP_ALIVE_TIMEOUT
    fastify.server.headersTimeout = config.HEADERS_TIMEOUT
  })
  .catch(err => {
    fastify.log.error(err)
    process.exit(1)
  })
