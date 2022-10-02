import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./Trending_Top.css";
import Top from "./Tabs/Top";
import Trending from "./Tabs/Trending";
import NewAndNoteable from "../NewAndNoteable/NewAndNoteable";

const Trending_Top = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div style={{ paddingLeft: "3rem" }}>
      <br />
      <Row>
        <Col sm={5}>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setSelectedTab(0);
                }}
                eventKey="link-1"
                href=""
              >
                Top
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setSelectedTab(1);
                }}
                eventKey="link-1"
                href=""
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
