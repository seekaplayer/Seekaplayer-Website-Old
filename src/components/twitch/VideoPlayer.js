import React from "react";
import TwitchEmbedVideo from "react-twitch-embed-video";

const VideoPlayer = () => {
  return (
    <>
      <TwitchEmbedVideo
        autoplay
        channel="seekaplayer"
        height="480"
        muted={false}
        targetId="twitch-embed"
        width="100%"
      />
    </>
  );
};

export default VideoPlayer;
