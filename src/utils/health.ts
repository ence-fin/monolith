import { DB } from '../models'

async function isServiceHealthy (): Promise<boolean> {
  const dbCheck = await DB.Main.select(1)
  const isDBHealthy: boolean = !!(dbCheck && dbCheck.length > 0)

  return isDBHealthy
}

export { isServiceHealthy }
