import knex from 'knex'
import { main } from '../../config/postgres'

const knexPsql = knex({
  client: 'pg',
  connection: {
    host: main.HOST,
    port: Number(main.PORT),
    user: main.USER,
    password: main.PASSWORD,
    database: main.DATABASE,
    ssl: {
      rejectUnauthorized: false
    },
    application_name: main.APPLICATION_NAME,
    pool: {
      max: Number(main.MAX_POOL)
    }
  }
})

export default knexPsql
