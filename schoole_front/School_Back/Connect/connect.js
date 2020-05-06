const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const db = mongoose.connect(
  "mongodb+srv://hanif:hanif123@champsworld-kz086.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connection to mongoosdb");
  },
);
module.exports = db;
