const ControllerContact = require('./controller/contact.js').ControllerContact;
const ControllerAddress = require('./controller/address.js').ControllerAddress;
const argv = process.argv;

let command = argv[2].split(':');

if(command[0] === "contacts"){
  switch (command[1]) {
    case "list": ControllerContact.show();break;
    case "add": ControllerContact.add(argv[3],argv[4],argv[5]);break;
    case "update": ControllerContact.update(argv[3],argv[4],argv[5]);break;//id, column,value
    case "delete": ControllerContact.delete(argv[3]);break;
      break;
    default:
  }
}
else if(command[0] === "addresses"){
  switch (command[1]) {
    case "list": ControllerAddress.show();break;
    case "add": ControllerAddress.add(argv[3],argv[4],argv[5]);break;
    case "update": ControllerAddress.update(argv[3],argv[4],argv[5]);break;//id, column,value
    case "delete": ControllerAddress.delete(argv[3]);break;
      break;
    default:
  }
}
