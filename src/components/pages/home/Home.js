import React from "react";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <>
      <Helmet>
        <meta name="Author" content="Seekaplayer" />
        <meta
          name="keywords"
          content="Web Designer, Web Developer, Twitch Streamer"
        />
        <meta
          name="description"
          content="My name is Seekaplayer and I'm a Web Designer/Developer. I also stream on Twitch.tv"
        />
        <title>Seekaplayer | Home</title>
      </Helmet>
      <h1>Homepage</h1>
      <p>This is the homepage!</p>
    </>
  );
};

export default Home;
