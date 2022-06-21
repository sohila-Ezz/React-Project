import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {Link} from 'react-router-dom'
// import {useSelector} from 'react-redux'
const Header = () => {

      // const language= useSelector((state)=>state.language.lang)
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" >Home</Link>
              <Link to="/about" className="mx-3">About us</Link>
              <Link to="/contact">Contact us</Link>
              <Link to="/movies" className="mx-3">Movies</Link>
              {/* <h3>{language}</h3> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
