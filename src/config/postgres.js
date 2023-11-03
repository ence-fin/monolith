'use strict'

const main = {}

main.USER = process.env.MAIN_PSQL_USER
main.DATABASE = process.env.MAIN_PSQL_DATABASE
main.PASSWORD = process.env.MAIN_PSQL_PASSWORD
main.PORT = process.env.MAIN_PSQL_PORT
main.HOST = process.env.MAIN_PSQL_HOST
main.MAX_POOL = process.env.MAIN_PSQL_MAX_POOL
main.APPLICATION_NAME = process.env.MAIN_PSQL_APPLICATION_NAME ?? 'ence'

export {main}
