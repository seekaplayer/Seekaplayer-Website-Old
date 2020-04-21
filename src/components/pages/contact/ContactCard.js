import React from "react";
import { Card, Button } from "react-bootstrap";
import { Icons } from "../../icons/Icons";
const ContactCard = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Connect with Me</Card.Title>
          <hr />
          <Card.Text>
            {Icons.map((icon) => {
              return (
                <>
                  <span>
                    <a href={icon.link} target="_blank">
                      {icon.component}
                    </a>
                  </span>
                </>
              );
            })}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ContactCard;
