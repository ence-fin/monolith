import jwt from 'jsonwebtoken'
import jwtConfig from '../config/jwt'

const {verify} = jwt

class Invite {
  static decodeSignature(signedState: string) {
    let decodedToken

    try {
      decodedToken = verify(signedState, jwtConfig.USER_INVITE_SIGNING_SECRET)
    } catch (error: any) {
      if (error.constructor.name === 'JsonWebTokenError') {
        return {status: 'INVALID'}
      } else if (error.constructor.name === 'TokenExpiredError') {
        return {status: 'EXPIRED'}
      } else {
        console.error('Error while decoding JWT', error, signedState)
        return {status: 'INVALID'}
      }
    }
    return {payload: decodedToken, status: 'VALID'}
  }
}

export default Invite
