const ContactController = require('./controller/ContactController');
const AddressController = require('./controller/AddressController');
const argv = process.argv

let command = argv[2].split(':')
if(command[0] === 'contacts'){
  switch (command[1]) {
    case 'list':
      ContactController.showContact()
    break;
    case 'add':
      ContactController.addContact(argv[3],argv[4],argv[5])
    break;
    case 'update':
      ContactController.updateContact(argv[3],argv[4],argv[5])
    break;
    case 'delete':
    ContactController.deleteContact(argv[3])
    break;

    default:
  }

}
else{
  switch (command[1]) {
    case 'list':
      AddressController.showAddress()
    break;
    case 'add':
      AddressController.addAddress(argv[3],argv[4],argv[5])
    break;
    case 'update':
      AddressController.updateAddress(argv[3],argv[4],argv[5])
    break;
    case 'delete':
      AddressController.deleteAddress(argv[3])
    break;

    default:

  }

}
