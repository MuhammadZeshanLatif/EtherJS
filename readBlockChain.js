// const { ethers } = require("ethers");

// const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/d6b7c4625a424f51a9d2c7a45d6024b1");

// const queryBlockchain = async () => {
//     const block = await provider.getBlockNumber();
//     console.log("Current Block Number:", block);
// }

// queryBlockchain(); // Call the function to execute it

const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/d6b7c4625a424f51a9d2c7a45d6024b1");

const queryBlockchain = async () => {
    const address = "0xcE2a59bB722c17c555D52dcD8ea40E32e1E6Cd55"; // Replace with the address you want to check

    try {
        const balance = await provider.getBalance(address);
        console.log("Balance:", balance, "ETH");
    } catch (error) {
        console.error("Error fetching balance:", error);
    }
};

queryBlockchain(); // Call the function to execute it

