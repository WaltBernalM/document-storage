const { config } = require('dotenv')
config()

const nodeUrl = process.env.GANACHE_NODE_URL
const privateKey = process.env.GANACHE_PRIVATE_KEY
const contractAddress = process.env.GANACHE_CONTRACT_ADDRESS

module.exports = { nodeUrl, privateKey, contractAddress }