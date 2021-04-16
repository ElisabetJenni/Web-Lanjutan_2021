const http = require("http");

//buat object server dengan listen port 3400
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "app/json" });
    res.write("M01-HttpModule");
    //Respon diakhiri
    res.end();
  })
  .listen(3400);