// console.log("----");
const Nftmarketplace = artifacts.require("../contracts/Nftmarketplace.sol");
// console.log("---",Nftmarketplace);

module.exports = function (deployer) {
    // console.log("----");
  const address=deployer.deploy(Nftmarketplace); // Pass the initial value as an argument
  console.log("This is contract address",address);
};