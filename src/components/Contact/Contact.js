import React, { useRef } from 'react';
import { Container, Row ,Col} from 'react-bootstrap';
import descriptions from '../description';
import emailjs from '@emailjs/browser';
function Contact() {
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
        <h1 className="experience-heading">
          {descriptions.ContactHeader}{' '}
          <strong className="green"> Touch </strong>
        </h1>
      </Container>
      <Container className='contact-form'>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
        <Row>
          <Col md = {8} >
            
          </Col>
          <Col md ={4}>

          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Contact;
