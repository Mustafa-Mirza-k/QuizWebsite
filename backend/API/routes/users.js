const express = require("express");
const router = express.Router();
const Users = require("../Modals/users");
const mongoose = require("mongoose");

router.get("/", (req, res, next) => {
  Users.find()
    .then((users) => res.send(users))
    .catch((err) => res.status(500));
});

router.patch("/:id", (req, res, next) => {
  const id = req.params.id;

  Users.findOneAndUpdate(
    { _id: id },
    {
      score: req.body.score,
    }
  )
    .then((user) => res.status(200).json({user}))
    .catch((err) => res.status(500));
});

router.post("/auth", (req, res, next) => {
  Users.findOne({ email: req.query.email, password: req.query.password })
    .then((data) => {
      if (data) {
        res.status(201).json(data);
      } else {
        res.status(202).json(data);
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

router.post("/", (req, res, next) => {
  const users = new Users({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    type: "user",
    score: "",
  });

  users
    .save()
    .then((result) =>
      res.status(201).json({
        message: "data entered successfully!",
        createdUser: result,
      })
    )
    .catch((e) => {
      console.log(e);
      res.status(500);
    });
});

module.exports = router;
