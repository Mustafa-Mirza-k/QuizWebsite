import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import Optionbtn from "../btnOption";
import { decrement, increment } from "../../Redux/mcqCounter";
import { addScore } from "../../Redux/scores";

function Question({ MCQs, setSubmit }) {
  const mcqCount = useSelector((state) => state.mcqCounter.mcqCount);
  const scores = useSelector((state) => state.scoresTrack.scores);
  const dispatch = useDispatch();
  const options = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const [checked, setChecked] = useState("None");

  return (
    <div className="content w-100 ">
      <div>
        <div className="serialNo" style={{ color: "black" }}>
          {mcqCount + 1 + "/" + MCQs.length}
        </div>
      </div>
      <div className="Quizheader mb-2">
        {"Question # " + (mcqCount + 1) + ":"}
      </div>

      <div className="QuizQuestion m-2">{MCQs[mcqCount].question}</div>

      <div className="QuizContent">
        {MCQs[mcqCount].options.map((option, index) => (
          <Optionbtn
            text={options[index] + ". " + option}
            id={options[index]}
            onClick={() => {
              dispatch(addScore({ index: mcqCount, value: index }));
              setChecked(options[index]);
            }}
            checked={scores[mcqCount] !== index}
          />
        ))}

        <div className="centered">
          <Button
            className="quizbtn w-25"
            disabled={mcqCount == 0}
            onClick={() => dispatch(decrement())}
          >
            Previous
          </Button>
          <Button
            className="quizbtn w-25"
            onClick={() =>
              MCQs.length === mcqCount + 1
                ? setSubmit(true)
                : dispatch(increment())
            }
          >
            {MCQs.length === mcqCount + 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Question;
