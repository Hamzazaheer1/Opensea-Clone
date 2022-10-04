import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import DefaultCover from "../../images/DefaultCover.jpg";
import DefaultProfile from "../../images/DefaultProfilePic.jpg";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div>
      <div style={{ display: "flex" }}>
        <input
          type={"image"}
          src={DefaultCover}
          alt="defaultCover"
          width="1920px"
          height="300px"
        />
        <input
          style={{ marginLeft: "-117rem", marginTop: "10rem" }}
          type={"image"}
          src={DefaultProfile}
          width="200px"
          height="200px"
        />
      </div>
      <div style={{ marginLeft: "3.3rem" }}>
        <h3 style={{ fontWeight: "bold" }}>Unnamed</h3>
        <p>0x51f8...ccf1 &nbsp;&nbsp;&nbsp;Joined September 2022</p>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setSelectedTab(0);
              }}
            >
              Collected
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setSelectedTab(1);
              }}
            >
              Created
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setSelectedTab(2);
              }}
            >
              Favorited
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setSelectedTab(3);
              }}
            >
              Activity
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="More" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Offers made</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Offers receive</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Active Listing</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Inactive Listing</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Hidden</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <br />
        <Row>
          <Col sm={10}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Search by name" />
            </Form.Group>
          </Col>
          <Col sm={2}>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Recently received
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Recently listed</Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  Recently created
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Recently sold</Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Recently received
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          <div
            style={{
              border: "1px solid grey",
              height: "50vh",
              width: "94vw",
              borderRadius: "1rem",
            }}
          >
            <p>No items to display</p>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Profile;
