import React from "react";
import Nft1 from "../../images/nft1.jpg";
import "./BackgroundImg.css";

const BackgroundImg = () => {
  return (
    <div
      id="intro"
      className="bg-image"
      style={{
        backgroundImage: "url(https://images.alphacoders.com/120/1203522.jpg)",
        height: "68vh",
        filter: "blur(2px)",
      }}
    >
      <div
        className="mask text-white"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", height: "68vh" }}
      >
        <div className="container d-flex align-items-center text-center hover-effect">
          <div style={{ marginTop: "6.5rem", filter: "blur(none)" }}>
            <div
              style={{
                backgroundImage:
                  "url(https://images.alphacoders.com/120/1203522.jpg)",
                border: "solid rounded",
                width: "71vw",
                height: "52vh",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImg;
