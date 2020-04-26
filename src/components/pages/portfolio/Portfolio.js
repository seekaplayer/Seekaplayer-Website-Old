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
            <Col md={12} lg={4}>
              <Projects
                path="./images/seekaplayer-dev.png"
                title="Seekaplayer Dev Website"
                text="This is an SPA App website that I use for testing out my projects. This uses React"
                url="https://github.com/seekaplayer/Seekaplayer-Development-Site"
              />
            </Col>
            <Col md={12} lg={4}>
              <Projects
                path="./images/twitch-streamer-search.png"
                title="Twitch Streamer Search V1"
                text="This application searches Twitch's API for a streamer you'd like to find out more about. This uses React."
                url="https://github.com/seekaplayer/Twitch-Streamer-Search-2"
              />
            </Col>
            <Col md={12} lg={4}>
              <Projects
                path="./images/twitch-streamer-search-2.png"
                title="Twitch Streamer Search V2"
                text="This is the second version to the Twitch Streamer Search. This time when you type in the search bar a list of Twitch Accounts generates in real-time."
                url="https://github.com/seekaplayer/Twitch-Streamer-Search"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Portfolio;
