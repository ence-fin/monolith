import {v4 as uuidv4} from 'uuid'

function createNewToken() {
  return uuidv4()
}

export default createNewToken
