const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/d6b7c4625a424f51a9d2c7a45d6024b1");

const queryBlockchain = async () => {
    const block = await provider.getBlockNumber();
    console.log("Current Block Number:", block);
}

queryBlockchain(); // Call the function to execute it
