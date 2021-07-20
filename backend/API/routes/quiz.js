const express = require("express");
const router = express.Router();
const Quiz = require("../Modals/quiz");
const mongoose = require("mongoose");

router.get("/", (req, res, next) => {
  Quiz.find()
    .then((quiz) => res.send(quiz))
    .catch((err) => res.status(500));
});

router.post("/", (req, res, next) => {
  const quiz = new Quiz({
    _id: new mongoose.Types.ObjectId(),
    question: req.body.question,
    options: req.body.options,
    answer: req.body.answer,
  });

  quiz
    .save()
    .then((result) =>
      res.status(201).json({
        message: "MCQ entered successfully!",
        createdMCQ: result,
      })
    )
    .catch((e) => {
      console.log(e);
      res.status(500);
    });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Quiz.findById(id)
    .then((quiz) => {
      if (quiz) {
        res.status(201).json({
          quiz: quiz,
        });
      } else {
        res.status(404).json({ message: "No value found!" });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json({ message: "No value found!" });
    });
});

router.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  Quiz.findByIdAndUpdate(
    { _id: id },
    {
      question: req.body.question,
      options: req.body.options,
      answer: req.body.answer,
    }
  )
    .then((result) =>
      result
        ? res.status(200).json({ message: "Updated!" })
        : res.status(404).json({ message: "Not Found!" })
    )
    .catch((error) => res.status(404).json({ message: "Not Found!" }));
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  Quiz.findByIdAndDelete(id)
    .then((result) =>
      result
        ? res.status(200).json(result)
        : res.status(404).json({ message: "not found!" })
    )
    .catch((err) => res.status(404).json({ message: "not found!" }));
});

module.exports = router;
