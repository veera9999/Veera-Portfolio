import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import descriptions from '../description';
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Container fluid className="contact-section" id="contact">
      <Container>
        <h1 className="experience-heading">
          {descriptions.ContactHeader}{' '}
          <strong className="green"> Touch </strong>
        </h1>

        <Row>
          <Col md={6}>
            <Form>
              <Form.Group controlId="formName">
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6} className="social-icons">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
