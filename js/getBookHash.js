const ethers = require("ethers")
const getABI = require("./getABI")
const config = require("dotenv").config
config()


const nodeUrl = process.env.GANACHE_NODE_URL
const provider = ethers.getDefaultProvider(nodeUrl)
const privateKey = process.env.GANACHE_PRIVATE_KEY
const contractAddress = process.env.GANACHE_CONTRACT_ADDRESS

const wallet = new ethers.Wallet(privateKey, provider)
const contractABI = getABI("contracts/DocumentHashStorage.sol")
const contract = new ethers.Contract(contractAddress, contractABI, wallet)

const transactionCode1 = "0-1278-5049-X"
const transactionCode2 = "0-1278-5049-Y"
const transactionCode3 = "0-1278-5049-Z"

async function getBookHash(transactionCode) {
  const bookHash = await contract.getBookHash(transactionCode)
  console.log("Retrieved Book Hash:", bookHash)
}

getBookHash(transactionCode1)
getBookHash(transactionCode2)
getBookHash(transactionCode3)

module.exports = getBookHash