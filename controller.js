var Model = require('./models')
var View = require('./view.js');

class Controller {
  static viewList() {
    Model.Contact.findAll({raw: true})
    .then(data => {
      View.viewList(data);
    })
  }

  static addContact(name, email, phone) {
    Model.Contact.create({
      name: name,
      email: email,
      phone: phone
    })
    .then(newContact => {
      View.addContact(newContact);
    })
  }

  static updateContact(id, column, value) {
    Model.Contact.update({
      [column]: value
    }, {
      where: {id: id}
    })
    .then(updated => {
      View.updateContact(updated);
    })
  }

  static deleteContact(id) {
    Model.Contact.destroy({
      where: {id: id}
    })
    .then(deleted => {
      View.deleteContact(deleted);
    })
  }

  static addAddress(street, city, zipCode) {
    Model.Address.create({
      street: street,
      city: city,
      zip_code: zipCode
    })
    .then (newAddress =>
    View.addAddress(newAddress.toJSON()))
  }

  static viewAddresses() {
    Model.Address.findAll()
    .then(data =>
    View.showAddresses(data));
  }

  static updateAddress(id, column, value) {
    Model.Address.update({
      [column]: value
    }, {
      where: {id: id}
    })
    .then(updated => {
      View.updateAddress(updated);
    })
  }

  static deleteAddress(id) {
    Model.Address.destroy({
      where: {id: id}
    })
    .then(deleted => {
      View.deleteAddress(deleted);
    })
  }
}

module.exports = Controller;
