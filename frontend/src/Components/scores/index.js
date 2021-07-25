import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { CircularProgressbar } from "react-circular-progressbar";
import Cookies from "js-cookie";
import db from "../db";

function ScoresShow({ MCQs }) {
  const results = useSelector((state) => state.scoresTrack.scores);
  let user = JSON.parse(Cookies.get("user"));

  useEffect(() => {
    const score = calculateScores();
    console.log(score);
    db.setScores(user._id, score)
      .then((res) => {
        console.log(res.status);
      })
      .catch((e) => console.log(e.message));
  }, []);

  function calculateScores() {
    var scores = 0;
    MCQs &&
      results.forEach((result, index) => {
        MCQs[index].answer === result && (scores += 1);
      });
    return scores;
  }
  const scores = calculateScores();
  const total = MCQs.length;
  return (
    <div className="content w-100 ">
      <div className="Quizheader text-center mb-2">
        {(scores / total) * 100 > 90
          ? "Congratulations!"
          : (scores / total) * 100 > 70
          ? "Good!"
          : (scores / total) * 100 > 50
          ? "Fair!"
          : (scores / total) * 100 >= 50
          ? "You can do better!"
          : "Poor!"}
      </div>
      <div className="normalFont  text-center mb-4">
        <h3>{user.name}, You have scored</h3>
      </div>
      <div className=" d-flex justify-content-center">
        <CircularProgressbar
          className="w-50"
          value={(scores / total) * 100}
          text={`${scores} / ${total}`}
        />
      </div>
    </div>
  );
}

export default ScoresShow;
