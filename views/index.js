class View {

    static help() {
        console.log('--------------------------------------Contacts-----------------------------------------');
        console.log('$ node index.js contacts:list                       # show all list in database contacts');
        console.log('$ node index.js contacts:add name email phone       # add one list to database contacts');
        console.log('$ node index.js contacts:update id column value     # update one list on database contacts');
        console.log('$ node index.js contacts:delete id                  # delete one list in database contacts');
        console.log('--------------------------------------Addresses----------------------------------------');
        console.log('$ node index.js addresses:list                      # show all list in database addresses');
        console.log('$ node index.js addresses:add street city zip_code  # add one list to database addresses');
        console.log('$ node index.js addresses:update id column value    # update one list on database addresses');
        console.log('$ node index.js addresses:delete id                 # delete one list in database addresses');
    }

    static contactslist(arrObjData) {
        console.log(arrObjData)
    }

    static contactsadd(id){
        console.log(`Table Contacts id ${id} sudah diupdate !`)
    }
    
    static deleteadd(id){
        console.log(`Table Contacts id ${id} sudah didelete !`)
    }

}


module.exports = View;