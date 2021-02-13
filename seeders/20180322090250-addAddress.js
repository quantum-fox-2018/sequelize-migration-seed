'use strict';

const fs = require('fs')
let dataAddress = fs.readFileSync('./addresses.csv').toString().trim().split('\n')

var arrAddress = []
for(let i=0; i<dataAddress.length; i++){
  let address = dataAddress[i].split(',')
  for(let j=0; j<address.length; j++){
    var newObj = {
      street: address[1],
      city: address[2],
      zip_code: address[3],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  }
  arrAddress.push(newObj)
}
// console.log(arrAddress)

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Addresses', arrAddress, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
