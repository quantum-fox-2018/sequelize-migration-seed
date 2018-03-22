const View = require('./view');
const Model = require('./models/index.js');
const Contact = require('./controller/contact.js')
const Address = require('./controller/Adresses.js')
//kaya controller
// console.log(Contact.Contact);
class App {
  static checkCommand(param_command){
    let commands = param_command[2].split(':');
    let firstCommand = commands[0];
    let secondCommand = commands[1];

    switch (firstCommand) {
      case 'contacts':
      case 'contact':
        switch (secondCommand) {
          case 'list':
            Contact.show((results) => {
              View.show(results)
              process.exit();
            })
            break;

          case 'add':
            Contact.add(param_command, (results) => {
              View.show(results)
              process.exit();
            })
            break;
          case 'update':
            Contact.update(param_command, (results) => {
              View.show(results)
              process.exit();
            })
            break;

          case 'delete':
            let contactId = param_command[3];
            Contact.delete(contactId, (results) => {
              View.show(results)
              process.exit();
            })
            break;
          default:
            View.show('command belum ada di dalam program')
        }
        break;

      case 'addresses':
      case 'address':
        switch (secondCommand) {
          case 'list':
            Address.show((results) => {
              View.show(results)
              process.exit();
            })
            break;

          case 'add':
            Address.add(param_command, (results) => {
              View.show(results)
              process.exit();
            })
            break;
          case 'update':
            Address.update(param_command, (results) => {
              View.show(results)
              process.exit();
            })
            break;

          case 'delete':
            let contactId = param_command[3];
            Address.delete(contactId, (results) => {
              View.show(results)
              process.exit();
            })
            break;
          default:
            View.show('command belum ada di dalam program')
        }
        break;

      default:
        View.show('command belum ada di dalam program')

    }

  }
}

module.exports = App;
