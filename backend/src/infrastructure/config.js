const dotenv = require('dotenv')
dotenv.config()

const config = {
  port: process.env.PORT || 3001,
  externalApiUrl: process.env.EXTERNAL_API_URL || 'https://echo-serv.tbxnet.com/v1/secret',
  externalApiKey: process.env.EXTERNAL_API_KEY || 'Bearer aSuperSecretKey'
}

module.exports = config 