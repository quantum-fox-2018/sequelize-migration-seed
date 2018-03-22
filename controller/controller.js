const Models = require('../models')
const View = require('../view/view.js');

class Contact {
  static list() {
    Models.Contacts.findAll({raw: true})
    .then(contacts => {
      View.list(contacts);
    })
    .catch(err => {
      console.log(err);
    })
  }

  static add() {
  }

  static update() {

  }

  static delete() {

  }
}

module.exports = Contact;
