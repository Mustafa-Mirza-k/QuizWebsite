import React, { useEffect, useState } from "react";
import { Button, Form, Row, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import db from "../../db";
import { ReactSession } from "react-client-session";
import Message from "../../Message";
import Cookies from "js-cookie";

function Login() {
  const [userInfo, setuserInfo] = useState({});
  const [messageShow, setmessageShow] = useState(false);
  const [message, setmessage] = useState("");
  const [success, setsuccess] = useState(null);
  let History = useHistory();

  function handleChange(e) {
    setuserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    Cookies.get("user") !== undefined &&
      (JSON.parse(Cookies.get("user")).type == "user"
        ? History.push("/")
        : History.push("/scores"));
  }, []);
  
  async function isUserExist() {
    db.userAuth(userInfo)
      .then((res) => {
        if (res.status === 201) {
          Cookies.set("user", res.data);
          res.data.type === "user"
            ? History.push("/")
            : History.push("/scores");
        } else {
          infoMessage("Invalid email or password", false);
        }
        console.log(res);
      })
      .catch((error) => infoMessage(error.message, false));
  }

  function toggleMessage() {
    setmessageShow(!messageShow);
  }

  function infoMessage(message, success) {
    setmessage(message);
    toggleMessage();
    setsuccess(success);
  }

  function submit(e) {
    e.preventDefault();
    isUserExist();
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
          src="https://static.vecteezy.com/system/resources/previews/001/993/295/original/online-test-and-exam-with-people-filling-answer-vector.jpg"
          fluid
          className="LoginImage"
        />
      </Col>
      <Col className="col-md-5 colForm">
        <Form className="loginForm " onSubmit={submit}>
          <div className="text-center loginHeader">Login to continue</div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="normalFont">Email address</Form.Label>
            <Form.Control
              required
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="normalFont">Password</Form.Label>
            <Form.Control
              required
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <div className=" d-grid">
            <Button color="#6774DF" size="lg" type="submit">
              Sign In
            </Button>
          </div>
          <div className="text-center mt-4 normalFont">
            Don't have the account{" "}
            <a href="/signup" id="link">
              Sign Up
            </a>
          </div>
        </Form>
      </Col>
    </Row>
  );
}

export default Login;
