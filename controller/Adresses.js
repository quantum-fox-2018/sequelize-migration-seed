const Model = require('../models/index.js');

class Addresses {

  static show(cbResult){
    Model.Addresses.findAll({raw:true})
    .then(results =>{
      cbResult(results);
    })
    .catch(err =>{
      cbResult(err);
    })
  }

  static add(param_command, cbResult){
    let street = param_command[3];
    let city = param_command[4];
    let zip_code = param_command[5];
    //INSERT INTO
    Model.Addresses.create({
      street: street,
      city: city,
      zip_code: zip_code
    })
    .then(newAdress => {
      cbResult(`Jalan ${newAdress.street}, dengan Id ${newAdress.id} telah dibuat.`)

    })
    .catch(err =>{
      cbResult(err);
    })
  }

  static update(param_command, cbResult){
    let id = param_command[3];
    let column = param_command[4];
    let value = param_command[5];
    // View.show(id+' '+column+' '+value);
    Model.Addresses.findOne({where:{
      id: id
    }})
    .then(AddressResult => {
      // console.log(ContactResult);
      AddressResult.updateAttributes({
        [column]: value
      })
      .then(newAdress => {
        cbResult(`Adress dengan Id ${newAdress.id} berhasil di update`);
      })
      .catch(err =>{
        cbResult(err);
      })

    })
  }
  static delete(id, cbResult){
    Model.Addresses.destroy({
      where: {id: id}
    })
    .then(DeletedResult => {
      if(DeletedResult = 0){
        cbResult(`Adress gagal dihapus`)
      }else{
        cbResult(`Adress ${id} Berhasil dihapus`)
      }
    })
    .catch(err =>{
      cbResult(err);
    })
  }
}

module.exports = Addresses;
