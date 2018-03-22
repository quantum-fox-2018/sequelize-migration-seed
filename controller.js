const model = require('./models')
const view = require('./view.js')
class Controller{
  static showContact(){
      model.Contact.findAll({raw:true}).then(data=>{
        view.print(data);
        process.exit();
      })
  }
  static addContact(name,email,phone){
    model.Contact.create({name,email,phone,createdAt:new Date(),
      updatedAt:new Date()}).then(data=>{
      view.print('berhasil diinput')
    })
  }
  static updateContact(idUpdate,param){
    model.Contact.update({[param[0]]:param[1]},
        {where: {id:idUpdate}})
        .then(data=>{
          view.print('updated successfuly')
        })
  }
  static deleteContact(idDelete){
    model.Contact.destroy({
      where: {
        id:idDelete
      }
      }).then(data=>{
          view.print('deleted successfuly')
        })
  }
  static showAddress(){
      model.Address.findAll({raw:true}).then(data=>{
        view.print(data);
        process.exit();
      })
  }
  static addAddress(street,city,zip_code){
    model.Address.create({street,city,zip_code,createdAt:new Date(),
      updatedAt:new Date()}).then(data=>{
      view.print('berhasil diinput')
    })
  }
  static updateAddress(idUpdate,param){
    model.Address.update({[param[0]]:param[1]},
        {where: {id:idUpdate}})
        .then(data=>{
          view.print('updated successfuly')
        })
  }
  static deleteAddress(idDelete){
    model.Address.destroy({
    where: {
        id:idDelete
    }
    }).then(data=>{
        view.print('deleted successfuly')
      })
  }
}
module.exports = Controller
