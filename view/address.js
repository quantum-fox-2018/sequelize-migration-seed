class ViewAddress {

  static list(address_data){

    for(let i=0; i<address_data.length;i++){
      let databaseAddress = address_data[i];
      console.log(`${databaseAddress.id}. Street : ${databaseAddress.street} City : ${databaseAddress.city} Zip_Code : ${databaseAddress.zip_code}`);
    }
  }

  static add(address_data){

    console.log(`${address_data.street} has been added to database`);
  }

  static update(addressId){
    console.log(`Update address success for id ${addressId}`);
  }

  static delete(addressId){
    console.log(`Delete address success for id ${addressId}`);
  }
}

module.exports = {ViewAddress:ViewAddress};
