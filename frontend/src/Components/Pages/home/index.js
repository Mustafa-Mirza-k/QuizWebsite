import React, { useState, useEffect } from "react";
import BtnGroup from "../../btnGroup";
import db from "../../db";
import Instructions from "../../instruction";
import Question from "../../Question";
import ScoresShow from "../../scores";

function Home() {
  const [quiz, setQuiz] = useState(null);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    async function fetchQuizes() {
      db.getMCQ()
        .then((quizes) => setQuiz(quizes.data))
        .catch((error) => console.log(error));
    }
    fetchQuizes();
  }, []);

  return (
    <div className="wrapper">
      {quiz && console.log(quiz)}
      <BtnGroup />
      <div className="contain">
        {/* <Instructions onStart={() => console.log("hello")} />  */}
        {!submit && quiz && typeof quiz.length !== "undefined" && (
          <Question setSubmit={setSubmit} MCQs={quiz} />
        )}
        {submit && <ScoresShow MCQs={quiz} />}
      </div>
    </div>
  );
}

export default Home;
