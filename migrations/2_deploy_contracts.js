var SolidityApp = artifacts.require("./SolidityApp.sol");

module.exports = function(deployer) {
  deployer.deploy(SolidityApp);
};
