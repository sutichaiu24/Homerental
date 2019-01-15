const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

// const provider = ganache.provider();
// const web3 = new Web3(provider)
const web3 = new Web3(ganache.provider());
const {interface,bytecode} = require('../compile');

let accounts;
let inbox
beforeEach(async() => {
  accounts = await web3.eth.getAccounts();
  homerental = await new web3.eth.Contract(JSON.parse(interface))
   .deploy({data: bytecode,arguments:['123']})
   .send({from: accounts[1],gas: '1000000'});
});

describe('HomeRental',()=>{
  it('deploys a contract',()=>{
      console.log(homerental);
      //assert.ok(inbox.options.address);
  });
  it ('has an address', ()=>{
      assert.ok(homerental.options.address);
  })
  it ('has a default message', async() =>{
     const message = await homerental.methods.rentcontract().call();
     assert.equal(message,123)
  })
  it('can change the message', async()=>{
     await homerental.methods.setMessage('bye').send({from: accounts[0]});
     const message = await homerental.methods.rentcontract().call();
     assert.equal(message,'bye')
  })
});
