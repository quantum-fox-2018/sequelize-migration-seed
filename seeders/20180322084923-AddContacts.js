'use strict';
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

    const fs = require('fs')

    let data = fs.readFileSync('./contacts.csv','utf8').trim().split('\r\n')
    
    let new_input = [];
    for(let i = 0; i < data.length; i++) {
      new_input.push(data[i].split(','));
    }
    
    let result = [];
    for(let i = 0; i < new_input.length; i++) {
      let newObj = {
        name: new_input[i][1],
        email: new_input[i][2],
        phone: new_input[i][3],
        createdAt: new Date(),
        updatedAt: new Date()
      }
      result.push(newObj)
    }
   
    return queryInterface.bulkInsert('Contacts', result, {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete('Contacts', null, {});

  }
};
