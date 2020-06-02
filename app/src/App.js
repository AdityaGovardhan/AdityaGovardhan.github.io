import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        {/* <Navbar.Brand href="#home">Aditya Govardhan</Navbar.Brand> */}
        <Nav className="mr-auto">
          <Nav.Link href="#about_me">about_me</Nav.Link>
          <Nav.Link href="#projects">projects</Nav.Link>
          <Nav.Link href="#resume">resume</Nav.Link>
        </Nav>
      </Navbar>

      <header className="App-header">
        <h2>
          This is Aditya Govardhan.
        </h2>
        <small style={{color: 'grey', fontSize: '16px'}}>&#9935; site under construction</small>
      </header>
    </div>
  );
}

export default App;
