import { Table, Button } from "react-bootstrap";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navigationbar from "../../Navbar";
import QuizModal from "../../Modal";

function QuizManage() {
  const [Quiz, setQuiz] = useState({});
  

  useEffect(() => {
    async function fetchQuizes() {
      await axios({
        method: "get", //you can set what request you want to be
        url: process.env.REACT_APP_BASE_URL + "/api/quiz",
      })
        .then((quizes) => setQuiz(quizes))
        .catch((error) => console.log(error));
    }
    fetchQuizes();
  }, []);


  return (
    <div>
      <Navigationbar />
      <QuizModal />
      <div className="sm-table">
        <div className="Tablehead">Quiz Table</div>
        <div className="addbtn">
          <Button variant="outline-secondary" className="btnTable " >
            <ion-icon name="add-circle-outline"></ion-icon>
          </Button>
        </div>
        <Table className="responsive " bordered>
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Questions</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="normalFont text-center">
            {Quiz.data &&
              Quiz.data.map((quiz) => (
                <tr>
                  <td className="w-25">{quiz._id}</td>
                  <td>{quiz.question}</td>
                  <td className="w-25">
                    <Button variant="outline-secondary" className="btnTable">
                      <ion-icon name="eye-outline"></ion-icon>
                    </Button>{" "}
                    <Button variant="outline-secondary" className="btnTable">
                      <ion-icon name="create-outline"></ion-icon>
                    </Button>{" "}
                    <Button variant="outline-secondary" className="btnTable">
                      <ion-icon name="close-circle-outline"></ion-icon>
                    </Button>{" "}
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default QuizManage;
