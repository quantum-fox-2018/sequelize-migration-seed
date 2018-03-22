const Chalk = require('chalk')
const Table = require('cli-table')

class ViewContact {
    constructor() {
        
    }

    static showContact(dataContact){
        // console.log(dataContact)
        var table = new Table({
            head : ['ID','Name','Email','Phone'],
      
          })
          for(let i=0; i<dataContact.length; i++){
              table.push([Chalk.green(dataContact[i].id),
                      Chalk.blue(dataContact[i].name),
                      Chalk.cyan(dataContact[i].email),
                      Chalk.yellow(dataContact[i].phone)])
            }
      console.log("" + table)
    }
    
    
}

module.exports = ViewContact