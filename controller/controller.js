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

  static add(email, phone, name) {
    Models.Contacts.create({
      name: name,
      email: email,
      phone: phone
    })
    .then(newContact => {
      View.add(newContact.dataValues);
    })
    .catch(err => {
      console.log(err);
    })
  }

  static update(id, column, values) {
    Models.Contacts.findOne({
      where: {id: id}
    })
    .then(contact => {
      contact.updateAttributes({
        [column]: values
      })
      .then(result => {
        View.update(result.dataValues);
      })
      .catch(err => {
        console.log(err);
      })
    })
  }

  static delete(id) {
    Models.Contacts.destroy({
      where: {id: id}
    })
    .then(deleted => {
      if (deleted == 1) {
        View.delete('Delete data success');
      } else {
        View.delete('Delete data failed');
      }
    })
  }
}

class Address {
  static list() {
    Models.Addresses.findAll({raw: true})
    .then(Addresses => {
      View.list(Addresses);
    })
    .catch(err => {
      console.log(err);
    })
  }

  static add(city, zip_code, street) {
    Models.Addresses.create({
      street: street,
      city: city,
      zip_code: zip_code
    })
    .then(newAddresses => {
      View.add(newAddresses.dataValues);
    })
    .catch(err => {
      console.log(err);
    })
  }

  static update(id, column, values) {
    Models.Addresses.findOne({
      where: {id: id}
    })
    .then(contact => {
      contact.updateAttributes({
        [column]: values
      })
      .then(result => {
        View.update(result.dataValues);
      })
      .catch(err => {
        console.log(err);
      })
    })
  }

  static delete(id) {
    Models.Addresses.destroy({
      where: {id: id}
    })
    .then(deleted => {
      if (deleted == 1) {
        View.delete('Delete data success');
      } else {
        View.delete('Delete data failed');
      }
    })
  }
}

module.exports = {
  Contact,
  Addresses
}
