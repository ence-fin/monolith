import {config} from 'dotenv'
import fastify from 'fastify'
import multipart from '@fastify-multipart'
import cors from '@fastify-cors'
import {healthCheck} from './src/API/routes/health'

const fastify = Fastify({
  ignoreTrailingSlash: true,
  logger: config.DEBUG ? (config.LOG_LEVEL ? {level: config.LOG_LEVEL} : config.DEBUG) : config.DEBUG,
  prettyPrint: true
})

fastify.register(multipart, {limits: {fileSize: 50 * 1000000}})
fastify.register(healthCheck, {version: 'any'})
