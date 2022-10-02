import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const CreateCatelog = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col sm={3}></Col>
        <Col sm={7}>
          <h1>Create New Item</h1>
          <br />
          <p>
            <p style={{ color: "red" }}>* Required fields</p>
          </p>
          <h4 style={{ display: "flex" }}>
            Image, Video, Audio, or 3D Model <p>*</p>
          </h4>
          <p></p>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label style={{ fontSize: "0.8rem", color: "grey" }}>
              File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
              OGG, GLB, GLTF. Max size: 100 MB
            </Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <b style={{ display: "flex", marginBottom: "-1rem" }}>
                Name <p style={{ color: "red" }}>*</p>
              </b>
            </Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>External link</b>
            </Form.Label>
            <Form.Control type="text" placeholder="https://yoursite/item/123" />
            <Form.Text className="text-muted">
              OpenSea will include a link to this URL on this item's detail
              page, so that users can click to learn more about it. You are
              welcome to link to your own webpage with more details.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <b>Description</b>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder={"Provide a detailed description of your item."}
            />
            <Form.Text className="text-muted">
              The description will be included on the item's detail page
              underneath its image. Markdown syntax is supported.
            </Form.Text>
          </Form.Group>
          <br />
          <hr />
          <br />
          <Button size="lg">Create</Button>
        </Col>
        <Col sm={2}></Col>
      </Row>
    </Container>
  );
};

export default CreateCatelog;
