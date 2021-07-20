const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  question: String,
  options: Array,
  answer: Number,
});

module.exports = mongoose.model("Quiz", quizSchema);
