import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Particle from '../Particle';
import descriptions from '../description';
function Experience() {
  return (
    <Container fluid className="contact-section" id="contact">
      <Particle />
      <Container>
        <h1 className="experience-heading">
          {descriptions.ContactHeader}{' '}
          <strong className="green"> Touch </strong>
        </h1>
      </Container>
    </Container>
  );
}

export default Experience;
