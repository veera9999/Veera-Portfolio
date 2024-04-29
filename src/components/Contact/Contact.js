import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
/*import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';*/
import descriptions from '../description';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
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
          <Col md={6} sm={12} className="form-body">
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
                Send Message
              </Button>
            </Form>
          </Col>
          <Col md={5} className="d-flex justify-content-center">
            <Container className="contact-icons">
              <Row>
                <Col ms={12}>
                  <article className="contact__option">
                    <MdOutlineEmail className="contact__option-icon" />
                    <h5 style={{ paddingTop: '1rem' }}>Email</h5>
                    <h5>veera.palla919@gmail.com</h5>
                    <a
                      href="mailto:veera.palla919@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Send a message
                    </a>
                  </article>
                </Col>
                <Col md={12}>
                  <article className="contact__option">
                    <BsWhatsapp className="contact__option-icon" />
                    <h5 style={{ paddingTop: '1rem' }}>Whatsapp</h5>
                    <h5>+1 (847)542 6690</h5>
                    <a
                      href="https://api.whatsapp.com/send?phone=8475426690"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Send a message
                    </a>
                  </article>
                </Col>
                <Col md={12}>
                  <article className="contact__option">
                    <RiMessengerLine className="contact__option-icon" />
                    <h5 style={{ paddingTop: '1rem' }}>Messenger</h5>
                    <h5>veera Palla</h5>
                    <a
                      href="https://api.whatsapp.com/send?phone=8475426690"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Send a message
                    </a>
                  </article>
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
