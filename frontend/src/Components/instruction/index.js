import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { resetCounter } from "../../Redux/mcqCounter";
import { reset } from "../../Redux/scores";

function Instructions({ onStart }) {
  const dispatch = useDispatch();
  return (
    <div className="content">
      <div className="Quizheader text-center">Instructions for Quiz</div>
      <div className="QuizContent">
        <p className="normalFont  mt-3 " style={{ color: "red" }}>
          *Please read the instructions carefully!
        </p>
        <ul className="instructions  mt-3">
          <li>There is no time limit for the quiz.</li>
          <li>Each question carry equal points (1 Point).</li>
          <li>You can move between questions using next and previous button</li>
          <li>The quiz contains Multiple Choice Questions.</li>
          <li>
            To submit the Quiz you need to click submit button on the last
            question.
          </li>
        </ul>
        <div className="centered">
          <Button
            className="quizbtn"
            onClick={() => {
              onStart();
              dispatch(reset());
              dispatch(resetCounter());
            }}
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
