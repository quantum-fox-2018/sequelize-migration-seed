'use strict';

const fs = require('fs');


module.exports = {
  up: (queryInterface, Sequelize) => {

    // let data = fs.readFileSync('./addresses.csv', 'utf8').split('\n')
    
    // let dataAddress = [];
    // for(let i=0; i<data.length; i++){
    //   let newData = data[i].split(',')
    //   let obj = {
    //     street: newData[1],
    //     city: newData[2],
    //     zip_code: newData[3],
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   };
    //   dataAddress.push(obj)
    // }


    // return queryInterface.bulkInsert('Addresses', dataAddress, {});
  },

  down: (queryInterface, Sequelize) => {
    
  }
};