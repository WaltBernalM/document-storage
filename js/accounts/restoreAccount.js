const Web3 = require("web3")
const { nodeUrl, privateKey } = require("../constants")

function restoreAccount() {
  const web3 = new Web3(nodeUrl)
  const {address, privateKey: privKey} = web3.eth.accounts.privateKeyToAccount(privateKey)
  console.log("restored account:", {address, privateKey: privKey})
}

restoreAccount()