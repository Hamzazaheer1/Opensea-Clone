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
          <Row style={{ marginTop: "10rem", color: "white" }}>
            <Col sm={7} style={{}}>
              <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>
                Discover, collect and sell extraordinary NFTs
              </h1>
              <h1 style={{ fontStyle: "italic" }}>
                Artisy is a Marketplace to make it possible
              </h1>
            </Col>
            <Col sm={1}></Col>
            <Col sm={4}>
              <Card style={{ width: "19rem" }}>
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
    //       <React.Fragment>
    //   <div
    //     id="intro"
    //     className="bg-image"
    //     style={{
    //       backgroundImage:
    //         "url(https://superhqwallpapers.com/wp-content/uploads/2021/08/Peace-Of-Landscape-Oa-Wallpaper.jpg)",
    //       height: "68vh",
    //       filter: "blur(2px)",
    //     }}
    //   >
    //     <Container style={{ marginTop: "-2rem" }}>
    //       <Row>
    //         <Col sm={4}>
    //           <h1>Welcome to OpenSea</h1>
    //         </Col>
    //         <Col sm={4}></Col>
    //         <Col sm={4}></Col>
    //       </Row>
    //     </Container>
    //     {/* <img
    //       src={NFT1}
    //       alt=""
    //       width={"100%"}
    //       height={"600rem"}
    //       style={{ filter: "blur(2px)" }}
    //     /> */}

    //     {/* <div
    //     className="mask text-white"
    //     style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", height: "68vh" }}
    //   >
    //     <div className="container d-flex align-items-center text-center hover-effect">
    //       <div style={{ marginTop: "6.5rem", filter: "blur(none)" }}>
    //         <div
    //           style={{
    //             // backgroundImage:
    //             //   "url(https://images.alphacoders.com/120/1203522.jpg)",
    //             border: "solid rounded",
    //             width: "71vw",
    //             height: "52vh",
    //           }}
    //         >
    //           <img src={Nft1} width="1000rem" height="450rem" />
    //         </div>
    //       </div>
    //     </div>
    //   </div> */}
    //   </div>
    // </React.Fragment>
  );
};

export default BackgroundImg;
