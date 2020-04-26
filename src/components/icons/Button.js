import React from "react";
import { Button } from "react-bootstrap";
import "./Button.css";

const CustomButton = ({ className, text }) => {
  return (
    <>
      <Button className={className} variant="link">
        {text}
      </Button>
    </>
  );
};

export default CustomButton;
