const Models = require('../models/index');
const AddressView = require('../view/AddressView');

class AddressController{
  static showAddress(){
    Models.Address.findAll({ raw: true })
    .then(DataAddress => {
      AddressView.displayAddress(DataAddress)
      // console.log(contact)
    })

  }

  static addAddress(street,city,zip_code){
    Models.Address.create({ street: street, city: city, zip_code: zip_code })
    .then(addData => AddressView.addAddress(addData.dataValues))
    // console.log(`${name} ${email} ${phone}`)
  }

  static updateAddress(id,column,value){
    Models.Address.update({
      [column]:value,
      updateAt : new Date()
    },
    {
      where:{id:id}
    })
    .then(result => {
      AddressView.updateAddress(result)
    })
  }

  static deleteAddress(id){
    Models.Address.destroy({
      where: {
        id: id
      }
    })
    .then(rowDeleted => {
      if(rowDeleted === 1){
        console.log('Delete Successfully')
      }
    })
  }



}

module.exports = AddressController

// ContactController.showContact()
