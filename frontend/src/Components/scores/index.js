import React from "react";
import { useSelector } from "react-redux";
import { CircularProgressbar } from "react-circular-progressbar";

function ScoresShow({ MCQs }) {
  const results = useSelector((state) => state.scoresTrack.scores);
  function calculateScores() {
    var scores = 0;
    MCQs &&
      results.forEach((result, index) => {
        MCQs[index].answer === result && (scores += 1);
      });
    return scores;
  }
  const scores = calculateScores()
  return (
    <div className="content w-100 ">
      <div className="Quizheader text-center mb-2">
          {/* { scores  "Congratulations!" }  */}
      </div>
      <div className="normalFont  text-center mb-4"><h3>You have scored</h3></div>
      <div className=" d-flex justify-content-center">
      <CircularProgressbar 
            className="w-50"
          value={(scores / MCQs.length) * 100}
          text={`${scores} / ${MCQs.length}`}
        />
        </div>
    </div>
  );
}

export default ScoresShow;
