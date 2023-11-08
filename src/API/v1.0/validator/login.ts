'use strict'

const loginWithGoogleValidator = {
  body: {
    type: 'object',
    properties: {
      authToken: {
        type: 'string'
      },
      state: {
        type: 'string'
      }
    }
  }
}

export {loginWithGoogleValidator}
