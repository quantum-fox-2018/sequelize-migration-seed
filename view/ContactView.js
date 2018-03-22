class ContactView{
  static displayContact(contact){
    console.log(contact)
    process.exit()
  }

  static addContact(addContact){
    console.log('Data berikut berhasil ditambahkan...')
    console.log(addContact)
    process.exit()
  }

  static updateContact(result){
    console.log('Data berikut berhasil diupdate...')
    console.log(result)
    process.exit()
  }


}

module.exports = ContactView
