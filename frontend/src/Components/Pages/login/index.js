import React, { useState } from "react";
import { Button, Form, Row, Col, Image } from "react-bootstrap";

function Login() {
  const [userInfo,setuserInfo] = useState({})

 function handleChange(e){
    setuserInfo({...userInfo, [e.target.name] : e.target.value})
    console.log(userInfo)
  }

  function submit(e){
    e.preventDefault()
    console.log("submit")
  }

  return (
    <Row xs={2}  className="App">
      <Col className="loginCol col-md-7 ">
        <Image
          src="https://static.vecteezy.com/system/resources/previews/001/993/295/original/online-test-and-exam-with-people-filling-answer-vector.jpg"
          fluid
          className="LoginImage"
        />
      </Col>
      <Col className="col-md-5 colForm">
          <Form className="loginForm "  onSubmit={submit}>
            <div className="text-center loginHeader">Login to continue</div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="normalFont">Email address</Form.Label>
              <Form.Control required onChange={handleChange} name="Email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="normalFont">Password</Form.Label>
              <Form.Control required onChange={handleChange} name="Password" type="password" placeholder="Password" />
            </Form.Group>
            <div className=" d-grid">
            <Button  color="#6774DF" size="lg"   type="submit">
              Sign Up
            </Button>
            </div>
            <div className="text-center mt-4 normalFont">Don't have the account  <a href="/signup" id="link">Sign Up</a></div>
          </Form>
      </Col>
    </Row>
  );
}

export default Login;
