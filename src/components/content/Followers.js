import React, { useEffect, useState } from "react";
import { TwitchGetFollowers } from "../libs/Twitch";
const Followers = () => {
  const [followers, setFollowers] = useState({ total: 0 });
  useEffect(() => {
    TwitchGetFollowers()
      .then((follows) => {
        setFollowers(follows);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <>{followers.total.toLocaleString()}</>;
};

export default Followers;
