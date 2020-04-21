import React from "react";
import Logo from "../../images/Logo";
import NavItems from "./NavItems";
import { Link } from "react-router-dom";
import { Container, Row, Navbar, Nav } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  return (
    <>
      <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {NavItems.map((navItem) => {
                return (
                  <li key={navItem.name}>
                    <Link className="nav-link" to={navItem.path}>
                      {navItem.name}
                    </Link>
                  </li>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
