const models = require('./models');
const Main = require('./main.js')
const View = require('./view.js');
class Controller {
  constructor() {

  }

  static input(command, input) {
    if (command == 'contacts:list') {
      // models.Contact.findById(1).then(value => {
      //   console.log(value.dataValues)
      // })
      models.Contact.findAll({raw:true}).then(value => {
        View.getAllDataContact(value)
      })
    } else if (command == 'contacts:add') {
      models.Contact.create({name: input[0], email: input[1], phone: input[2]})
      .then(function(statusCreate) {
      // View.saveDataContact('data added')
      View.saveDataContact({id: statusCreate.id, name: statusCreate.name, email: statusCreate.email,
        phone: statusCreate.phone, updatedAt: statusCreate.updatedAt, createdAt: statusCreate.createdAt})
      });
    } else if (command == 'contacts:update') {
      models.Contact.update({[input[1]] : input[2]}, {where: {id: input[0]}})
      .then(function(statusUpdate) {
        View.updateContact(statusUpdate)
      }).catch(function (err) {
        View.updateContact(err)
      })
      // View.updateContact('update berhasil')
    } else if (command == 'contacts:delete') {
      models.Contact.destroy({where: {id: input[0]}})
      .then(function (statusDeleted) {
        console.log(statusDeleted)
        View.deleteContact(statusDeleted)
      }).catch(function (err) {
        View.deleteContact(err)
      })
    }
  }
}



module.exports = Controller;
