import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import CustomButton from "../icons/Button";
import { TwitchGetClips } from "../libs/Twitch";

const TwitchClips = () => {
  const [clips, setClips] = useState([]);
  useEffect(() => {
    TwitchGetClips()
      .then((clip_s) => {
        setClips(clip_s.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Row>
        {clips.slice(0, 3).map((clip, key) => {
          return (
            <Col key={key} md={12} lg={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src={
                    !clip.thumbnail_url
                      ? "./images/clips_placeholder.jpg"
                      : clip.thumbnail_url
                  }
                />

                <Card.Body>
                  <div style={{ height: "80px" }}>
                    <Card.Title>{clip.title}</Card.Title>
                  </div>
                  <Card.Text>
                    Post Date: {new Date(clip.created_at).toLocaleDateString()}
                  </Card.Text>
                  <a href={clip.url} target="_blank">
                    <CustomButton className="twitchBtn" text="Watch Now" />
                  </a>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row className="mt-4">
        {clips.slice(3, 6).map((clip, key) => {
          return (
            <Col key={key} md={12} lg={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src={
                    !clip.thumbnail_url
                      ? "./images/clips_placeholder.jpg"
                      : clip.thumbnail_url
                  }
                />

                <Card.Body>
                  <div style={{ height: "80px" }}>
                    <Card.Title>{clip.title}</Card.Title>
                  </div>
                  <Card.Text>
                    Post Date: {new Date(clip.created_at).toLocaleDateString()}
                  </Card.Text>
                  <a href={clip.url} target="_blank">
                    <CustomButton className="twitchBtn" text="Watch Now" />
                  </a>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row className="mt-4">
        {clips.slice(6, 9).map((clip, key) => {
          return (
            <Col key={key} md={12} lg={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src={
                    !clip.thumbnail_url
                      ? "./images/clips_placeholder.jpg"
                      : clip.thumbnail_url
                  }
                />

                <Card.Body>
                  <div style={{ height: "80px" }}>
                    <Card.Title>{clip.title}</Card.Title>
                  </div>
                  <Card.Text>
                    Post Date: {new Date(clip.created_at).toLocaleDateString()}
                  </Card.Text>
                  <a href={clip.url} target="_blank">
                    <CustomButton className="twitchBtn" text="Watch Now" />
                  </a>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default TwitchClips;
