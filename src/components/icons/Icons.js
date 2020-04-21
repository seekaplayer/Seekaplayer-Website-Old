import React from "react";
import MdHeart from "react-ionicons/lib/MdHeart";
import LogoTwitch from "react-ionicons/lib/LogoTwitch";
import LogoGithub from "react-ionicons/lib/LogoGithub";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";
import LogoInstagram from "react-ionicons/lib/LogoInstagram";
import LogoYouTube from "react-ionicons/lib/LogoYoutube";
import LogoFacebook from "react-ionicons/lib/LogoFacebook";

export const Icons = [
  {
    component: <LogoTwitch fontSize="2em" />,
    link: "https://twitch.tv/seekaplayer",
  },
  {
    component: <LogoGithub fontSize="2em" />,
    link: "https://github.com/seekaplayer",
  },
  {
    component: <LogoTwitter fontSize="2em" />,
    link: "https://twitter.com/seekaplayer",
  },
  {
    component: <LogoInstagram fontSize="2em" />,
    link: "https://instagram.com/seekaplayer_",
  },
  {
    component: <LogoYouTube fontSize="2em" />,
    link: "https://youtube.com/seekaplayer",
  },
  {
    component: <LogoFacebook fontSize="2em" />,
    link: "https://facebook.com/seekaplayer",
  },
];
export const HeartIcon = ({ fontSize, color, beat }) => {
  return <MdHeart fontSize={fontSize} color={color} beat={beat} />;
};
