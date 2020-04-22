import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import { MyServices, WebDesignDevelopment } from "../../content/Content";
import Picture from "../../images/Picture";
import "./Services.css";
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
                className="blueImageBorder"
              />
            </Col>
            <Col lg={8}>
              <div className="aboutMobileSpacing"></div>
              <WebDesignDevelopment />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="serviceSection">
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
    </>
  );
};

export default Services;
