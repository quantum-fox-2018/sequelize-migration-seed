'use strict';
const fs = require('fs')

var addresses = fs.readFileSync('./addresses.csv','utf8').split('\n')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let arrayOfAddresses = []
    for(let i=0; i<addresses.length-1; i++){
      let address = addresses[i].split(',')
      let street = address[1]
      let city = address[2]
      let zipCode = address
      let obj = {
        street: street,
        city: city,
        zipCode: zipCode,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      arrayOfAddresses.push(obj)
    }
    return queryInterface.bulkInsert('Addresses',arrayOfAddresses,{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses',null,{});
  }
};
