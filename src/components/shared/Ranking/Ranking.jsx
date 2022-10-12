import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const Ranking = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="mt-5" style={{ marginLeft: "1rem" }}>
      <p className="mt-5 mb-5" style={{ fontSize: "3rem", fontWeight: "bold" }}>
        Collection stats
      </p>
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setSelectedTab(0);
            }}
          >
            Top
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setSelectedTab(1);
            }}
          >
            Trending
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setSelectedTab(2);
            }}
          >
            Watchlist
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <br />
      <Row>
        <Col sm={2}>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              style={{ backgroundColor: "#0d6efd" }}
            >
              All Categories
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Art</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Collectibles</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Domain Names</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Music</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Photography</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Sports</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Trading Cards</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Utility</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Virtual Worlds</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col sm={7}></Col>
        <Col sm={3}>
          <Button style={{ backgroundColor: "#0d6efd" }}>1h</Button>
          <Button style={{ backgroundColor: "#0d6efd" }}>6h</Button>
          <Button style={{ backgroundColor: "#0d6efd" }}>24h</Button>
          <Button style={{ backgroundColor: "#0d6efd" }}>7d</Button>
          <Button style={{ backgroundColor: "#0d6efd" }}>30d</Button>
          <Button style={{ backgroundColor: "#0d6efd" }}>All</Button>
        </Col>
      </Row>
      <Row className="mt-4" style={{ width: "96vw", marginLeft: "2rem" }}>
        <Table hover>
          <thead>
            <tr>
              <th></th>
              <th>Collection</th>
              <th>Volume</th>
              <th>CHANGE</th>
              <th>FLOOR PRICE</th>
              <th>SALES</th>
              <th>% UNIQUE OWNERS</th>
              <th>% ITEMS LISTED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>RENGA</td>
              <td>2,399eth</td>
              <td>+354%</td>
              <td>2.87 ETH</td>
              <td>830</td>
              <td>38%</td>
              <td>19%</td>
              <td>
                <i class="bi bi-star-fill"></i>
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </div>
  );
};

export default Ranking;
