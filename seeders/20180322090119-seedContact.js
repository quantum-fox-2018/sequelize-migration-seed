'use strict';
const fs = require('fs')

var contacts = fs.readFileSync('./contacts.csv','utf8').split('\n')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let arrayOfContacts = []
    for(let i=0; i<contacts.length-1; i++){
      let contact = contacts[i].split(',')
      let name = contact[1]
      let email = contact[2]
      let phone = contact[3]
      let obj = {
        name: name,
        email: email,
        phone: phone,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      arrayOfContacts.push(obj)
    }
    return queryInterface.bulkInsert('Contacts',arrayOfContacts,{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts',null,{});
  }
};
