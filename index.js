const ControllerContact = require('./controllers/ControllerContact.js');
const ViewContact = require('./views/ViewContact.js');
const ControllerAddress = require('./controllers/ControllerAddress.js');
const ViewAddress = require('./views/ViewAddress.js');

let input = process.argv;

let menu = input[2];

if(menu == "contacts:list") {
  ControllerContact.list(ViewContact.list);
} else if(menu == "contacts:add") {
  let name = input[3];
  let email = input[4];
  let phone = input[5];
  ControllerContact.add({
    name: name,
    email: email,
    phone: phone
  }, ViewContact.add);
} else if(menu == "contacts:update") {
  let id = input[3];
  let column = input[4];
  let value = input[5];
  ControllerContact.update(id, column, value, ViewContact.update);
} else if(menu == "contacts:delete") {
  let id = input[3];
  ControllerContact.delete(id, ViewContact.delete)
} else if(menu == "addresses:list") {
  ControllerAddress.list(ViewAddress.list);
} else if(menu == "addresses:add") {
  let street = input[3];
  let city = input[4];
  let zip_code = input[5];
  ControllerAddress.add({
    street: street,
    city: city,
    zip_code: zip_code
  }, ViewAddress.add);
} else if(menu == "addresses:update") {
  let id = input[3];
  let column = input[4];
  let value = input[5];
  ControllerAddress.update(id, column, value, ViewAddress.update);
} else if(menu == "addresses:delete") {
  let id = input[3];
  ControllerAddress.delete(id, ViewAddress.delete)
}
