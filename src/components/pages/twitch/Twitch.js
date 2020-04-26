import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import VideoPlayer from "../../videoplayer/VideoPlayer";
import Chat from "../../chat/Chat";
import Followers from "../../content/Followers";
import Viewers from "../../content/Viewers";
import TwitchVideos from "../../content/TwitchVideos";
import TwitchClips from "../../content/TwitchClips";
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
            <Col>
              <h1>Seekaplayer Twtich</h1>
              <hr />
              <span className="twitchStats">
                Followers: <Followers /> | Channel Views: <Viewers />
              </span>
            </Col>
          </Row>
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
            <Col>
              <h2>
                Twitch Videos -{" "}
                <a
                  href="https://www.twitch.tv/seekaplayer/videos"
                  target="_blank"
                >
                  View All
                </a>
              </h2>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <TwitchVideos />
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="twitchSection"
        style={{ background: "#f0f0f0", color: "#212121" }}
      >
        <Container>
          <Row>
            <Col>
              <h2>
                Twitch Clips -{" "}
                <a
                  href="https://www.twitch.tv/seekaplayer/clips?filter=clips"
                  target="_blank"
                >
                  View All
                </a>
              </h2>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <TwitchClips />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Twitch;
