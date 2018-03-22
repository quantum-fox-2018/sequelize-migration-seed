const Models = require('../models/index')
const Views = require('../views/contact')

class ControllerContact {
    static list(){
        Models.Contact.findAll({raw:true})
        .then(dataContact => {
            Views.list(dataContact)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    static add(name,email,phone){
        Models.Contact.create({
            name: name,
            email: email,
            phone: phone,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        .then(row =>{
            Views.notifAdd(`Data ${row.dataValues.id}, ${row.dataValues.name} berhasil ditambahkan !`)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    static update(id,column,value){
        Models.Contact.update({
            [column]: value,
            updatedAt: new Date()
        },{
            where: { id: id }
        })
        .then(row =>{
            Views.notifUpdate(`Data ${id}, berhasil di update !`)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    static destroy(){
        
    }
}

module.exports = ControllerContact;