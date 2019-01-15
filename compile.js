const path = require('path');
const fs = require('fs');
const solc = require('solc');

const HomeRentalPath = path.resolve(__dirname,'contracts','HomeRental.sol');
const source = fs.readFileSync(HomeRentalPath,'utf8');
module.exports = solc.compile(source,1).contracts[':HomeRental']
