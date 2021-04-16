const fs = require("fs");

try {
  fs.renameSync("mw-b-sore.json", "mw-sore.json");
  console.log("Berhasil mengganti nama!");
} catch (err) {
  console.error(err);
}