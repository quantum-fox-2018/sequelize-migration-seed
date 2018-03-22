const View = require('./view.js');
const model = require('./models/index.js');

class Controller {

  static command(indexArgv){
    if (indexArgv[2] === 'contacts:list'){
      model.Contact.findAll({
        raw:true
      })
        .then((Contacts)=>{
          View.print(Contacts);
          process.exit();
        })
        .catch((err)=>{
          View.print(err);
        })
    } else if (indexArgv[2] === 'contacts:add') {
      model.Contact.create({
        name: indexArgv[3],
        email: indexArgv[4],
        phone: indexArgv[5]
      })
        .then ((Contacts)=>{
          View.print(`add contact success`);
          process.exit();
        })
        .catch((err)=>{
          View.print(err);
        })
    } else if (indexArgv[2] === 'contacts:update') {
      let data;
      switch (indexArgv[4]) {
        case 'name':
          data = {name: indexArgv[5]};
          break;
        case 'email':
          data = {name: indexArgv[5]};
          break;
        case 'phone':
          data = {name: indexArgv[5]};
          break;
      }
      model.Contact.update(data, {
        where: {id: indexArgv[3]}
      })
        .then ((Contacts)=>{
          View.print(`update contact success`);
          process.exit();
        })
        .catch((err)=>{
          View.print(err);
        })
    } else if (indexArgv[2] === 'contacts:delete') {
      model.Contact.destroy({
        where: {id: indexArgv[3]}
      })
        .then ((Contacts)=>{
          View.print(`delete contact success`);
          process.exit();
        })
      .catch((err)=>{
        View.print(err);
        })
    } else if (indexArgv[2] === 'addresses:list') {
      model.Address.findAll({
        raw:true
      })
        .then((Contacts)=>{
          View.print(Contacts);
          process.exit();
        })
        .catch((err)=>{
          View.print(err);
        })
    } else if (indexArgv[2] === 'addresses:add') {
      model.Address.create({
        street: indexArgv[3],
        city: indexArgv[4],
        zip_code: indexArgv[5]
      })
        .then ((Address)=>{
          View.print(`add address success`);
          process.exit();
        })
        .catch((err)=>{
          View.print(err);
        })
    } else if (indexArgv[2] === 'addresses:delete') {
      model.Address.destroy({
        where: {id: indexArgv[3]}
      })
        .then ((Address)=>{
          View.print(`delete address success`);
          process.exit();
        })
        .catch((err)=>{
          View.print(err);
        })
    }
  }
}


module.exports = Controller;
