var argv = process.argv
var command = argv[2];
var Controller = require('./controller.js')

if(command === 'contact:list') {
  Controller.viewList();
} else if(command === 'contact:add') {
  Controller.addContact(argv[3], argv[4], argv[5]);
} else if(command === 'contact:update') {
  Controller.updateContact(argv[3], argv[4], argv[5])
} else if(command === 'contact:delete') {
  Controller.deleteContact(argv[3])
} else if(command === 'address:add') {
  Controller.addAddress(argv[3], argv[4], argv[5])
} else if(command === 'address:list') {
  Controller.viewAddresses()
} else if(command === 'address:update') {
  Controller.updateAddress(argv[3], argv[4], argv[5])
} else if(command === 'address:delete') {
  Controller.updateAddress(argv[3])
}
