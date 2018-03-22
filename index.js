const Controller = require('./controllers')
const argv = process.argv
var firstCommand=argv[2].split(':')
function command(inputTable,action,inputData){
  if(action==='list'){
    Controller.listData(inputTable)
  }
  else if(action==='add'){
    Controller.addData(inputTable,inputData)
  }
  else if(action==='update'){
    Controller.updateData(inputTable,inputData)
  }
  else if(action==='delete'){
    Controller.deleteData(inputTable,inputData)
  }
}

command(firstCommand[0],firstCommand[1],argv.slice(3))
