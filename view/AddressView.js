class AddressView{
  static displayAddress(DataAddress){
    console.log(DataAddress)
    process.exit()
  }

  static addAddress(addAddress){
    console.log('Data alamat berikut berhasil ditambahkan...')
    console.log(addAddress)
    process.exit()
  }

  static updateAddress(result){
    console.log('Data berikut berhasil diupdate...')
    console.log(result)
    process.exit()
  }


}

module.exports = AddressView
