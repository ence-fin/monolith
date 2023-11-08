import dotenv from 'dotenv'
dotenv.config()

const jwtConfig = {
  USER_INVITE_SIGNING_SECRET: string
}

jwtConfig.USER_INVITE_SIGNING_SECRET = process.env.USER_INVITE_SIGNING_SECRET

export default jwtConfig
