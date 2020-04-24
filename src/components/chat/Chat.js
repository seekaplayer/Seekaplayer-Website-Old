import React from "react";

const Chat = () => {
  return (
    <iframe
      frameborder="0"
      scrolling="no"
      id="chat_embed"
      src="https://www.twitch.tv/embed/hebo/chat?parent=streamernews.example.com"
      height="410"
      width="100%"
    ></iframe>
  );
};

export default Chat;
