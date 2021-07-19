import React from "react";
import { Button, Form, Row, Col, Image } from "react-bootstrap";

function login() {
  return (
    <Row xs={2}  className="App">
      <Col className="loginImg col-md-7">
        <Image
          src="https://i2-prod.hulldailymail.co.uk/incoming/article4092289.ece/ALTERNATES/s1200c/0_gettyimages-1175177780-170667a.jpg"
          fluid
        />
      </Col>
      <Col className="col-md-5 colForm">
          <Form className="loginForm ">
            <div className="text-center loginHeader">Login to continue</div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="normalFont">Email address</Form.Label>
              <Form.Control required type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="normalFont">Password</Form.Label>
              <Form.Control required type="password" placeholder="Password" />
            </Form.Group>
            <div className=" d-grid">
            <Button  color="#6774DF" size="lg"  type="submit">
              Submit
            </Button>
            </div>
            <div className="text-center mt-4 normalFont">Don't have the account  <a href="/signup" id="link">Sign Up</a></div>
          </Form>
      </Col>
    </Row>
  );
}

export default login;
