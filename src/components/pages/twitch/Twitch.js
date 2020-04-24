import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import VideoPlayer from "../../videoplayer/VideoPlayer";
import Chat from "../../chat/Chat";
import { TwitchUserData } from "../../libs/Twitch";
import "./Twitch.css";
const Twitch = () => {
  return (
    <>
      <Helmet>
        <meta name="Author" content="Seekaplayer" />
        <meta
          name="keywords"
          content="Web Designer, Web Developer, Twitch Streamer"
        />
        <meta name="description" content="Check out my Twitch Channel." />
        <title>Seekaplayer | Home</title>
      </Helmet>
      <div className="twitchHeader">
        <Container>
          <Row>
            <Col sm={12} md={12} lg={8}>
              <VideoPlayer />
            </Col>
            <Col sm={12} md={12} lg={4}>
              <Chat />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="twitchSection">
        <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Twitch;
