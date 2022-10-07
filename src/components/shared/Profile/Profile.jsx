import React, { useState } from "react";
import DefaultCover from "../../images/DefaultCover.jpg";
import DefaultProfile from "../../images/DefaultProfilePic.jpg";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Collected from "./ProfilePages/Collected";
import Created from "./ProfilePages/Created";
import Favorited from "./ProfilePages/Favorited";
import Activity from "./ProfilePages/Activity";

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div>
      <div style={{ display: "flex" }}>
        <input
          type={"image"}
          src={DefaultCover}
          alt="defaultCover"
          width="1920px"
          height="300px"
        />
        <input
          style={{ marginLeft: "-117rem", marginTop: "10rem" }}
          type={"image"}
          src={DefaultProfile}
          width="200px"
          height="200px"
        />
      </div>
      <div style={{ marginLeft: "3.3rem" }}>
        <h3 style={{ fontWeight: "bold" }}>Unnamed</h3>
        <p>0x51f8...ccf1 &nbsp;&nbsp;&nbsp;Joined September 2022</p>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setSelectedTab(0);
              }}
            >
              Collected
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setSelectedTab(1);
              }}
            >
              Created
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setSelectedTab(2);
              }}
            >
              Favorited
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setSelectedTab(3);
              }}
            >
              Activity
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="More" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Offers made</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Offers receive</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Active Listing</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Inactive Listing</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Hidden</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <br />
        {selectedTab == 0 && <Collected />}
        {selectedTab == 1 && <Created />}
        {selectedTab == 2 && <Favorited />}
        {selectedTab == 3 && <Activity />}
      </div>
    </div>
  );
};

export default Profile;
