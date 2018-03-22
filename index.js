/*jshint esversion:6*/
const argv = process.argv;

const contact = require('./controllers/contact.js');
const address = require('./controllers/address.js');

let type = argv[2].split(':')[0];
let command = argv[2].split(':')[1];
let options = argv.splice(3);
if (type == 'contacts') {
  switch (command) {
    case 'list':
      contact.list(options[0]);
      break;
    case 'add':
      contact.add(options[0], options[1], options[2]);
      break;
    case 'update':
      contact.update(options[0], options[1], options[2]);
      break;
    case 'delete':
      contact.delete(options[0]);
      break;
  }
} else if (type == 'addresses') {
  switch (command) {
    case 'list':
      address.list(options[0]);
      break;
    case 'add':
      address.add(options[0], options[1], options[2]);
      break;
    case 'update':
      address.update(options[0], options[1], options[2]);
      break;
    case 'delete':
      address.delete(options[0]);
      break;
  }
}
