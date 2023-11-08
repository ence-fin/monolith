import {Cache, DB} from '../models'
import Constants from '../utils/constants'

class UserRepo {
  static async saveNewAccessToken(accessToken: any) {
    const key = `${Constants.REDIS.ACCESS_TOKEN_PREFIX}${accessToken}`
    const value = {userId: -1, orgId: -1}
    return Cache.Main.setKeyValueWithTtl(key, JSON.stringify(value), Constants.REDIS.ACCESS_TOKEN_FIRST_TIME_TTL)
  }

  static async getAccessTokenData(accessToken: any) {
    const key = `${Constants.REDIS.ACCESS_TOKEN_PREFIX}${accessToken}`
    const value = (await Cache.Main.getKeyValue(key)) ?? '{}'
    return value ? JSON.parse(value) : null
  }

  static async getNewTransaction() {
    return await DB.Main.transaction()
  }

  static async addUser(user: any, trx: any) {
    const psql = trx || DB.Main
    const addedUsers = await psql('ence.user').insert(user).returning(['id', 'email'])
    return addedUsers
  }
}

export default UserRepo
