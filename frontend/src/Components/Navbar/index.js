import Cookies from "js-cookie";
import React from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
function Navigationbar() {
  let History = useHistory();
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="customNavbar"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">Quiz Application</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/QuizManage">Quiz Management</Nav.Link>
              <Nav.Link href="/Scores">Scores</Nav.Link>
            </Nav>
            <Nav>
              <Button
                className="btn-primary"
                onClick={() => {
                  Cookies.remove("user");
                  History.push("/login");
                }}
              >
                SignOut
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigationbar;
