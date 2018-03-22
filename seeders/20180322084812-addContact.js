'use strict';

const fs = require('fs')

let dataContact = fs.readFileSync('./contacts.csv').toString().trim().split('\n')

var arrContact = []
for(let i=0; i<dataContact.length; i++){
  let contact = dataContact[i].split(',')
  for(let j=0; j<contact.length; j++){
    var newObj = {
      name: contact[1],
      email: contact[2],
      phone: contact[3],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  }
  arrContact.push(newObj)
}
// console.log(arrContact)

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
      return queryInterface.bulkInsert('Contacts', arrContact, {})
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
