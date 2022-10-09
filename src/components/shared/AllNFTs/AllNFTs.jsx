import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Killua from "../../images/killua.jpg";

const AllNFTs = () => {
  const Navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //temporary id for card ==> use card id coming from backend
  let id = 1;

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
                  &nbsp;Filter
                </Button>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Recently Listed"
                >
                  <Dropdown.Item href="#/action-1">
                    Recently Created
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Recently Sold</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Recently Listed
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Recently Received
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">EndingSoon</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Price Low to High
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Price High to Low
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Highest last sale
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Oldest</Dropdown.Item>
                </DropdownButton>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <div style={{ marginLeft: "3rem" }}>
        <Row>
          <Card
            className="allnfts-card cursor-pointer"
            style={{ width: "18rem", marginTop: "2rem", marginRight: "2rem" }}
            onClick={() => {
              Navigate(`/buy-page/${id}`);
            }}
          >
            <Card.Img variant="top" src={Killua} />
            <Card.Body>
              <Card.Title>Killua</Card.Title>
              <Card.Text>Hunter × Hunter</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Price 10eth</ListGroup.Item>
            </ListGroup>
          </Card>
        </Row>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter NFTs</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* status */}
          <Dropdown className="d-inline mx-2" autoClose={false}>
            <Dropdown.Toggle id="dropdown-autoclose-false">
              Status
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="Buy Now"
                style={{ marginLeft: "0.5rem" }}
              />
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="On Auction"
                style={{ marginLeft: "0.5rem" }}
              />
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="New"
                style={{ marginLeft: "0.5rem" }}
              />
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="Has Offers"
                style={{ marginLeft: "0.5rem" }}
              />
            </Dropdown.Menu>
          </Dropdown>
          <br />
          <br />
          {/* price */}
          <Dropdown className="d-inline mx-2" autoClose={false}>
            <Dropdown.Toggle id="dropdown-autoclose-false">
              Price
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                    style={{ display: "flex" }}
                  >
                    <Form.Control
                      type="number"
                      placeholder="Min"
                      style={{ width: "5rem" }}
                    />
                    <h3 style={{ marginLeft: "1rem", marginRight: "1rem" }}>
                      To
                    </h3>
                    <Form.Control
                      type="number"
                      placeholder="Max"
                      style={{ width: "5rem" }}
                    />
                  </Form.Group>
                </Form>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <br />
          <br />
          {/* Quantity */}
          <Dropdown className="d-inline mx-2" autoClose={false}>
            <Dropdown.Toggle id="dropdown-autoclose-false">
              Quantity
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Form.Check
                type="radio"
                label="All item"
                id="default-radio"
                style={{ marginLeft: "0.5rem" }}
              />
              <Form.Check
                type="radio"
                label="Single items"
                id="default-radio"
                style={{ marginLeft: "0.5rem" }}
              />
              <Form.Check
                type="radio"
                label="Bundles"
                id="default-radio"
                style={{ marginLeft: "0.5rem" }}
              />
            </Dropdown.Menu>
          </Dropdown>
          <br />
          <br />
          {/* Category */}
          <Dropdown className="d-inline mx-2" autoClose={false}>
            <Dropdown.Toggle id="dropdown-autoclose-false">
              Category
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="Collectibles"
                style={{ marginLeft: "0.5rem" }}
              />
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="Domain Name"
                style={{ marginLeft: "0.5rem" }}
              />
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="Music"
                style={{ marginLeft: "0.5rem" }}
              />
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="Photography"
                style={{ marginLeft: "0.5rem" }}
              />
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="Sports"
                style={{ marginLeft: "0.5rem" }}
              />
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="Trading Cards"
                style={{ marginLeft: "0.5rem" }}
              />
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="Utility"
                style={{ marginLeft: "0.5rem" }}
              />
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="Virtual Worlds"
                style={{ marginLeft: "0.5rem" }}
              />
            </Dropdown.Menu>
          </Dropdown>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AllNFTs;
