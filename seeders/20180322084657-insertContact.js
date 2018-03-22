'use strict';
const fs = require('fs')
var fileContact = fs.readFileSync('./contacts.csv')
.toString()
.trim()
.split('\n')
var arrContact=[]
for (let i = 0; i < fileContact.length; i++) {
  var splitContact=fileContact[i].split(',')
  for (let j = 1; j < splitContact.length; j++) {
    var objContact={}
    objContact['name'] = splitContact[1]
    objContact['email'] = splitContact[2]
    objContact['phone'] = splitContact[3]
    objContact['createdAt'] = new Date()
    objContact['updatedAt'] = new Date()
  }
  arrContact.push(objContact)
}
console.log(arrContact);
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
  return queryInterface.bulkInsert('Contacts', arrContact,{});
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
