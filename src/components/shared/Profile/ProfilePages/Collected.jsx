import React from "react";
import { Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

const Collected = () => {
  return (
    <div>
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
              <Dropdown.Item href="#/action-2">Recently created</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Recently sold</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Recently received</Dropdown.Item>
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
  );
};

export default Collected;
