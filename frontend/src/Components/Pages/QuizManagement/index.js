import { Table, Button } from "react-bootstrap";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navigationbar from "../../Navbar";
import QuizModal from "../../Modal";
import db from "../../db";
import Message from "../../Message";

function QuizManage() {
  const [Quiz, setQuiz] = useState({});
  const [modalVisibility, setmodalVisibility] = useState(false);
  const [task, setTask] = useState(null);
  const [id, setId] = useState(null);
  const tasks = ["Update", "Add", "View"];
  const [messageShow, setmessageShow] = useState(false);
  const [message, setmessage] = useState("");
  const [success, setsuccess] = useState(null);

  function toggleMessage() {
    setmessageShow(!messageShow);
  }

  function infoMessage(message, success) {
    setmessage(message);
    toggleMessage();
    setsuccess(success);
  }

  useEffect(() => {
    async function fetchQuizes() {
      await axios({
        method: "get",
        url: process.env.REACT_APP_BASE_URL + "/api/quiz",
      })
        .then((quizes) => setQuiz(quizes))
        .catch((error) => console.log(error));
    }
    fetchQuizes();
  }, []);

  function showModal() {
    return (
      modalVisibility && (
        <QuizModal
          setVisiblity={toggleVisiblity}
          visibility={modalVisibility}
          task={task}
          id={id}
        />
      )
    );
  }
  function arg(tsk, id) {
    setmodalVisibility(true);
    setTask(tsk);
    setId(id);
  }

  function toggleVisiblity() {
    setmodalVisibility(!modalVisibility);
  }

  return (
    <div>
      <Navigationbar />
      <Message
        show={messageShow}
        setShow={toggleMessage}
        message={message}
        success={success}
      />
      {showModal()}
      <div className="sm-table">
        <div className="Tablehead">Quiz Table</div>
        <div className="addbtn">
          <Button
            variant="outline-secondary"
            className="btnTable "
            onClick={() => {
              arg(tasks[1], null);
            }}
          >
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
                    <Button
                      variant="outline-secondary"
                      onClick={() => {
                        arg(tasks[2], quiz._id);
                      }}
                      className="btnTable"
                    >
                      <ion-icon name="eye-outline"></ion-icon>
                    </Button>{" "}
                    <Button
                      variant="outline-secondary"
                      id={quiz._id}
                      className="btnTable"
                      onClick={() => {
                        arg(tasks[0], quiz._id);
                      }}
                    >
                      <ion-icon name="create-outline"></ion-icon>
                    </Button>{" "}
                    <Button
                      variant="outline-secondary"
                      id={quiz._id}
                      className="btnTable"
                      onClick={() => {
                        db.deleteMCQ(quiz._id)
                          .then(() => {
                            infoMessage("MCQ deleted successfully!", true);
                            window.location.reload(false);
                          })
                          .catch((error) => infoMessage(error.message, false));
                      }}
                    >
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
