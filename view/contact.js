class ViewContact {

  static list(contact_data){

    for(let i=0; i<contact_data.length;i++){
      let databaseContact = contact_data[i];
      console.log(`${databaseContact.id}. Name : ${databaseContact.name} Email : ${databaseContact.email} Phone : ${databaseContact.phone}`);
    }
  }

  static add(contact_data){

    console.log(`${contact_data.name} has been added to database`);
  }

  static update(contactId){
    console.log(`Update contact success for id ${contactId}`);
  }

  static delete(contactId){
    console.log(`Delete contact success for id ${contactId}`);
  }
}

module.exports = {ViewContact:ViewContact};
