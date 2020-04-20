import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Image } from "react-bootstrap";

const IGF = () => {
  const [instaFeed, setInstaFeed] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.instagram.com/seekaplayer_/?__a=1")
      .then((res) => {
        setInstaFeed(res.data.graphql.user.edge_owner_to_timeline_media.edges);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Row className="instaFeedTopRow">
        {instaFeed.slice(0, 3).map((instagram) => {
          return (
            <Col sm={4}>
              <Image fluid src={instagram.node.thumbnail_src} />
            </Col>
          );
        })}
      </Row>
      <Row className="instaFeedSecondRow">
        {instaFeed.slice(3, 6).map((instagram) => {
          return (
            <Col sm={4}>
              <Image fluid src={instagram.node.thumbnail_src} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default IGF;
