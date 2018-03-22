'use strict';
const fs = require('fs')


module.exports = {
  
  up: (queryInterface, Sequelize) => {

    // let data = fs.readFileSync('./contacts.csv', 'utf8').split('\n')
    // let dataContact = [];
    // for(let i=0; i<data.length; i++){
    //   let newData = data[i].split(',')
    //   let obj = {
    //     name: newData[1],
    //     email: newData[2],
    //     phone: newData[3],
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   };
    //   dataContact.push(obj)
    // }

    // // bulk insert need Array of Object
    // return queryInterface.bulkInsert('Contacts', dataContact, {});
  },

  down: (queryInterface, Sequelize) => {
  }
};