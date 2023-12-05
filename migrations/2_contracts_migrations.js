var DocumentHashStorage = artifacts.require("DocumentHashStorage")

module.exports = function (deployer) {
  // deployer.deploy(HelloWorld);
  deployer.deploy(DocumentHashStorage)
}
