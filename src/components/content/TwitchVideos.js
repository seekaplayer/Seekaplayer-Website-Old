import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import CustomButton from "../icons/Button";
import { TwitchGetVideos } from "../libs/Twitch";

const TwitchVideos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    TwitchGetVideos()
      .then((vids) => {
        setVideos(vids.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Row>
        {videos.slice(0, 3).map((video, key) => {
          {
            var thumb = video.thumbnail_url
              .replace("%{width}", "400")
              .replace("%{height}", "225");
          }

          return (
            <Col key={key} md={12} lg={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src={
                    !video.thumbnail_url
                      ? "./images/video_placeholder.jpg"
                      : thumb
                  }
                />

                <Card.Body>
                  <div style={{ height: "80px" }}>
                    <Card.Title>{video.title}</Card.Title>
                  </div>
                  <Card.Text>
                    Post Date: {new Date(video.created_at).toLocaleDateString()}
                  </Card.Text>
                  <a href={video.url} target="_blank">
                    <CustomButton className="twitchBtn" text="Watch Now" />
                  </a>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row className="mt-4">
        {videos.slice(3, 6).map((video, key) => {
          {
            var thumb = video.thumbnail_url
              .replace("%{width}", "400")
              .replace("%{height}", "225");
          }
          return (
            <Col key={key} md={12} lg={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src={
                    !video.thumbnail_url
                      ? "./images/video_placeholder.jpg"
                      : thumb
                  }
                />

                <Card.Body>
                  <div style={{ height: "80px" }}>
                    <Card.Title>{video.title}</Card.Title>
                  </div>
                  <Card.Text>
                    Post Date: {new Date(video.created_at).toLocaleDateString()}
                  </Card.Text>
                  <a href={video.url} target="_blank">
                    <CustomButton className="twitchBtn" text="Watch Now" />
                  </a>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row className="mt-4">
        {videos.slice(6, 9).map((video, key) => {
          {
            var thumb = video.thumbnail_url
              .replace("%{width}", "400")
              .replace("%{height}", "225");
          }
          return (
            <Col key={key} md={12} lg={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src={
                    !video.thumbnail_url
                      ? "./images/video_placeholder.jpg"
                      : thumb
                  }
                />

                <Card.Body>
                  <div style={{ height: "80px" }}>
                    <Card.Title>{video.title}</Card.Title>
                  </div>
                  <Card.Text>
                    Post Date: {new Date(video.created_at).toLocaleDateString()}
                  </Card.Text>
                  <a href={video.url} target="_blank">
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

export default TwitchVideos;
