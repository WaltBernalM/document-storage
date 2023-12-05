const fs = require("fs")
const { ethers } = require("ethers")
const { nodeUrl, privateKey } = require("./constants")

async function postContract(nodeUrl) {
  const provider = ethers.getDefaultProvider(nodeUrl)
  const wallet = new ethers.Wallet(
    privateKey,
    provider
  )

  const toAddress = null
  const value = "0x00"
  const gasLimit = "0x74346"
  const gasPrice = "0x09184e72a000"
  const nonce = await wallet.getNonce()
  const contractBytecodePath = "bin/contracts/DocumentHashStorage.bin"
  const bytecode = fs.readFileSync(contractBytecodePath, "utf8").trim()

  const transaction = {
    to: toAddress,
    value: value,
    gasLimit: gasLimit,
    gasPrice: gasPrice,
    nonce: nonce,
    data: "0x" + bytecode,
  }

  wallet.sendTransaction(transaction)
    .then((tx) => {
      console.log("transaction hash: " + tx.hash)
      return tx.wait()
    })
    .then((receipt) => {
      console.log("contract address: " + receipt.contractAddress)
    })
    .catch((error) => {
      console.error("Transaction Error:", error)
    })
}

postContract(nodeUrl)
