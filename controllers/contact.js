/*jshint esversion:6*/

const models = require('../models');
const view = require('../views/contact.js');

class ContactController {
  static list(command) {
    models.Contact.findAll({
        raw: true
      })
      .then(row => view.display(row))
      .catch(err => {
        console.log(err);
      });
  }
  static add(name, email, phone) {
    models.Contact.create({
        name: name,
        email: email,
        phone: phone,
        createdAt: new Date(),
        updatedAt: new Date()
      }).then(() => models.Contact.findAll({
        raw: true
      }))
      .then(row => view.display(row))
      .catch(err => {
        console.log(err);
      });
  }
  static update(id, column, value) {
    models.Contact.update({
        [column]: value,
        updatedAt: new Date()
      }, {
        where: {
          id: id
        }
      }).then(() => models.Contact.findAll({
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
    models.Contact.destroy({
        where: {
          id: id
        }
      })
      .then(() => {
        models.Contact.findAll({
            raw: true
          })
          .then(row => {
            view.display(row);
          });
      });
  }
}
module.exports = ContactController;
