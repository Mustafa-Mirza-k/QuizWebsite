const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  password: String,
  type: String,
  score: String
});

module.exports = mongoose.model("Users", usersSchema);
