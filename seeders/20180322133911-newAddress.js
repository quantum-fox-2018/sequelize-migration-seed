'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses', [{
      street: 'Keegan Coleman',
      city: 'leo.Cras.vehicula@musProinvel.edu',
      zip_code: '1-998-626-8896',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      street: 'Keegan Coleman',
      city: 'leo.Cras.vehicula@musProinvel.edu',
      zip_code: '1-998-626-8896',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      street: 'Keegan Coleman',
      city: 'leo.Cras.vehicula@musProinvel.edu',
      zip_code: '1-998-626-8896',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      street: 'Keegan Coleman',
      city: 'leo.Cras.vehicula@musProinvel.edu',
      zip_code: '1-998-626-8896',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      street: 'Keegan Coleman',
      city: 'leo.Cras.vehicula@musProinvel.edu',
      zip_code: '1-998-626-8896',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      street: 'Keegan Coleman',
      city: 'leo.Cras.vehicula@musProinvel.edu',
      zip_code: '1-998-626-8896',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      street: 'Keegan Coleman',
      city: 'leo.Cras.vehicula@musProinvel.edu',
      zip_code: '1-998-626-8896',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      street: 'Keegan Coleman',
      city: 'leo.Cras.vehicula@musProinvel.edu',
      zip_code: '1-998-626-8896',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      street: 'Keegan Coleman',
      city: 'leo.Cras.vehicula@musProinvel.edu',
      zip_code: '1-998-626-8896',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      street: 'Keegan Coleman',
      city: 'leo.Cras.vehicula@musProinvel.edu',
      zip_code: '1-998-626-8896',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
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
