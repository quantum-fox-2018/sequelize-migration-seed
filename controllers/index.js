const {Address,Contact} = require('../models')
const View = require('../views')

class Controller{
  constructor(){

  }

  static listData(inputTable){
    if(inputTable==='contacts'){
     Contact.findAll({
       raw:true
     }).then(row=>{
       View.printView(row)
       process.exit()
     }).catch(err=>{
       View.printView(err)
       process.exit()
     })

    }

    else if(inputTable==='addresses'){
      Address.findAll({
        raw:true
      }).then(row=>{
        View.printView(row)
        process.exit()
      }).catch(err=>{
        View.printView(err)
        process.exit()
      })

    }
  }

  static addData(inputTable,inputData){
    if(inputTable==='contacts'){
      Contact.create({
        name : inputData[0],
        email : inputData[1],
        phone : inputData[2]
      }).then(row=>{
        View.printView(`Input data Contacts name: ${row.dataValues.name} email : ${row.dataValues.email} phone: ${row.dataValues.phone} successfully`)
        process.exit()
      }).catch(err=>{
        View.printView(err)
        process.exit()
      })

    }
    else if(inputTable==='addresses'){
      Address.create({
        street : inputData[0],
        city : inputData[1],
        zip_code : inputData[2]
      }).then(row=>{
        View.printView(`Input data Addresses street: ${row.dataValues.street} city : ${row.dataValues.city} zip_code: ${row.dataValues.zip_code} successfully`)
        process.exit()
      }).catch(err=>{
        View.printView(err)
        process.exit()
      })

    }
  }

  static updateData(inputTable,inputData){
    if(inputTable==='contacts'){
      Contact.update({
        [inputData[1]] : inputData[2]
      },{
        where : {
          id : inputData[0]
        }
      }).then(row=>{

        if(row[0]!==0){
          View.printView(`Update data Contacts ${inputData[1]}: ${inputData[2]} with id : ${inputData[0]} successfully`)
          // console.log(row);
          process.exit()
        }
        else{
          View.printView(`id ${inputData[0]} not found`)
          process.exit()
        }

      }).catch(err=>{
        View.printView(err)
        process.exit()
      })

    }
    else if(inputTable==='addresses'){
      Contact.update({
        [inputData[1]] : inputData[2]
      },{
        where : {
          id : inputData[0]
        }
      }).then(row=>{
        View.printView(`Update data Addresses ${inputData[1]}: ${inputData[2]} with id : ${inputData[0]} successfully`)
        process.exit()
      }).catch(err=>{
        View.printView(err)
        process.exit()
      })

    }
  }

  static deleteData(inputTable,inputData){
    if(inputTable==='contacts'){
      Contact.destroy({
        where : {
          id : inputData[0]
        }
      }).then(row=>{
        if(row>0){
          View.printView(`Delete data Contacts with id ${inputData[0]} successfully`)
          process.exit()
        }
        else{
          View.printView(`id ${inputData[0]} not found`)
          process.exit()
        }
      }).catch(err=>{
        View.printView(err)
        process.exit()
      })
    }
    else if(inputTable==='addresses'){
      Address.destroy({
        where : {
          id : inputData[0]
        }
      }).then(row=>{
        if(row>0){
          View.printView(`Delete data Addresses with id ${inputData[0]} successfully`)
          process.exit()
        }
        else{
          View.printView(`id ${inputData[0]} not found`)
          process.exit()
        }
      }).catch(err=>{
        View.printView(err)
        process.exit()
      })
    }
  }
}

module.exports = Controller
