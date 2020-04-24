import { useEffect, useState } from "react";
import axios from "axios";

const path = "https://api.twitch.tv/helix";

export const TwitchUserData = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get(`${path}/users?login=seekaplayer`, {
        headers: {
          "client-id": "6rwhuhiuubip353ysn8war2y240be8",
        },
      })
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return userData;
};
