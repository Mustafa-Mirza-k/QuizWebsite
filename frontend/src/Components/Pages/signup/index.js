import React, { useState } from "react";
import { Button, Form, Row, Col, Image } from "react-bootstrap";




function Signup() {
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
            <Form.Control name="Name" onChange={handleChange} minLength={5} required type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="normalFont">Email address</Form.Label>
            <Form.Control name="Email" onChange={handleChange} required type="email" placeholder="Enter email" />
          </Form.Group>

         
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="normalFont">Password</Form.Label>
            <Form.Control name="Password" onChange={handleChange} minLength={5} required type="password" placeholder="Password" />
          </Form.Group>
          <div className=" d-grid">
          <Button  color="#6774DF" size="lg"  type="submit">
            Sign Up
          </Button>
          </div>
          <div className="text-center mt-4 normalFont">Already have the account  <a href="/login" id="link">Sign In</a></div>
        </Form>
    </Col>
  </Row>
  );
}

export default Signup;
