import React from "react";
import { Card } from "react-bootstrap";

const Projects = ({ path, title, text }) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={path} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Projects;
