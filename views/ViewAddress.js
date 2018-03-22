class ViewAddress {
  static list(data) {
    console.log(data);
    process.exit();
  }

  static add(data) {
    console.log(`Data ${data.street} berhasil ditambahkan`);
    process.exit();
  }

  static delete(data) {
    console.log(`Data ${data.street} berhasil di hapus`);
    process.exit();
  }

  static update(data) {
    console.log(`Data ${data.street} berhasil di update`);
    process.exit();
  }
}

module.exports = ViewAddress;
