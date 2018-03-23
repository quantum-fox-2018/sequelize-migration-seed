'use strict';
const fs = require('fs');
let address = fs.readFileSync('./addresses.csv','utf8').split('\n');
let detailData=[]
for (var i = 0; i < address.length-1; i++) {
  let data = address[i].split(',')
  let objData={ street:data[1],
                city:data[2],
                zip_code:data[3],
                createdAt: new Date(),
                updatedAt: new Date()
                };
  detailData.push(objData)
}


//console.log(detailData);





console.log(address);
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses',detailData , {});

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [], {});
    */
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
