const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const morgan = require('morgan');
const const_uri = "mongodb+srv://admin:"+ process.env.MONGO_ATLAS_PASS +"@cluster0.at4cq.mongodb.net/QuizDatabase?retryWrites=true&w=majority";
const cors = require('cors');
app.use(cors())


// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const user = require("../API/routes/users")
const quiz = require("../API/routes/quiz")
const bodyParser =require('body-parser');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json({extended: false})); 


mongoose.connect(const_uri, { useNewUrlParser: true, useUnifiedTopology: true})
mongoose.set('useFindAndModify', false);

app.use("/api/user", user);
app.use("/api/quiz", quiz);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
