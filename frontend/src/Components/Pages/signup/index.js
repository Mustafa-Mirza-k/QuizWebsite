import React, { useState } from "react";
import { Button, Form, Row, Col, Image } from "react-bootstrap";
import Message from "../../Message";
const axios = require("axios");

function Signup() {
  const [userInfo, setuserInfo] = useState({});
  const [messageShow, setmessageShow] = useState(false);
  const [message, setmessage] = useState("");
  const [success, setsuccess] = useState(null);

  function handleChange(e) {
    setuserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  function toggleMessage() {
    setmessageShow(!messageShow);
  }

  async function isUserExist() {
    var find = 0;
    return await axios({
      method: "get", //you can set what request you want to be
      url: process.env.REACT_APP_BASE_URL + "/api/user",
    }).then((users) => {
      users.data.map((user) => user.email === userInfo.email && (find = 1));
      return find === 1 ? true : false;
    });
  }

  function infoMessage(message, success) {
    setmessage(message);
    toggleMessage();
    setsuccess(success);
  }
  async function createUser() {
    await axios({
      method: "post", //you can set what request you want to be
      url: process.env.REACT_APP_BASE_URL + "/api/user",
      data: userInfo,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        if (response.status === 201) {
          infoMessage("Account created successfully", true);
        } else {
          infoMessage("Something went wrong account cannot be created", false);
        }
      })
      .catch(function (error) {
        infoMessage(error.message, false);
      });
  }

  async function submit(e) {
    e.preventDefault();
    isUserExist().then((res) =>
      !res
        ? createUser()
        : infoMessage("This email is already registered", false)
    );
  }

  return (
    <Row xs={2} className="App">
      <Message
        show={messageShow}
        setShow={toggleMessage}
        message={message}
        success={success}
      />
      <Col className="loginCol col-md-7 ">
        <Image
          src="https://media.istockphoto.com/vectors/online-exam-online-training-courses-online-book-distance-education-vector-id1148585703?k=6&m=1148585703&s=612x612&w=0&h=76QazS79e6uNS_LzWRPUifLhJatYsrZdnCjY71O7ukA="
          fluid
          className="LoginImage"
        />
      </Col>
      <Col className="col-md-5 colForm">
        <Form className="loginForm " onSubmit={submit}>
          <div className="text-center loginHeader">Create your account</div>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="normalFont">Name</Form.Label>
            <Form.Control
              name="name"
              onChange={handleChange}
              minLength={5}
              required
              type="text"
              placeholder="Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="normalFont">Email address</Form.Label>
            <Form.Control
              name="email"
              onChange={handleChange}
              required
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="normalFont">Password</Form.Label>
            <Form.Control
              name="password"
              onChange={handleChange}
              minLength={5}
              required
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <div className=" d-grid">
            <Button color="#6774DF" size="lg" type="submit">
              Sign Up
            </Button>
          </div>
          <div className="text-center mt-4 normalFont">
            Already have the account{" "}
            <a href="/login" id="link">
              Sign In
            </a>
          </div>
        </Form>
      </Col>
    </Row>
  );
}

export default Signup;
