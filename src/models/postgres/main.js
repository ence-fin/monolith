import knex from 'knex'
import {main} from '../../config/postgres'

const knexPsql = knex({
  client: 'pg',
  connection: {
    host: main.HOST,
    port: main.PORT,
    user: main.USER,
    password: main.PASSWORD,
    database: main.DATABASE,
    max: main.MAX_POOL,
    ssl: {
      rejectUnauthorized: false
    },
    application_name: main.APPLICATION_NAME
  }
})

export default knexPsql
