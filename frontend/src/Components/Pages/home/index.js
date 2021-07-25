import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import db from "../../db";
import Instructions from "../../instruction";
import Question from "../../Question";
import ScoresShow from "../../scores";

function Home() {
  const [quiz, setQuiz] = useState(null);
  const [submit, setSubmit] = useState(false);
  const [start, setStart] = useState(false);
  let History = useHistory();
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
      <div
        className=" d-flex justify-content-end align-self-center "
        style={{ width: "95%" }}
      >
        <div>
          <Button
            className="quizbtn"
            onClick={() => {
              Cookies.remove("user");
              window.location.reload(false);
            }}
          >
            SignOut
          </Button>
        </div>
      </div>
  

      <div className="contain">
        {quiz && typeof quiz.length !== "undefined" && !start ? (
          <Instructions total={quiz.length} onStart={() => setStart(true)} />
        ) : (
          start && !submit && <Question setSubmit={setSubmit} MCQs={quiz} />
        )}
        {submit && <ScoresShow MCQs={quiz} />}
      </div>
    </div>
  );
}

export default Home;
