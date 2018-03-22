const {Contact} = require('../models')

class Contacts {
  static list(callback){
    Contact.findAll({raw:true}).then(contacts=>{
      callback(contacts)
    })
  }

  static add(input,callback){
    Contact.create({name:input[0],email:input[1],phone:input[2]}).then(contacts=>{
      callback(input[0])
    })
  }

  static update(input,callback){
    Contact.update({[input[1]]:input[2]},{
      where: {
        id: input[0]
      }
    })
    callback(input[0],input[1])
  }

  static delete(input,callback){
    Contact.destroy({
      where: {
        id: input[0]
      }
    })
    callback(input[0])
  }
}

module.exports = Contacts
