const fs = require("fs")
const EthereumTx = require("ethereumjs-tx").Transaction

module.exports = async function getRawTx(privateKeyString, toAddress, value, gasLimit, gasPrice, nonce, contractByteCodePath, chain) {
  const privateKey = Buffer.from(`${privateKeyString.slice(2)}`, "hex")
  const bytecode = fs.readFileSync(contractByteCodePath, "utf8").trim()

  const contract = new EthereumTx(
    {
      nonce: nonce,
      gasPrice: gasPrice,
      gasLimit: gasLimit,
      to: toAddress,
      value: value,
      data: "0x" + bytecode,
    },
    {
      chain: chain,
      hardfork: "petersburg",
    }
  )

  contract.sign(privateKey)
  const serializedTx = contract.serialize()
  const rawTx = "0x" + serializedTx.toString("hex")

  console.log("rawTx length:", rawTx.length)
  return rawTx
}