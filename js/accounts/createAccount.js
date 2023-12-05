const Web3 = require("web3")
const { nodeUrl } = require("../constants")

function createAccount() {
  const web3 = new Web3(nodeUrl)
  const { address, privateKey } = web3.eth.accounts.create()
  const newAccount = {address, privateKey}
  console.log(newAccount)
  return newAccount
}

createAccount()
