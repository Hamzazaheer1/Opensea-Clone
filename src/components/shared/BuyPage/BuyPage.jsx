import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Asuki from "../../images/Asuki.avif";
import NyanCat from "../../images/NyanCat.gif";
import "./BuyPage.css";

const BuyPage = () => {
  let { id } = useParams();
  return (
    <Container className="mt-5">
      <Row>
        {/* Image */}
        <Col sm={5}>
          <Card>
            <Card.Header>eth Logo</Card.Header>
            <img src={Asuki} alt="asuki" width="524px" height="500px" />
          </Card>
          <Card style={{ width: "33rem" }} className="mt-4">
            <ListGroup variant="flush">
              <ListGroup.Item style={{ height: "4rem" }}>
                <b> Description</b>
              </ListGroup.Item>
              <ListGroup.Item style={{ height: "5rem" }}>
                <b>By 78D962</b>
              </ListGroup.Item>
              <ListGroup.Item style={{ height: "4rem" }}>
                <b> Properties</b>
              </ListGroup.Item>
              <ListGroup.Item style={{ height: "4rem" }}>
                <div class="dropdown">
                  <p
                    class="btn transparent dropdown-toggle text-start about-left"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <b>About WeAsuki</b>
                  </p>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        <img
                          src={NyanCat}
                          alt="nyancat"
                          width={"80px"}
                          height={"80px"}
                        />
                        WeAsuki is artistic pieces that expresses an idea,
                      </a>
                    </li>
                  </ul>
                </div>
              </ListGroup.Item>
              <ListGroup.Item style={{ height: "4rem" }}>
                <div class="dropdown">
                  <p
                    class="btn transparent dropdown-toggle text-start about-left"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <b>Details</b>
                  </p>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        <Row style={{ width: "30.4rem" }}>
                          <Col sm={2}>
                            <ul>Contract Address</ul>
                            <ul>Token ID</ul>
                            <ul>Token Standard</ul>
                            <ul>Blockchain</ul>
                            <ul>Metadata</ul>
                            <ul>Creator Earnings</ul>
                          </Col>
                          <Col sm={6}></Col>
                          <Col sm={2}>
                            <ul>0x495f...7b5e</ul>
                            <ul>546616271946</ul>
                            <ul>ERC-1155</ul>
                            <ul>Ethereum</ul>
                            <ul>Centralized</ul>
                            <ul>3%</ul>
                          </Col>
                        </Row>
                      </a>
                    </li>
                  </ul>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        {/* Right Side of Image */}
        <Col sm={7}>
          <Row>
            <Col sm={4}>
              <a href="url">WeAsuki</a>
              <br />
              <br />
              <b style={{ fontSize: "2rem" }}>Asuki#{id}</b>
              <br />
              <br />
              <p>Owned by 78D962&nbsp;&nbsp;&nbsp; 3 views</p>
              <br />
            </Col>
            <Col sm={4}></Col>
            <Col sm={4}></Col>
          </Row>
          <Row>
            <Card style={{ width: "60rem" }}>
              <ListGroup variant="flush">
                <ListGroup.Item style={{ height: "8rem" }}>
                  Sale ends September 30, 2022 at 6:37pm GMT+5
                  <br />
                  <p style={{ fontSize: "1.5rem" }}>
                    22&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;58
                    <br />
                    Hours&nbsp;&nbsp;&nbsp;Minutes&nbsp;&nbsp;&nbsp;Seconds
                  </p>
                </ListGroup.Item>
                <ListGroup.Item style={{ height: "11rem" }}>
                  Current price <br />
                  <b style={{ fontSize: "2rem" }}>0.015 $19.91</b>
                  <br />
                  <br />
                  <Row>
                    <Col sm={12}>
                      <Button className="add-to-cart" variant="primary">
                        Add to cart
                      </Button>
                      <Button
                        className="make-offer"
                        variant="transparent"
                        style={{
                          border: "1px solid lightgrey",
                          fontWeight: "bold",
                          color: "blue",
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Make offer
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Row>
          <Row className="mt-4">
            <Card body>
              <div class="btn-group dropdown">
                <button
                  type="button"
                  class="btn transparent dropdown-toggle text-start btn-right"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>Price History</b>
                </button>
                <ul class="dropdown-menu"></ul>
              </div>
            </Card>
            <Card body className="mt-3">
              <div class="btn-group dropdown">
                <button
                  type="button"
                  class="btn transparent dropdown-toggle text-start btn-right"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>Listing</b>
                </button>
                <ul class="dropdown-menu"></ul>
              </div>
            </Card>
            <Card body className="mt-3">
              <div class="btn-group dropdown">
                <button
                  type="button"
                  class="btn transparent dropdown-toggle text-start btn-right"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>Offers</b>
                </button>
                <ul class="dropdown-menu"></ul>
              </div>
            </Card>
          </Row>
        </Col>
      </Row>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Make an offer
              </h5>
            </div>
            <div className="modal-body">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Eth</InputGroup.Text>
                <Form.Control
                  placeholder="Amount"
                  type="number"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <div class="modal-footer">
              <button type="button" className="btn btn-primary">
                Make offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BuyPage;
