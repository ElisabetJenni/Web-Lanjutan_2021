var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var logger = require("morgan");
app.use(logger("dev"));

//localhost:3400/181110018/Elisabet
app.get("/api/:nim/:nama", function (req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.send(req.params);
});
//localhost:3400/search?nama=Elisabet&nim=181110018
app.get("/api/cari", function (req, res, next) {
  var nama = req.query.nama;
  console.log(`nama : ${nama}`);
  var umur = req.query.umur;
  console.log(`umur : ${umur}`);
  res.send(nama + umur);
});
//localhost:3400/persegi/1/2
app.get('/tambah/:angka1/:angka2', function (req, res) {
  var angka1 = parseInt(req.params.angka1)
  var angka2 = parseInt(req.params.angka2)
  var hasil = (angka1 * angka2).toString()
  res.send(hasil)
})

app.listen(3400, function () {
  console.log("Server run");
});