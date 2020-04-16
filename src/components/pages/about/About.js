import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <meta name="Author" content="Seekaplayer" />
        <meta
          name="keywords"
          content="Web Designer, Web Developer, Twitch Streamer"
        />
        <meta name="description" content="You can learn more about who I am." />
        <title>Seekaplayer | About</title>
      </Helmet>
      <h1>About Page</h1>

      <p>This is the about page</p>
    </>
  );
};

export default About;
