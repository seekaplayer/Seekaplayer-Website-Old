import React from "react";
import Logo from "../../images/Logo";
import NavItems from "./NavItems";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
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
