import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import {
  MyServices,
  WebDesignDevelopment,
  GraphicDesign,
  HumbleBundle,
  EpidemicSounds,
} from "../../content/Content";
import Picture from "../../images/Picture";
import CustomButton from "../../icons/Button";
import { Link } from "react-router-dom";
import "./Services.css";
import "../../icons/Button.css";
const Services = () => {
  return (
    <>
      <Helmet>
        <meta name="Author" content="Seekaplayer" />
        <meta
          name="keywords"
          content="Web Designer, Web Developer, Twitch Streamer"
        />
        <meta name="description" content="I offer an array of services" />
        <title>Seekaplayer | Services</title>
      </Helmet>
      <div className="serviceSection">
        <Container>
          <Row>
            <Col>
              <MyServices />
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="serviceSection"
        style={{ background: "#212121", color: "#ffffff" }}
      >
        <Container>
          <Row>
            <Col lg={4}>
              <Picture
                src="./images/web_design_development.jpg"
                alt="Web Design/Development Image."
              />
            </Col>
            <Col lg={8}>
              <div className="aboutMobileSpacing"></div>
              <WebDesignDevelopment />
              <Link to="/contact">
                <CustomButton
                  className="whiteBtn serviceButton"
                  text="Hire Me!"
                />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="serviceSection">
        <Container>
          <Row>
            <Col xs={{ span: 12, order: 12 }} lg={{ span: 8, order: 1 }}>
              <div className="aboutMobileSpacing"></div>
              <GraphicDesign />
              <Link to="/contact">
                <CustomButton
                  className="blackBtn serviceButton"
                  text="Hire Me!"
                />
              </Link>
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 4, order: 12 }}>
              <Picture
                src="./images/graphic_design.jpg"
                alt="Seekaplayer Image"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="serviceSection"
        style={{ background: "#212121", color: "#ffffff" }}
      >
        <Container>
          <Row>
            <Col lg={4}>
              <Picture
                src="./images/epidemic_sounds.jpg"
                alt="Web Design/Development Image."
              />
            </Col>
            <Col lg={8}>
              <div className="aboutMobileSpacing"></div>
              <EpidemicSounds />
              <a
                href="https://www.epidemicsound.com/referral/2msj1d/"
                target="_blank"
              >
                <CustomButton
                  className="whiteBtn serviceButton"
                  text="Sign Up!"
                />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="serviceSection">
        <Container>
          <Row>
            <Col xs={{ span: 12, order: 12 }} lg={{ span: 8, order: 1 }}>
              <div className="aboutMobileSpacing"></div>
              <HumbleBundle />
              <a
                href="https://www.humblebundle.com/monthly?partner=seekaplayer"
                target="_blank"
              >
                <CustomButton
                  className="blackBtn serviceButton"
                  text="Subscribe"
                />
              </a>
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 4, order: 12 }}>
              <Picture
                src="./images/humble_bundle.png"
                alt="Seekaplayer Image"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
