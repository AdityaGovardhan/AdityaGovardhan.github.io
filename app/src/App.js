import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './App.css';

function App() {
  return (
    <>
      <Navbar style={{ justifyContent: "center"}}>
        {/* <Navbar.Brand href="#home">Aditya Govardhan</Navbar.Brand> */}
        <Nav>
          <Nav.Link href="#about_me" style={{ color: "white", paddingLeft: "32px", paddingRight: "32px" }}>
            about_me
          </Nav.Link>
          <Nav.Link href="#projects" style={{ color: "white", paddingLeft: "32px", paddingRight: "32px" }}>
            projects
          </Nav.Link>
          <Nav.Link href="#resume" style={{ color: "white", paddingLeft: "32px", paddingRight: "32px" }}>
            resume
          </Nav.Link>
          <Nav.Link href="#contact_me" style={{ color: "white", paddingLeft: "32px", paddingRight: "32px" }}>
            contact_me
          </Nav.Link>
        </Nav>
      </Navbar>

      <header className="profile-content">
        <h2 style={{ color: "white" }}>
          This is Aditya Govardhan.
        </h2>
        <small style={{ color: 'grey', fontSize: '16px' }}>
          &#9935; site under construction
        </small>
      </header>
    </>
  );
}

export default App;
