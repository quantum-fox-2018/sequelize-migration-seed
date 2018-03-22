const Chalk = require('chalk')
const Table = require('cli-table')

class ViewAddress {
    constructor() {
        
    }

    static showAddress(dataAddress){
        // console.log(dataAddress)
        var table = new Table({
            head : ['ID','Street','City','Address'],
      
          })
          for(let i=0; i<dataAddress.length; i++){
              table.push([Chalk.green(dataAddress[i].id),
                      Chalk.blue(dataAddress[i].street),
                      Chalk.cyan(dataAddress[i].city),
                      Chalk.yellow(dataAddress[i].zip_code)])
            }
      console.log("" + table)
    }
    
    
}

module.exports = ViewAddress