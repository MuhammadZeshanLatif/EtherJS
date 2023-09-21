const {ethers} = require("ethers");
const provider= new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/d6b7c4625a424f51a9d2c7a45d6024b1");
const walletAddress="0x8809d1ed050c32e6c77f12c12f7fe7d99d8e842c";
const walletAbi=[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

 let contractIntrection =async ()=>{
    const walletContract= new ethers.Contract(
        walletAddress,
        walletAbi,
        provider);
     let name = await walletContract.name();
     console.log("Contract name is",name);
    //  let num = await walletContract.num();
    //  console.log("num :",num);
     let getValue = await walletContract.getValue();
     console.log("Value :",getValue);
     let contractBalance = await walletContract.contractBalance();
     console.log("Contract Balance :",contractBalance);
     let accountBalance=await walletContract.accountBalance("0xcE2a59bB722c17c555D52dcD8ea40E32e1E6Cd55");
     let convertedBal= ethers.formatEther(accountBalance);
     console.log("Account Balance :",convertedBal);
}
contractIntrection();