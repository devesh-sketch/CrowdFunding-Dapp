// const hre = require("hardhat");

// async function main() {
//   const CampaignFactory = await hre.ethers.getContractFactory("CampaignFactory");
//   const campaignFactory = await CampaignFactory.deploy();
//   await campaignFactory.deployed();
//   console.log("Factory deployed to:", campaignFactory.address);
// }

// main()
//       .then(()=>process.exit(0))
//       .catch((error)=>{
//         console.log(error)
//         process.exit(1);
//       })



// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  const CampaignFactory = await hre.ethers.getContractFactory("CampaignFactory");
  const campaignFactory = await CampaignFactory.deploy();

  await campaignFactory.waitForDeployment();   // <-- new ethers v6 syntax
  console.log("CampaignFactory deployed to:", await campaignFactory.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
