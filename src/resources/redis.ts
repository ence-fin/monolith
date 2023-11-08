import {Redis} from 'ioredis'
// import autoBind from 'auto-bind'

interface RedisClientOptions {
  NAME: string
  HOST: string
  PORT: number
  DB: number
  PASSWORD?: string
}

class RedisClient {
  name: string
  host: string
  port: number
  db: number
  redisOptions: any
  redis: Redis

  constructor(options: RedisClientOptions) {
    this.name = options.NAME
    this.host = options.HOST
    this.port = options.PORT
    this.db = options.DB
    this.redisOptions = {
      host: this.host,
      port: this.port,
      db: this.db
    }

    if (options.PASSWORD) {
      this.redisOptions.password = options.PASSWORD
    }

    this.redis = new Redis(this.redisOptions)
    this.redis.on('error', error => {
      console.error(`Error connecting to Redis ${this.name}`, error)
    })

    // autoBind(this)
  }
}

export default RedisClient
