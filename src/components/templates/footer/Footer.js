import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MdHeart from "react-ionicons/lib/MdHeart";
import IGF from "../../libs/Instagram";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <IGF />
      <footer className="text-center fixed-bottom">
        <Container>
          <Row>
            <Col>
              &copy; {new Date().getFullYear()} Seekaplayer, All Rights
              Reserved.
              <div>
                Made with
                {<MdHeart fontSize="1.5em" color="#12a8e0" beat={true} />}by
                Seekaplayer
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
