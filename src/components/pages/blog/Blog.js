import React from "react";
import { Helmet } from "react-helmet";
const Blog = () => {
  return (
    <>
      <Helmet>
        <meta name="Author" content="Seekaplayer" />
        <meta
          name="keywords"
          content="Web Designer, Web Developer, Twitch Streamer, Blog, Blog Post"
        />
        <meta
          name="description"
          content="Feel free to check out my Blog Post"
        />
        <title>Seekaplayer | Blog Listing</title>
      </Helmet>
      <h1>Blog Page</h1>

      <p>This is the Blog page</p>
    </>
  );
};

export default Blog;
