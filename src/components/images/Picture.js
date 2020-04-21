import React from "react";
import { Image } from "react-bootstrap";
import "./Images.css";

const Picture = ({ src, alt, className }) => {
  return (
    <>
      <Image src={src} alt={alt} className={className} roundedCircle />
    </>
  );
};

export default Picture;
