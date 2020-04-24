import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FooterAbout } from "../../content/Content";
import TwitterFeed from "../../libs/Twitter";
import IGF from "../../libs/Instagram";
import { HeartIcon, Icons } from "../../icons/Icons";
import NavItems from "../header/NavItems";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col md={12} lg={4}>
              <h2>About Me</h2>
              <hr />
              <FooterAbout />
            </Col>
            <Col md={12} lg={4}>
              <h2>Twitter Feed</h2>
              <hr />
              <TwitterFeed />
            </Col>
            <Col md={12} lg={4}>
              <h2>Instagram Feed</h2>
              <hr />
              <IGF />
            </Col>
          </Row>
          <Row>
            <Col className="footerIcons">
              {Icons.map((icon, key) => {
                return (
                  <span key={key}>
                    <span>
                      <a
                        href={icon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {icon.component}
                      </a>
                    </span>
                  </span>
                );
              })}
            </Col>
          </Row>
          <Row>
            <Col>
              <nav>
                <ul>
                  {NavItems.map((navItem, key) => {
                    return (
                      <li key={key}>
                        <Link to={navItem.path}>{navItem.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="copyright">
                &copy; {new Date().getFullYear()} Seekaplayer, All Rights
                Reserved.
                <div>
                  Made with{" "}
                  {<HeartIcon fontSize="1.5em" color="#12a8e0" beat={true} />}{" "}
                  by Seekaplayer
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
