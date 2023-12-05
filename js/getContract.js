const Web3 = require("web3")
const web3 = new Web3("https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY") // Replace with your Infura API key or use your preferred Ethereum node


const contractABI = getABI("contracts/DocumentHashStorage.sol")

const contract = new web3.eth.Contract(contractABI, con)

// Example: Get the value of a state variable from the contract
contract.methods
  .yourStateVariable()
  .call()
  .then((result) => {
    console.log("Value of yourStateVariable:", result)
  })
  .catch((error) => {
    console.error("Error:", error)
  })
