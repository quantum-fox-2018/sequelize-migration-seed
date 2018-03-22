const Models = require('../models/index');
const ContactView = require('../view/ContactView');

class ContactController{
  static showContact(){
    Models.Contact.findAll({ raw: true })
    .then(contact => {
      ContactView.displayContact(contact)
      // console.log(contact)
    })

  }

  static addContact(name,email,phone){
    Models.Contact.create({ name: name, email: email, phone: phone })
    .then(addData => ContactView.addContact(addData.dataValues))
    // console.log(`${name} ${email} ${phone}`)
  }

  static updateContact(id,column,value){
    Models.Contact.update({
      [column]:value,
      updateAt : new Date()
    },
    {
      where:{id:id}
    })
    .then(result => {
      ContactView.updateContact(result)
    })
  }

  static deleteContact(id){
    Models.Contact.destroy({
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

module.exports = ContactController

// ContactController.showContact()
