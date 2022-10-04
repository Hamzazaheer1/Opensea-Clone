import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Table from "react-bootstrap/Table";

const Activity = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div style={{ marginLeft: "3rem" }}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">
                <Button onClick={handleShow}>
                  <i class="bi bi-layout-sidebar-inset" />
                  &nbsp;Filter Activities
                </Button>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <Button>Clear all</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <div style={{ marginLeft: "3rem" }}>
        <Row className="mt-4" style={{ width: "96vw", marginLeft: "2rem" }}>
          <Table hover>
            <thead>
              <tr>
                <th></th>
                <th>Item</th>
                <th>Price</th>
                <th>Quantitiy</th>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <i class="bi bi-cart-fill"></i>
                  <b>Sale</b>
                </td>
                <td>Image</td>
                <td>2,399eth</td>
                <td>1</td>
                <td>Hamza</td>
                <td>Reebal</td>
                <td>in 2 minutes</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter Activities</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* status */}
          <Dropdown className="d-inline mx-2" autoClose={false}>
            <Dropdown.Toggle id="dropdown-autoclose-false">
              Event Type
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="Sales"
                style={{ marginLeft: "0.5rem" }}
              />
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="Listing"
                style={{ marginLeft: "0.5rem" }}
              />
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="Offers"
                style={{ marginLeft: "0.5rem" }}
              />
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="Collection offers"
                style={{ marginLeft: "0.5rem" }}
              />
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="Transfer"
                style={{ marginLeft: "0.5rem" }}
              />
            </Dropdown.Menu>
          </Dropdown>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Activity;
