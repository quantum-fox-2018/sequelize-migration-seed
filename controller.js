const Model = require('./models')
const View = require('./view')

class Controller {
  static acceptCommand(command){
    if (command[2] === "contacts:list") {
      Model.Contacts.findAll({raw:true})
      .then(function(data){
        View.display(data)
      }).catch(function(err){
        View.display(err)
      })
    }else if (command[2] === "contacts:add") {
      let nameInput = command[3]
      let phoneInput = command[4]
      let emailInput = command[5]

      Model.Contacts.build({
        name: nameInput,
        phone: phoneInput,
        email: emailInput
      }).save()
      .then(info => {
        View.display("data saved");
      })
      .catch(error => {
        View.display(error)
      })

    }else if (command[2] === "contacts:update") {
      let idInput = command[3]
      let columnInput = command[4]
      let valueInput = command[5]

      let contactAttributes = {}
      contactAttributes[columnInput] = valueInput

      Model.Contacts.update(
        contactAttributes,
        {where: {id: idInput}}
      ).then((result) => {
        View.display("update success")
      }).catch((error) => {
        View.display(error)
      })

    }else if (command[2] === "contacts:delete") {
      Model.Contacts.destroy({
        where: {
          id: command[3]
        }
      }).then(function(rowDeleted){
        if (rowDeleted === 1) {
          View.display("delete successful");
        }
      }).catch(function(err){
        console.log(err);
      })
    }else if (command[2] === "address:list") {
      Model.Addresses.findAll({raw:true})
      .then(function(data){
        View.display(data)
      }).catch(function(err){
        View.display(err)
      })
    }else if (command[2] === "address:add") {
      let streetInput = command[3]
      let cityInput = command[4]
      let zipCodeInput = command[5]

      Model.Addresses.create({
        street: streetInput,
        city: cityInput,
        zipCode: zipCodeInput
      })
      .then(info => {
        View.display("data saved");
      })
      .catch(error => {
        View.display(error)
      })

    }else if (command[2] === "address:update") {
      let idInput = command[3]
      let columnInput = command[4]
      let valueInput = command[5]

      let contactAttributes = {}
      contactAttributes[columnInput] = valueInput

      Model.Addresses.update(
        contactAttributes,
        {where: {id: idInput}}
      ).then((result) => {
        View.display("update success")
      }).catch((error) => {
        View.display(error)
      })

    }else if (command[2] === "address:delete") {
      Model.Addresses.destroy({
        where: {
          id: command[3]
        }
      }).then(function(rowDeleted){
        if (rowDeleted === 1) {
          View.display("delete successful");
        }
      }).catch(function(err){
        console.log(err);
      })
    }

  }

}

module.exports = Controller
