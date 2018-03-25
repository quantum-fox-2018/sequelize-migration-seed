const Controller = require('./controller.js');

class View {
  constructor() {

  }

  static getAllDataContact(data) {
    console.log(data);
    process.exit()
  }

  static saveDataContact(object) {
    console.log(`data ${JSON.stringify(object)} berhasil dimasukkan`);
    process.exit();
  }

  static updateContact(array) {
    //console.log(`>>>>>${array}`);
    console.log(`Id ${array} updated`);
    process.exit()
  }

  static deleteContact(result) {
    console.log(`item deleted`);
    process.exit()
  }
}

module.exports = View;
