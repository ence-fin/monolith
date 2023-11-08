import dotenv from 'dotenv'
dotenv.config()

interface JwtConfig {
  USER_INVITE_SIGNING_SECRET: any
}

const jwtConfig: JwtConfig = {
  USER_INVITE_SIGNING_SECRET: process.env.USER_INVITE_SIGNING_SECRET!
}

export default jwtConfig
