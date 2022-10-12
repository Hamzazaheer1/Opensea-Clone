import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import asuki from "../../images/Asuki.avif";

import "./BackgroundImg.css";

const BackgroundImg = () => {
  const Navigate = useNavigate();
  return (
    <Row>
      <Col
        sm={12}
        style={{
          backgroundImage:
            "url(https://superhqwallpapers.com/wp-content/uploads/2021/08/Peace-Of-Landscape-Oa-Wallpaper.jpg)",
          height: "70vh",
        }}
      >
        <Container>
          <Row style={{ marginTop: "8rem", color: "white" }}>
            <Col sm={7} style={{}}>
              <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
                Discover, collect and sell extraordinary NFTs
              </h1>
              <h1 style={{ fontStyle: "italic" }}>
                Artisy is a Marketplace to make it possible
              </h1>
            </Col>
            <Col sm={1}></Col>
            <Col sm={4}>
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={asuki} />
                <Card.Body style={{ color: "black" }}>
                  <Card.Title>Asuki</Card.Title>
                  <Card.Text>Created by Khudaima</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      Navigate("/all-nfts");
                    }}
                  >
                    Explore more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default BackgroundImg;
