const fs = require("fs");
//buat file mw.text dan mengisi dengan data:
fs.appendFile("mwb.txt", "Kelas Mobile Web B", function (err) {
  if (err) throw err;
  console.log("Berhasil disimpan!");
});