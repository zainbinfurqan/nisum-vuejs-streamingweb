import constants from './constants'

const keys = {
  baseURL: constants.localBaseUrl,
}
keys.PAYPAL_SANDBOX_KEY = process.env.PAYPAL_SANDBOX_KEY
// console.log(process.env.enviroment)
// console.log(process.env.HOST)
if (process.env.enviroment === 'localhost') {
  keys.baseURL = constants.localBaseUrl
}

if (process.env.enviroment === 'development') {
  keys.baseURL = constants.developmentBaseUrl
}

if (process.env.enviroment === 'production') {
  keys.baseURL = constants.productionBaseUrl
}

export default keys
