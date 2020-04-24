import React, { useEffect } from "react";
import "./VideoPlayer.css";
const VideoPlayer = () => {
  const username = "seekaplayer";
  useEffect(() => {
    var options = {
      channel: username,
    };
    var player = new window.Twitch.Player("twitchPlayerJS", options);
    player.setVolume(0.5);
  }, [username]);

  return (
    <>
      <div className="twitchPlayer">
        <div id="twitchPlayerJS"></div>
      </div>
    </>
  );
};

export default VideoPlayer;
