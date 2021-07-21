import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
function QuizModal() {
  const [show, setShow] = useState(true);

  function handleClose() {
    setShow(false);
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title className="normalFont">Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Question</Form.Label>
            <Form.Control type="question" placeholder="Enter question" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Options</Form.Label>
            <Row>
              <Col>
                <div className="mt-1 text-center normalFont">A.</div>
              </Col>
              <Col xs={9}>
                <Form.Control type="options" placeholder="Option" required />
              </Col>
              <Col>
                <Button variant="outline-danger h-75 mt-1">
                  <ion-icon name="close-circle-outline"></ion-icon>
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
        <Button variant="outline-danger" className="addOptionBtn">
          <ion-icon name="close-circle-outline"></ion-icon>
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default QuizModal;
