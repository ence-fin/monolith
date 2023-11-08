import dotenv from 'dotenv'
dotenv.config()

const main: Record<string, any> = {}

main.DB = Number(process.env.MAIN_REDIS_DB ?? '0')
main.HOST = process.env.MAIN_REDIS_HOST
main.NAME = 'main'
main.PORT = Number(process.env.MAIN_REDIS_PORT ?? '6379')
main.PASSWORD = process.env.MAIN_REDIS_PASSWORD

export default main
