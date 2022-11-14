const mongoose = require("mongoose");
const URI = "mongodb://mongodb4/tp-final";

mongoose
  .connect(URI)
  .then((db) => console.log("BD conectada"))
  .catch((err) => console.error(err));

module.exports = mongoose;
