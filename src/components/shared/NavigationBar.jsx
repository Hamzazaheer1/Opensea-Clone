import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../images/logo.png";
import BackgroundImg from "./BackgroundImg/BackgroundImg";
import "./NavigationBar.css";

const NavigationBar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <Navbar
        bg="*"
        variant="none"
        expand="lg"
        fixed="top"
        className={navbar ? "nav-effect active" : "nav-effect"}
        style={{ paddingLeft: "3rem" }}
      >
        <Container fluid>
          <Navbar.Brand>
            <img className="img-fluid" src={Logo} width="38px" alt="logo" />
          </Navbar.Brand>
          <span
            style={{ fontWeight: "bold", fontSize: "1.4rem" }}
            className={navbar ? "txt-color active" : "txt-color"}
          >
            OpenSea
          </span>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Form
                className="d-flex"
                style={{
                  marginLeft: "3rem",
                  marginRight: "1rem",
                }}
              >
                <Form.Control
                  className="bg-light"
                  type="text"
                  placeholder="Normal text"
                  style={{
                    width: "67rem",
                    height: "2.5rem",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                />
              </Form>
              <div class="dropdown">
                <p
                  className={
                    navbar ? "dropbtn txt-color active" : "dropbtn txt-color"
                  }
                >
                  Explore
                </p>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              <div class="dropdown">
                <p
                  className={
                    navbar ? "dropbtn txt-color active" : "dropbtn txt-color"
                  }
                >
                  Stats
                </p>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              <div class="dropdown">
                <p
                  className={
                    navbar ? "dropbtn txt-color active" : "dropbtn txt-color"
                  }
                >
                  Resources
                </p>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              <p
                style={{ marginLeft: "2rem" }}
                className={
                  navbar ? "dropbtn txt-color active" : "dropbtn txt-color"
                }
              >
                Create
              </p>
              <p
                style={{ marginLeft: "2rem" }}
                className={
                  navbar ? "dropbtn txt-color active" : "dropbtn txt-color"
                }
              >
                Icon1
              </p>
              <p
                style={{ marginLeft: "2rem" }}
                className={
                  navbar ? "dropbtn txt-color active" : "dropbtn txt-color"
                }
              >
                Icon2
              </p>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BackgroundImg />
    </>
  );
};

export default NavigationBar;
