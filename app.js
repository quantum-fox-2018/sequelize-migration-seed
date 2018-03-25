const Controller = require('./controller.js')
var argv = process.argv

if(argv[2] == 'contact:list') {

    Controller.contactList()
} else if(argv[2] == 'contact:add') {

    Controller.addContact(argv[3], argv[4], argv[5])
} else if(argv[2] == 'contact:update') {

    Controller.updateContact(argv[3],argv[4],argv[5])
} else if(argv[2] == 'contact:delete') {

    Controller.removeContact(argv[3])
} else if(argv[2] == 'address:list') {

    Controller.addressList()
} else if(argv[2] == 'address:add') {

    Controller.addAddress(argv[3], argv[4], argv[5])
} else if(argv[2] == 'address:update') {

    Controller.updateAddress(argv[3],argv[4],argv[5])
} else if(argv[2] == 'address:delete') {

    Controller.removeAddress(argv[3])
} 