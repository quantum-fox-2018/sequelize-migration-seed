const Model = require('../models/index.js');

class Contact {

  static show(cbResult){
    Model.Contact.findAll({raw:true})
    .then(results =>{
      cbResult(results);
    })
    .catch(err =>{
      cbResult(err);
    })
  }

  static add(param_command, cbResult){
    let name = param_command[3];
    let email = param_command[4];
    let phone = param_command[5];
    //INSERT INTO
    Model.Contact.create({
      name: name,
      email: email,
      phone: phone
    })
    .then(newContact => {
      cbResult(`Contact ${newContact.name}, dengan Id ${newContact.id} telah dibuat.`)

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
    Model.Contact.findOne({where:{
      id: id
    }})
    .then(ContactResult => {
      // console.log(ContactResult);
      ContactResult.updateAttributes({
        [column]: value
      })
      .then(newContact => {
        cbResult(`contact ${newContact.name}, dengan Id ${newContact.id} berhasil di update`);
      })
      .catch(err =>{
        cbResult(err);
      })

    })
  }
  static delete(id, cbResult){
    Model.Contact.destroy({
      where: {id: id}
    })
    .then(DeletedResult => {
      if(DeletedResult = 0){
        cbResult(`Contact gagal dihapus`)
      }else{
        cbResult(`Contact ${id} Berhasil dihapus`)
      }
    })
    .catch(err =>{
      cbResult(err);
    })
  }
}

module.exports = Contact;
