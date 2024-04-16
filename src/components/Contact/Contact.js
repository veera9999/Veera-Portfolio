import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';
import descriptions from '../description';
import emailjs from '@emailjs/browser';
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_f11qcd8', 'template_6d5emjb', form.current, {
        publicKey: 'tlt_veAa0s0pOSSaq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <Container fluid className="contact-section" id="contact">
      <Container>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <h1 className="contact-heading">
            {descriptions.ContactHeader}{' '}
            <strong className="green"> Touch </strong>
          </h1>
        </ScrollAnimation>
        <Row className="contact-main">
          <Col md={6}>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group controlId="formName">
                <Form.Control
                  className="contact-form"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  name="user_name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Control
                  className="contact-form"
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Control
                  className="contact-form"
                  as="textarea"
                  rows={3}
                  placeholder="Message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                value="Send"
                style={{ padding: '10px' }}
              >
                Submit
              </Button>
            </Form>
          </Col>

          <Col md={6} className="contact-icons">
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
