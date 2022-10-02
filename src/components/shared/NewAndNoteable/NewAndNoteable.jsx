import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import nftimage from "../../images/killua.jpg";
import Button from "react-bootstrap/Button";
import ReactCardSlider from "react-card-slider-component";

const NewAndNoteable = () => {
  const slides = [
    {
      image: "https://picsum.photos/200/300",
      title: "This is a title",
      description: "This is a description",
    },
    {
      image: "https://picsum.photos/600/500",
      title: "This is a second title",
      description: "This is a second description",
    },
    {
      image: "https://picsum.photos/700/600",
      title: "This is a third title",
      description: "This is a third description",
    },
    {
      image: "https://picsum.photos/500/400",
      title: "This is a fourth title",
      description: "This is a fourth description",
    },
    {
      image: "https://picsum.photos/200/300",
      title: "This is a fifth title",
      description: "This is a fifth description",
    },
    {
      image: "https://picsum.photos/800/700",
      title: "This is a sixth title",
      description: "This is a sixth description",
    },
    {
      image: "https://picsum.photos/300/400",
      title: "This is a seventh title",
      description: "This is a seventh description",
    },
  ];
  return (
    <div className="mt-5">
      <h1 style={{ fontWeight: "bold" }}>New and Noteable</h1>
      <Container className="mt-2">
        <ReactCardSlider slides={slides} />
      </Container>
    </div>
  );
};

export default NewAndNoteable;
