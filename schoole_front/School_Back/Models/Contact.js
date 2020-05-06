const mongoose = require("mongoose");

const Contact = mongoose.Schema({
  email: { type: String, require: true },
  messages: { type: String, require: true, max: 300, min: 10 },
});
module.exports = mongoose.model("Contact", Contact);
