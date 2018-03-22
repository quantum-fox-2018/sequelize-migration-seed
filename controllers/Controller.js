const Contacts = require('./Contacts.js')
const Views = require('../views/Views.js');

class Controller {
  constructor(command,content){
    this.command = command
    this.content = content
  }

  execute(){
    let separate = this.command.split(':')
    let table = separate[0]
    let realCommand = separate[1]
    if(table == 'contacts' || table == 'contact'){
      if(realCommand == 'list'){
        Contacts.list(Views.list)
      } else if(realCommand=='add'){
        Contacts.add(this.content,Views.add)
      } else if(realCommand=='update'){
        Contacts.update(this.content,Views.update)
      } else if(realCommand=='delete'){
        Contacts.delete(this.content,Views.delete)
      }
    }
  }
}

module.exports = Controller
