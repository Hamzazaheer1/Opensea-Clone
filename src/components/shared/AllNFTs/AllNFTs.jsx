import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import nftimage from "../../images/killua.jpg";

const AllNFTs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div style={{ marginLeft: "1rem" }}>
      <p className="mt-5 mb-5" style={{ fontSize: "3rem", fontWeight: "bold" }}>
        Explore collections
      </p>
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setSelectedTab(0);
            }}
          >
            Trending
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setSelectedTab(1);
            }}
          >
            Top
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setSelectedTab(2);
            }}
          >
            Art
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setSelectedTab(3);
            }}
          >
            Collectibles
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setSelectedTab(4);
            }}
          >
            Domain Names
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setSelectedTab(5);
            }}
          >
            Music
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setSelectedTab(6);
            }}
          >
            Photography
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setSelectedTab(7);
            }}
          >
            Sports
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setSelectedTab(8);
            }}
          >
            Trading Cards
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setSelectedTab(9);
            }}
          >
            Utility
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setSelectedTab(10);
            }}
          >
            Virtual Worlds
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* {selectedTab === 0 && console.log(0)}
      {selectedTab === 1 && console.log(1)} */}
      <div style={{ marginLeft: "1rem" }}>
        <Row>
          <Card
            style={{ width: "25rem", marginRight: "1rem" }}
            className="mt-3"
          >
            <Card.Img
              variant="top"
              src={nftimage}
              width="300px"
              height="300px"
            />
            <Card.Body>
              <Button variant="primary">NFTName or UserName</Button>
            </Card.Body>
          </Card>
        </Row>
      </div>
    </div>
  );
};

export default AllNFTs;
