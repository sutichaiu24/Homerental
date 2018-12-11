const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');

const provider = new HDWalletProvider(
'kit divert laundry limit vivid mail leg cactus pumpkin siege solution airport',
'https://rinkeby.infura.io/v3/066d02d738f04ba8a66723b9a4d7ac23'
);
const web3 = new Web3(provider);

const deploy = async () =>{
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account',accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data: bytecode,arguments:['Hi there!']})
  .send({gas:'1000000',from: accounts[0]});
 console.log('Contract deploy to',result.options.address);
};
deploy();
