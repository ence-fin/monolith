import dotenv from 'dotenv'
dotenv.config()

const config: {
  PORT: number
  HOST: string
  DEBUG: boolean
  LOG_LEVEL: string
  TEST: boolean
  KEEP_ALIVE_TIMEOUT: number
  HEADERS_TIMEOUT: number
  GZIP_COMPRESSION_LEVEL: number
} = {
  PORT: Number(process.env.SERVER_PORT ?? 80),
  HOST: process.env.SERVER_HOST ?? '0.0.0.0',
  DEBUG: process.env.SERVER_DEBUG ? process.env.SERVER_DEBUG.toLowerCase() === 'true' : false,
  LOG_LEVEL: process.env.SERVER_LOG_LEVEL ? process.env.SERVER_LOG_LEVEL.toLowerCase() : 'silent',
  TEST: process.env.TEST ? process.env.TEST.toLowerCase() === 'true' : false,
  KEEP_ALIVE_TIMEOUT: Number(process.env.SERVER_KEEP_ALIVE_TIMEOUT ?? '60') * 1000,
  HEADERS_TIMEOUT: Number(process.env.SERVER_HEADERS_TIMEOUT ?? '60') * 1000,
  GZIP_COMPRESSION_LEVEL: Number(process.env.SERVER_GZIP_COMPRESSION_LEVEL ?? '6')
}

export {config}
