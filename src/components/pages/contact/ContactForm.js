import React from "react";
import { Form, Button } from "react-bootstrap";

import "./Contact.css";
const ContactForm = () => {
  return (
    <>
      <Form className="contactForm">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" placeholder="Enter Phone" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Subject</Form.Label>
          <Form.Control as="select" className="contactSelect">
            <option value="General">General</option>
            <option value="Hire Me">Hire Me</option>
            <option value="Partnership/Sponsorship">
              Partnership/Sponsorship
            </option>
            <option value="Other">Other</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows="8" />
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
