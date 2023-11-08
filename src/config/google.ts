import dotenv from 'dotenv'
dotenv.config()

const oauth: Record<string, any> = {}

oauth.CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID
oauth.CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET
oauth.REDIRECT_URL = process.env.GOOGLE_OAUTH_REDIRECT_URL
oauth.GRANT_TYPE = 'authorization_code'

export {oauth}
