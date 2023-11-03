const config = {}

config.PORT = Number(process.env.SERVER_PORT ?? 80)
config.HOST = process.env.SERVER_HOST ?? '0.0.0.0'
config.DEBUG = process.env.SERVER_DEBUG ? process.env.SERVER_DEBUG.toLowerCase() === 'true' : false
config.LOG_LEVEL = process.env.SERVER_LOG_LEVEL ? process.env.SERVER_LOG_LEVEL.toLowerCase() : 'silent'
config.TEST = process.env.TEST ? process.env.TEST.toLowerCase() === 'true' : false
