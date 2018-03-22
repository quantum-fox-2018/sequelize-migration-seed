class Views {
  static list(input){
    console.log(input)
  }

  static add(input){
    console.log(`Data ${input} has saved~`)
  }

  static update(id,column){
    console.log(`Data at ID: ${id} for column ${column} has updated~`)
  }

  static delete(id){
    console.log(`Data at ID: ${id} has deleted`)
  }
}

module.exports = Views
