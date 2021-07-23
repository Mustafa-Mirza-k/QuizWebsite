import React from "react";
import { Button } from "react-bootstrap";
function instructions({ onStart }) {
  return (
    <div className="content">
      <div className="Quizheader text-center">Instructions for Quiz</div>
      <div className="QuizContent">
        <p className="normalFont  mt-3 " style={{ color: "red" }}>
          *Please read the instructions carefully!
        </p>
        <ul className="instructions  mt-3">
          <li>There is no time limit for the quiz.</li>
          <li>Each question carry equal marks.</li>
          <li>Total number of questions are .</li>
          <li>The quiz contains Multiple Choice Questions.</li>
          <li>You need to attempt each question.</li>
        </ul>
        <div className="centered">
          <Button className="quizbtn" onClick={onStart}>
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
}

export default instructions;
