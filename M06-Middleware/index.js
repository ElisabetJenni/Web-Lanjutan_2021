var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var logger = require("morgan");

app.use(logger("dev"));

//localhost:3400/api/9090/Elisabet
const myMiddleware = (req, res, next) => {
  if (req.params.pass === "9090") {
    console.log("Password Benar");
    next();
  } else {
    const err = {
      status: "error",
      data: "pass" + req.params.pass + "salah",
    };
    next(err);
  }
};

app.get("/api/:pass/:username", myMiddleware, function (req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.send(req.params);
});


app.use((error, req, res, next) => {
  res.send(error);
});

app.listen(3400, function () {
  console.log("Server run");
});