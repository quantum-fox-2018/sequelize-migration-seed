const model = require('../models');

class ControllerAddress {
  static list(callback) {
    model.Address.findAll({raw:true})
    .then(data => {
      callback(data);
    })
  }

  static add(obj, callback) {
    let address = model.Address.build({
      street: obj.street,
      city: obj.city,
      zip_code: obj.zip_code
    })
    address.save()
    .then(() => {
      callback(address);
    })
  }

  static update(id, column, value, callback) {
    let address = model.Address.findById(id)
    .then(function(address) {
      console.log(column);
      console.log(value);
      address.update({
        [column]: value
      })
      .then(function(addressUpdate) {
        callback(addressUpdate);
      });
    });
  }

  static delete(id, callback) {
    let address = model.Address.findById(id)
    .then(function(address) {
      address.destroy()
      .then(function() {
        callback(address);
      });
    });
  }
}

module.exports = ControllerAddress;
