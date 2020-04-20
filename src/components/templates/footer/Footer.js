import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FooterAbout } from "../../content/Content";
import TwitterFeed from "../../libs/Twitter";
import IGF from "../../libs/Instagram";
import MdHeart from "react-ionicons/lib/MdHeart";
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
            <Col className="mt-5">
              <div className="copyright">
                &copy; {new Date().getFullYear()} Seekaplayer, All Rights
                Reserved.
                <div>
                  Made with
                  {<MdHeart fontSize="1.5em" color="#12a8e0" beat={true} />}by
                  Seekaplayer
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
