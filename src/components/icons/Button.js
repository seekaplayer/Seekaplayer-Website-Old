import React from "react";
import { Button } from "react-bootstrap";

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
