import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import Projects from "../../projects/Projects";
import "./Portfolio.css";
const Portfolio = () => {
  return (
    <>
      <Helmet>
        <meta name="Author" content="Seekaplayer" />
        <meta
          name="keywords"
          content="Web Designer, Web Developer, Twitch Streamer"
        />
        <meta name="description" content="Check out my projects" />
        <title>Seekaplayer | Portfolio</title>
      </Helmet>
      <div className="portfolioSection">
        <Container>
          <Row>
            <Col>
              <h1>Portfolio Page</h1>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <Projects
                path="./images/video_placeholder.jpg"
                title="Test"
                text="dsklafjsdlkjfaslkd fjalksd jfalksdjflkasdj flksjdlfk; ajsdlk fjsdlk fd"
              />
            </Col>
            <Col>
              <Projects
                path="./images/video_placeholder.jpg"
                title="Test"
                text="dsklafjsdlkjfaslkd fjalksd jfalksdjflkasdj flksjdlfk; ajsdlk fjsdlk fd"
              />
            </Col>
            <Col>
              <Projects
                path="./images/video_placeholder.jpg"
                title="Test"
                text="dsklafjsdlkjfaslkd fjalksd jfalksdjflkasdj flksjdlfk; ajsdlk fjsdlk fd"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <Projects
                path="./images/video_placeholder.jpg"
                title="Test"
                text="dsklafjsdlkjfaslkd fjalksd jfalksdjflkasdj flksjdlfk; ajsdlk fjsdlk fd"
              />
            </Col>
            <Col>
              <Projects
                path="./images/video_placeholder.jpg"
                title="Test"
                text="dsklafjsdlkjfaslkd fjalksd jfalksdjflkasdj flksjdlfk; ajsdlk fjsdlk fd"
              />
            </Col>
            <Col>
              <Projects
                path="./images/video_placeholder.jpg"
                title="Test"
                text="dsklafjsdlkjfaslkd fjalksd jfalksdjflkasdj flksjdlfk; ajsdlk fjsdlk fd"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Portfolio;
