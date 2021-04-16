const fs = require("fs");

fs.rename("mwsore.json", "mw-b-sore.json", (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("Berhasil mengganti nama!");
});