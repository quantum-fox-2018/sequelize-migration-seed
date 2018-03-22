let argv = process.argv;

const ControllerContact = require('./controller/contact.js')

let table = argv[2];
let action = argv[3];
let value = argv.slice(4)

if(table == 'contact'){
    if(action == 'list'){
        ControllerContact.list()
    } else if(action == 'add'){
        ControllerContact.add(value[0],value[1],value[2])
    } else if(action == 'edit'){
        ControllerContact.update(value[0],value[1],value[2],value[3])
    }
}