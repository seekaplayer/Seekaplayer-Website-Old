import React, { useEffect, useState } from "react";
import axios from "axios";

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

  return <>{}</>;
};

export default IGF;
