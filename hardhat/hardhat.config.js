// /** hardhat.config.js */
// require("@nomicfoundation/hardhat-ethers");
// require('dotenv').config({path:'./.env.local'});
// const { task } = require("hardhat/config");

// const privatekey=process.env.NEXT_PUBLIC_PRIVATE_KEY

// module.exports = {
//   solidity: "0.8.28",
//   networks: {
//     hardhat: {
//       accounts: {
//         mnemonic: "test test test test test test test test test test test junk",
//         count: 20,
//         initialIndex: 0,
//         accountsBalance: "1000000000000000000000" // 1000 ETH
//       }
//     },
//     defaultNetwork:"polygon",
//     polygon:{
//       url:process.env.NEXT_PUBLIC_RPC_URL,
//       accounts:[privatekey]
//     }
//   }
// };

// // Task to print all accounts
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();
//   for (const account of accounts) {
//     const balance = await hre.ethers.provider.getBalance(account.address);
//     console.log(account.address, hre.ethers.formatEther(balance), "ETH");
//   }
// });



/** hardhat.config.js */
require("@nomicfoundation/hardhat-ethers");
require('dotenv').config({ path: './.env.local' });
const { task } = require("hardhat/config");

const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;

module.exports = {
  defaultNetwork: "polygon",
  solidity: "0.8.28",
  networks: {
    hardhat: {
      accounts: {
        mnemonic: "test test test test test test test test test test test junk",
        count: 20,
        initialIndex: 0,
        accountsBalance: "1000000000000000000000" // 1000 ETH
      }
    },
    polygon: {
      url: process.env.NEXT_PUBLIC_RPC_URL,
      accounts: [privateKey]
    }
  }
};

// Task to print all accounts
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    const balance = await hre.ethers.provider.getBalance(account.address);
    console.log(account.address, hre.ethers.formatEther(balance), "ETH");
  }
});
