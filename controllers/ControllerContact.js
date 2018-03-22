const model = require('../models');

class ControllerContact {
  static list(callback) {
    model.Contact.findAll({raw:true})
    .then(data => {
      callback(data);
    })
  }

  static add(obj, callback) {
    let contact = model.Contact.build({
      name: obj.name,
      email: obj.email,
      phone: obj.phone
    })
    contact.save({raw:true})
    .then(() => {
      callback(contact);
    })
  }

  static update(id, column, value, callback) {
    let contact = model.Contact.findById(id)
    .then(function(contact) {
      contact.update({
        [column]: value
      })
      .then(function(contactUpdate) {
        callback(contactUpdate);
      });
    });
  }

  static delete(id, callback) {
    let contact = model.Contact.findById(id)
    .then(function(contact) {
      contact.destroy()
      .then(function() {
        callback(contact);
      });
    });
  }
}

module.exports = ControllerContact;
