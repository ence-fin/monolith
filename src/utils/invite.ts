import jwt from 'jsonwebtoken'
import jwtConfig from '../config/jwt'
import {OAuth2Client} from 'google-auth-library'
const client = new OAuth2Client()

const {verify} = jwt

class Invite {
  static async decodeSignature(signedIdToken: string) {
    let decodedToken

    try {
      decodedToken = await client.verifyIdToken({idToken: signedIdToken, audience: jwtConfig.USER_INVITE_SIGNING_SECRET})
    } catch (error: any) {
      if (error.constructor.name === 'JsonWebTokenError') {
        return {status: 'INVALID'}
      } else if (error.constructor.name === 'TokenExpiredError') {
        return {status: 'EXPIRED'}
      } else {
        console.error('Error while decoding JWT', error, signedIdToken)
        return {status: 'INVALID'}
      }
    }
    return {payload: decodedToken, status: 'VALID'}
  }
}

export default Invite
