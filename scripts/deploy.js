const hre = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const NFTMarketPlace = await ethers.getContractFactory("NFTMarketPlace");
    const nftMarketPlace = await NFTMarketPlace.deploy();
  
    await nftMarketPlace.deployed();
  
    console.log(`NFTMarketPlace deployed to: ${nftMarketPlace.address}`);
}
  
  
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
