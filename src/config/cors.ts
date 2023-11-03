import dotenv from 'dotenv'
dotenv.config()

const corsConfig: {
  origin: string[] | string | boolean
  credentials: boolean
} = {
  origin: [],
  credentials: true
}

if (process.env.WHITELISTED_CORS_DOMAIN) {
  corsConfig.origin = process.env.WHITELISTED_CORS_DOMAIN.split(',').map(_ => _.trim())
} else {
  corsConfig.origin = false
}

corsConfig.credentials = true

export {corsConfig}
