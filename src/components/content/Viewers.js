import React, { useEffect, useState } from "react";
import { TwitchGetViewers } from "../libs/Twitch";

const Viewers = () => {
  const [viewers, setViewers] = useState(0);
  useEffect(() => {
    TwitchGetViewers()
      .then((views) => {
        setViewers(views);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <>{viewers.toLocaleString()}</>;
};

export default Viewers;
