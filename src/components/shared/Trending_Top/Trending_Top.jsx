import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Top from "./Tabs/Top";
import Trending from "./Tabs/Trending";
import NewAndNoteable from "../NewAndNoteable/NewAndNoteable";
import "./Trending_Top.css";

const Trending_Top = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div style={{ paddingLeft: "3rem" }}>
      <br />
      <Row>
        <Col sm={5}>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setSelectedTab(0);
                }}
              >
                Top
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setSelectedTab(1);
                }}
              >
                Trending
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={4}></Col>
        <Col sm={3}>
          <div style={{ marginLeft: "9rem" }}>
            <div class="dropdown">
              <p className={"btn-effect"}>24h</p>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <button className="btn-effect" style={{ marginLeft: "1rem" }}>
              View all
            </button>
          </div>
        </Col>
      </Row>
      {selectedTab === 0 && <Top />}
      {selectedTab === 1 && <Trending />}
      <NewAndNoteable />
    </div>
  );
};

export default Trending_Top;
