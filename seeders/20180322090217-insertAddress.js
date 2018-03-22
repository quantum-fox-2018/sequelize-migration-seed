'use strict';
const fs =  require('fs')
var fileAddress = fs.readFileSync('./addresses.csv')
  .toString()
  .trim()
  .split('\n')

var arrAddress = []
for (let i = 0; i < fileAddress.length; i++) {
  var splitAddress=fileAddress[i].split(',')
  for (let j = 0; j < splitAddress.length; j++) {
    var objAddress = {}
    objAddress['street'] = splitAddress[1]
    objAddress['city'] = splitAddress[2]
    objAddress['zip_code'] = splitAddress[3]
    objAddress['createdAt'] = new Date()
    objAddress['updatedAt'] = new Date()
  }
  arrAddress.push(objAddress)
}
console.log(arrAddress);

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
    return queryInterface.bulkInsert('Addresses',arrAddress,{})
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
