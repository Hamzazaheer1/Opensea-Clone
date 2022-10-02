import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const Footer = () => {
  return (
    <div className="mt-5">
      <Card
        className="text-center"
        style={{ backgroundColor: "rgb(24, 104, 183)", color: "white" }}
      >
        <Container>
          <Row className="mt-4">
            <Col sm={5}>
              <h3 className="d-flex justify-content-start">Stay in the loop</h3>
              <p>
                Join our mailing list to stay in the loop with our newest
                feature releases, NFT drops, and tips and tricks for navigating
                OpenSea.
              </p>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Row>
                  <Col sm={7}>
                    <Form.Control
                      type="email"
                      placeholder="Your email address"
                    />
                  </Col>
                  <Col sm={4}>
                    <Button bg="primary">Sign up</Button>
                  </Col>
                </Row>
              </Form.Group>
            </Col>
            <Col sm={1}></Col>
            <Col sm={5}>
              <h3>Join the community</h3>
              <i
                class="bi bi-facebook"
                style={{ marginRight: "15px", fontSize: "2rem" }}
              ></i>
              <i
                class="bi bi-instagram"
                style={{ marginRight: "15px", fontSize: "2rem" }}
              ></i>
              <i
                class="bi bi-discord"
                style={{ marginRight: "15px", fontSize: "2rem" }}
              ></i>
              <i
                class="bi bi-reddit"
                style={{ marginRight: "15px", fontSize: "2rem" }}
              ></i>
              <i
                class="bi bi-youtube"
                style={{ marginRight: "15px", fontSize: "2rem" }}
              ></i>
              <i
                class="bi bi-tiktok"
                style={{ marginRight: "15px", fontSize: "2rem" }}
              ></i>
              <i
                class="bi bi-envelope"
                style={{ marginRight: "15px", fontSize: "2rem" }}
              ></i>
            </Col>
            <hr className="mt-4" />
          </Row>
          <Row className="mt-5">
            <Col sm={4}>
              <h3 className="d-flex justify-content-start">Opensea</h3>
              <p className="d-flex justify-content-start">
                The world’s first and largest digital marketplace for crypto
                collectibles and non-fungible tokens (NFTs). Buy, sell, and
                discover exclusive digital items
              </p>
              <p className="d-flex justify-content-start">
                Aladdin Sane Lightning Bolt is a registered trademark of
                Jones/Tintoretto Entertainment Company LLC.
              </p>
            </Col>
            <Col sm={2}>
              <b>MarketPlace</b>
              <p>All nfts</p>
              <p>All nfts</p>
              <p>All nfts</p>
            </Col>
            <Col sm={2}>
              <b>MarketPlace</b>
              <p>All nfts</p>
              <p>All nfts</p>
              <p>All nfts</p>
            </Col>
            <Col sm={2}>
              <b>MarketPlace</b>
              <p>All nfts</p>
              <p>All nfts</p>
              <p>All nfts</p>
            </Col>
            <Col sm={2}>
              <b>MarketPlace</b>
              <p>All nfts</p>
              <p>All nfts</p>
              <p>All nfts</p>
            </Col>
            <hr className="mt-4 mb-4" />
          </Row>
          <Row>
            <Col sm={3}>
              <small className="d-flex justify-content-start">
                <i class="bi bi-c-circle"></i> &nbsp;2022 - 2027 Your Networks,
                Inc
              </small>
            </Col>
            <Col sm={6}></Col>
            <Col sm={3} className="mb-4">
              <small className="d-flex justify-content-end">
                Privacy Policy
              </small>
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
};

export default Footer;
