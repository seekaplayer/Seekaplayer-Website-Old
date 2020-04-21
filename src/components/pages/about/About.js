import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import Picture from "../../images/Picture";
import {
  AboutMe,
  Gaming,
  WebDesignDevelopment,
  HealthAndFitness,
  Music,
} from "../../content/Content";
import "./About.css";
const About = () => {
  return (
    <>
      <Helmet>
        <meta name="Author" content="Seekaplayer" />
        <meta
          name="keywords"
          content="Web Designer, Web Developer, Twitch Streamer"
        />
        <meta name="description" content="You can learn more about who I am." />
        <title>Seekaplayer | About</title>
      </Helmet>
      <div className="aboutMeSection">
        <Container>
          <Row>
            <Col>
              <Picture
                src="./images/seekaplayer.jpg"
                alt="Seekaplayer Image"
                className="blueImageBorder centerImage"
              />
              <div className="mt-5"></div>
              <AboutMe />
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="aboutMeSection"
        style={{ background: "#212121", color: "#ffffff" }}
      >
        <Container>
          <Row>
            <Col lg={4}>
              <Picture
                src="./images/gaming_controller.jpg"
                alt="Seekaplayer Image"
                className="blueImageBorder"
              />
            </Col>

            <Col lg={8}>
              <div className="aboutMobileSpacing"></div>
              <Gaming />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="aboutMeSection">
        <Container>
          <Row>
            <Col xs={{ span: 12, order: 12 }} lg={{ span: 8, order: 1 }}>
              <div className="aboutMobileSpacing"></div>
              <WebDesignDevelopment />
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 4, order: 12 }}>
              <Picture
                src="./images/web_design_development.jpg"
                alt="Seekaplayer Image"
                className="blueImageBorder"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="aboutMeSection"
        style={{ background: "#212121", color: "#ffffff" }}
      >
        <Container>
          <Row>
            <Col lg={4}>
              <Picture
                src="./images/seekaplayer2.jpg"
                alt="Seekaplayer Image"
                className="blueImageBorder"
              />
            </Col>
            <Col lg={8}>
              <div className="aboutMobileSpacing"></div>
              <HealthAndFitness />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="aboutMeSection">
        <Container>
          <Row>
            <Col xs={{ span: 12, order: 12 }} lg={{ span: 8, order: 1 }}>
              <div className="aboutMobileSpacing"></div>
              <Music />
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 4, order: 12 }}>
              <Picture
                src="./images/jem7vp.jpg"
                alt="Seekaplayer Image"
                className="blueImageBorder"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
