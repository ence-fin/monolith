import dotenv from 'dotenv'
dotenv.config()

const main: {
  USER: string
  DATABASE: string
  PASSWORD: string
  PORT: string
  HOST: string
  MAX_POOL: string
  APPLICATION_NAME: string
} = {
  USER: process.env.MAIN_PSQL_USER ?? '',
  DATABASE: process.env.MAIN_PSQL_DATABASE ?? '',
  PASSWORD: process.env.MAIN_PSQL_PASSWORD ?? '',
  PORT: process.env.MAIN_PSQL_PORT ?? '',
  HOST: process.env.MAIN_PSQL_HOST ?? '',
  MAX_POOL: process.env.MAIN_PSQL_MAX_POOL ?? '',
  APPLICATION_NAME: process.env.MAIN_PSQL_APPLICATION_NAME ?? 'ence'
}

export {main}
