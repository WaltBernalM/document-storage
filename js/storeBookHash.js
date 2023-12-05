const ethers = require("ethers")
const getABI = require("./getABI")
const { privateKey, nodeUrl, contractAddress } = require("./constants")
const config = require('dotenv').config
config()

async function storeDocumentHash(transactionCode, documentHash) {
  const provider = ethers.getDefaultProvider(nodeUrl)
  const wallet = new ethers.Wallet(privateKey, provider)
  const contractABI = getABI("contracts/DocumentHashStorage.sol")

  const contract = new ethers.Contract(contractAddress, contractABI, wallet)

  const transaction = await contract.storeDocumentHash(transactionCode, documentHash)
  const contractTransacitonReceipt = await transaction.wait()
  console.log(contractTransacitonReceipt)
  console.log("Document hash stored successfully.")
}

const documentHash1 = "0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdex"
const documentHash2 = "0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdey"
const documentHash3 = "0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdez"
const transactionCode1 = "0-1278-5049-X"
const transactionCode2 = "0-1278-5049-Y"
const transactionCode3 = "0-1278-5049-Z"

storeDocumentHash(transactionCode3, documentHash3)

module.exports = storeDocumentHash