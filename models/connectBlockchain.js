const { ethers } = require("ethers");
const connectBlockchain=()=>{
    // const etherScan = new ethers.providers.EtherscanProvider('maticmum','CJWX9VHAEBX1JGQFXMN1ZWF3BBH3P8GBQ3');
    const abi = '[{"inputs":[],"name":"getUserName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"newUserName","type":"string"}],"name":"setUserName","outputs":[],"stateMutability":"nonpayable","type":"function"}]';

    // const userWallet = new ethers.Wallet('3e8bbb2e8e85be328b5e744434b0e524504f7ad83e0df97fbcd2bb7dd8a43a3e',etherScan);
    const connectContact = new ethers.Contract('0x53343a0D223627C5cD672987C669d0Aa3Da07480',abi);
    return connectContact;
}
export default connectBlockchain;