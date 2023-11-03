'use strict'

import {DB} from '../models'

async function isServiceHealthy() {
  const dbCheck = await DB.Main.select(1)
  const isDBHealthy = !!(dbCheck && dbCheck.length > 0)

  return isDBHealthy
}

export {isServiceHealthy}
