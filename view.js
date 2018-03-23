const Controller = require('./controller.js');

class View {
  constructor() {

  }

  static getAllDataContact(data) {
    console.log(data);
    process.exit()
  }

  static saveDataContact(object) {
    console.log(`data ${object} berhasil dimasukkan`);
    process.exit();
  }

  static updateContact(array) {
    console.log(`Id ${string[0]} updated`);
    process.exit()
  }

  static deleteContact(string) {
    console.log(`${string} item deleted`);
    process.exit()
  }
}

module.exports = View;
