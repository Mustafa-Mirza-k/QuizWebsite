import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Row, Col, Dropdown } from "react-bootstrap";
import db from "../db/index";
import Message from "../Message";

function QuizModal({ visibility, setVisiblity, id, task }) {
  const [optionNum, setOptionNum] = useState(2);
  const [quiz, setquiz] = useState(null);
  const alpha = ["A.", "B.", "C.", "D.", "E.", "F.", "G.", "H."];
  const [messageShow, setmessageShow] = useState(false);
  const [message, setmessage] = useState("");
  const [success, setsuccess] = useState(null);
  const [answer, setAnswer] = useState("Select the answer!");
  function toggleMessage() {
    setmessageShow(!messageShow);
  }

  function infoMessage(message, success) {
    setmessage(message);
    toggleMessage();
    setsuccess(success);
  }

  useEffect(() => {
    if (task !== "Add") {
      db.getMCQbyid(id)
        .then((mcqs) => {
          const mcq = mcqs.data.quiz;
          setquiz(mcq);
          setOptionNum(mcq.options.length);
        })
        .catch((error) => infoMessage(error.message, false));
    }
  }, []);

  function submit(e) {
    e.preventDefault();
    quiz.answer
      ? task === "Add"
        ? db
            .addMCQ(quiz)
            .then((data) => {
              data.status !== 404 && data.status !== 500
                ? infoMessage("Successfully added MCQ", true)
                : infoMessage("Something went wrong", false);
              window.location.reload(false);
            })
            .catch((e) => console.log(e))
        : db
            .updateMCQ(id, quiz)
            .then((data) => {
              data.status !== 404 && data.status !== 500
                ? infoMessage("Successfully updated the MCQ", true)
                : infoMessage("Something went wrong", false);
              window.location.reload(false);
            })
            .catch((e) => console.log(e))
      : infoMessage("Please select the answer!", false);
  }

  function handleChange(e) {
    setquiz({ ...quiz, [e.target.name]: e.target.value });
  }

  function handleOptions(e) {
    let options = quiz && quiz.hasOwnProperty("options") ? quiz.options : [];
    options[e.target.name] = e.target.value;
    setquiz({ ...quiz, [e.target.placeholder]: [...options] });
  }
  function handleSelect(e) {
    setquiz({ ...quiz, answer: e });
  }

  function handleRemove() {
    let options = quiz.options;
    options.pop();
    setquiz({ ...quiz, options: [...options] });
  }

  return (
    <Modal show={visibility}>
      <Message
        show={messageShow}
        setShow={toggleMessage}
        message={message}
        success={success}
      />
      {/* Header */}
      <Modal.Header>
        <Modal.Title className="normalFont"> {task} M.C.Q</Modal.Title>
      </Modal.Header>
      {/* Body */}

      <Form onSubmit={submit}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Question</Form.Label>
            <Form.Control
              required
              value={quiz && quiz.question}
              name="question"
              type="question"
              placeholder="Enter question"
              onChange={handleChange}
              disabled={task === "View"}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* Option */}
            <Form.Label>Options</Form.Label>
            {alpha.map(
              (options, index) =>
                index < optionNum && (
                  <Row className="mt-2">
                    <Col>
                      <div className="mt-1 text-center normalFont">
                        {options}
                      </div>
                    </Col>
                    <Col xs={10}>
                      <Form.Control
                        value={quiz && quiz.options && quiz.options[index]}
                        placeholder="options"
                        name={index}
                        required
                        onChange={handleOptions}
                        disabled={task === "View"}
                      />
                    </Col>
                  </Row>
                )
            )}
          </Form.Group>
          {/* Add and Remove btn */}
          {task !== "View" && (
            <div className="d-flex ">
              <Button
                disabled={optionNum > alpha.length - 1}
                variant="outline-success "
                onClick={() => setOptionNum(optionNum + 1)}
                block
                className="addOptionBtn "
              >
                <ion-icon name="add-circle-outline"></ion-icon>
              </Button>
              <Button
                disabled={optionNum < 3}
                variant="outline-danger "
                onClick={() => {
                  setOptionNum(optionNum - 1);
                  quiz && quiz.options.length === optionNum && handleRemove();
                }}
                className="addOptionBtn "
              >
                <ion-icon name="close-circle-outline"></ion-icon>
              </Button>
            </div>
          )}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Answer</Form.Label>
            <Dropdown  onSelect={handleSelect}>
              <Dropdown.Toggle
                disabled={task === "View"}
                variant="success"
                id="dropdown-basic"
              >
                {quiz ? alpha[quiz.answer] : answer}
              </Dropdown.Toggle>
              <Dropdown.Menu name="answer">
                {alpha.map(
                  (options, index) =>
                    index < optionNum && (
                      <Dropdown.Item eventKey={index} className="text-center">
                        {options}
                      </Dropdown.Item>
                    )
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
        </Modal.Body>
        {/* Footer */}
        <Modal.Footer>
          <Button variant="secondary" onClick={setVisiblity}>
            Close
          </Button>
          {task !== "View" && (
            <Button variant="primary" type="submit">
              {task}
            </Button>
          )}
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default QuizModal;
