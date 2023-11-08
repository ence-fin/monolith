import main from '../../config/redis'
import RedisClient from '../../resources/redis'

const mainRedis = new RedisClient({
  NAME: main.NAME,
  HOST: main.HOST,
  PORT: main.PORT,
  DB: main.DB,
  PASSWORD: main.PASSWORD
})

class MainCache {
  static async ping() {
    return mainRedis.redis.ping()
  }

  static async getKeyValue(key: string) {
    return mainRedis.redis.get(key)
  }

  static async setKeyValue(key: string, value: string) {
    return mainRedis.redis.set(key, value)
  }

  static async setKeyValueWithTtl(key: string, value: string, ttl: number) {
    return mainRedis.redis.setex(key, ttl, value)
  }

  static async getKeyTtl(key: string) {
    let expiry
    await mainRedis.redis.ttl(key, (err, value) => {
      if (err) throw err
      expiry = value
    })
    return expiry
  }
}

export default MainCache
