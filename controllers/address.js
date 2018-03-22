/*jshint esversion:6*/

const models = require('../models');
const view = require('../views/address.js');

class AddressController {
  static list(command) {
    models.Address.findAll({
        raw: true
      })
      .then(row => view.display(row))
      .catch(err => {
        console.log(err);
      });
  }
  static add(street, city, zip_code) {
    models.Address.create({
        street: street,
        city: city,
        zip_code: zip_code,
        createdAt: new Date(),
        updatedAt: new Date()
      }).then(() => models.Address.findAll({
        raw: true
      }))
      .then(row => view.display(row))
      .catch(err => {
        console.log(err);
      });
  }
  static update(id, column, value) {
    models.Address.update({
        [column]: value,
        updatedAt: new Date()
      }, {
        where: {
          id: id
        }
      }).then(() => models.Address.findAll({
        raw: true
      }))
      .then(row => {
        view.display(row);
      })
      .catch(err => {
        console.log(err);
      });
  }
  static delete(id) {
    models.Address.destroy({
        where: {
          id: id
        }
      })
      .then(() => {
        models.Address.findAll({
            raw: true
          })
          .then(row => {
            view.display(row);
          });
      });
  }
}
module.exports = AddressController;
