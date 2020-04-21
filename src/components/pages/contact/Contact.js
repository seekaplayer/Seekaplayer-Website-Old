import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";
const Contact = () => {
  return (
    <div className="pageSpacing">
      <Helmet>
        <meta name="Author" content="Seekaplayer" />
        <meta
          name="keywords"
          content="Web Designer, Web Developer, Twitch Streamer, contact"
        />
        <meta name="description" content="Feel free to contact me." />
        <title>Seekaplayer | Contact</title>
      </Helmet>

      <Container>
        <Row>
          <Col className="contactHeading">
            <h1>Contact Me</h1>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={8}>
            <ContactForm />
          </Col>
          <Col md={12} lg={4} className="contactIcons">
            <ContactCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
