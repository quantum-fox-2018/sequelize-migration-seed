class ViewContact {
  static list(data) {
    console.log(data);
    process.exit();
  }

  static add(data) {
    console.log(`Data ${data.name} berhasil ditambahkan`);
    process.exit();
  }

  static delete(data) {
    console.log(`Data ${data.name} berhasil di hapus`);
    process.exit();
  }

  static update(data) {
    console.log(`Data ${data.name} berhasil di update`);
    process.exit();
  }
}

module.exports = ViewContact;
