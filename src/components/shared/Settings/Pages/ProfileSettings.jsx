import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useNavigate } from "react-router-dom";

const ProfileSettings = () => {
  const Navigate = useNavigate();

  return (
    <div className="mt-5 mb-5">
      <Row>
        <Col sm={3}></Col>
        <Col sm={5}>
          <h1>
            <b>Profile details</b>
          </h1>
          <Button
            bg="primary"
            onClick={() => {
              Navigate("/profile");
            }}
          >
            Preview
          </Button>
          <br />
          <br />
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Private Key</Form.Label>
              <Form.Control type="text" placeholder="Enter Private Key" />
              <br />
              <Form.Label>Bio</Form.Label>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Tell the world your story!"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Tell the world your story!"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <br />
              <Form.Label>Current Wallet Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="0xbe55e3ead0bd9f7d88c1e95fe65918b3546b3412"
              />
              <br />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ height: "3rem", width: "5rem" }}
            >
              Save
            </Button>
          </Form>
        </Col>
        <Col sm={2} className="mt-5">
          <h5>
            <b style={{ marginLeft: "2rem" }}>Profile Image</b>
          </h5>
          <input type="file" />
          <br />
          <br />
          <h5>
            <b style={{ marginLeft: "2rem" }}>Profile Banner</b>
          </h5>
          <input type="file" />
        </Col>
        <Col sm={2}></Col>
      </Row>
    </div>
  );
};

export default ProfileSettings;
