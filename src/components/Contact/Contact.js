import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
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
          alert('Message sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Container fluid className="contact-section" id="contact">
      <Container>
        <h1 className="contact-heading">
          {descriptions.ContactHeader}{' '}
          <strong className="green"> Touch </strong>
        </h1>
        <Row className="contact-main">
          <Col md={6} sm={12}>
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

          <Col md={4} className="contact-icons">
            <Container>
              <Row>
                <Col>
                  <a
                    href="https://www.linkedin.com/in/veera-palla-6097071b8/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://github.com/veera9999/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://twitter.com/VeeraPalla1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSquareXTwitter />
                  </a>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
