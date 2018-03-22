const Model = require('../models/index.js');
const ViewContact = require('../view/contact.js').ViewContact;

class ControllerContact {

  static show(){

    Model.Contact.findAll({
      raw: true,
      order: [['updatedAt', 'ASC']]
    }).then(contacts => {
      ViewContact.list(contacts);
      process.exit()
    })
  }

  static add(name, email, phone){

    Model.Contact.create({ name: name, email: email, phone:phone })
    .then(() => Model.Contact.findOrCreate({where: {name: name}, defaults: {job: email}}))
    .spread((Contact, created) => {
    ViewContact.add(Contact.get({
      plain: true
    }))
      process.exit();
    })
  }

  static update(contactId, newEmail){

    let newData = {
      email: newEmail
    };

    Model.Contact.update(newData, {where: { id: contactId } })
    .then(updatedData => {
      ViewContact.update();
      process.exit()
    })
  }

  static delete(contactId){

    Model.Contact.destroy({
      where: { id: contactId }
    })
    .then(() => {
      ViewContact.delete(contactId)
      process.exit()
    })
  }
}


module.exports = {ControllerContact:ControllerContact};
