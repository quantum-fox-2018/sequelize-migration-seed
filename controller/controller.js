const View = require('../views/view')
const{Contact, Address} = require('../models')

class Controller {
  static routes(argv) {
    let command = argv[2]
    let option = argv.splice(3)

    switch (command) {
      case 'contacts:list':
      Contact.findAll({
        raw:true
      })
      .then(contacts => {
        View.printTable(contacts)
      })
      .catch(err => {
        View.printLine(err)
      })
      break;

      case 'contacts:add':
      Contact.create({
        name: option[0],
        email: option[1],
        phone: option[2]
      })
      .then(data => {
        // View.printTable(data.dataValues)
        View.printLine(`${data.name} berhasil ditambahkan ke dalam contacts!`)
      })
      .catch(err => {
        View.printLine(err)
      })
      break;

      case 'contacts:update':
      Contact.update({
        [option[1]] : option[2]
      },{
        where: {
          id: option[0]
        }
      })
      .then(info => {
        if(info == 1) {
          View.printLine(`Data berhasil diubah!`)
        } else {
          View.printLine(`Data tidak ditemukan`)
        }
      })
      .catch(err => {
        View.printLine(err)
      })
      break;

      case 'contacts:delete':
      Contact.destroy({
        where: {
          id: option[0]
        }
      })
      .then(info => {
        if(info == 1) {
          View.printLine(`Data berhasil dihapus!`)
        } else {
          View.printLine(`Data tidak ditemukan`)
        }
      })
      .catch(err => {
        View.printLine(err)
      })
      break;

      case 'addresses:list':
      Address.findAll({
        raw:true
      })
      .then(addresses => {
        View.printTable(addresses)
      })
      .catch(err => {
        View.printLine(err)
      })
      break;

      case 'addresses:add':
      Address.create({
        name: option[0],
        email: option[1],
        phone: option[2]
      })
      .then(data => {
        // View.printTable(data.dataValues)
        View.printLine(`${data.name} berhasil ditambahkan ke dalam addresses!`)
      })
      .catch(err => {
        View.printLine(err)
      })
      break;

      case 'addresses:update':
      Address.update({
        [option[1]] : option[2]
      },{
        where: {
          id: option[0]
        }
      })
      .then(info => {
        if(info == 1) {
          View.printLine(`Data berhasil diubah!`)
        } else {
          View.printLine(`Data tidak ditemukan`)
        }
      })
      .catch(err => {
        View.printLine(err)
      })
      break;

      case 'addresses:delete':
      Address.destroy({
        where: {
          id: option[0]
        }
      })
      .then(info => {
        if(info == 1) {
          View.printLine(`Data berhasil dihapus!`)
        } else {
          View.printLine(`Data tidak ditemukan`)
        }
      })
      .catch(err => {
        View.printLine(err)
      })
      break;

      case 'help': View.help() ;break;
      default: View.help() ;break;
    }
  }
}

module.exports = Controller