import React from "react";
import { Card } from "react-bootstrap";
import CustomButton from "../icons/Button";
import "./Projects.css";
const Projects = ({ path, title, text, url }) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={path} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <a href={url} target="_blank">
            <CustomButton className="portfolioBtn" text="Visit Project" />
          </a>
        </Card.Body>
      </Card>
    </>
  );
};

export default Projects;
