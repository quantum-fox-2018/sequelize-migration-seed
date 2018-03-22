const Model = require('../models/index.js');
const ViewAddress = require('../view/address.js').ViewAddress;

class ControllerAddress {

  static show(){

    Model.Address.findAll({
      raw: true,
      order: [['updatedAt', 'ASC']]
    }).then(addresses => {
      ViewAddress.list(addresses);
      process.exit()
    })
  }

  static add(street, city, zipCode){

    Model.Address.create({ street: street, city: city, zip_code:zipCode })
    .then(() => Model.Address.findOrCreate({where: {street: street}, defaults: {city: city}}))
    .spread((address, created) => {
    ViewAddress.add(address.get({
      plain: true
    }))
      process.exit();
    })
  }

  static update(addressId, street){

    let newData = {
      street: street
    };

    Model.Address.update(newData, {where: { id: addressId } })
    .then(updatedData => {
      ViewAddress.update();
      process.exit()
    })
  }

  static delete(addressId){

    Model.Address.destroy({
      where: { id: addressId }
    })
    .then(() => {
      ViewAddress.delete(addressId)
      process.exit()
    })
  }
}


module.exports = {ControllerAddress:ControllerAddress};
