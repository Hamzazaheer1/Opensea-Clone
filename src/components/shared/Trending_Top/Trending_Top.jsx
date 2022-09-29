import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./Trending_Top.css";

const Trending_Top = () => {
  return (
    <div style={{ paddingLeft: "3rem" }}>
      <br />
      <Row>
        <Col sm={5}>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="trending" title="Trending"></Tab>
            <Tab eventKey="top" title="Top"></Tab>
          </Tabs>
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
    </div>
  );
};

export default Trending_Top;
