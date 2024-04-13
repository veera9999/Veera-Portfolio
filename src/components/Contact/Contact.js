import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Particle from '../Particle';
function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Row>
        <div style={{ padding: 50 }}></div>
      </Row>
    </Container>
  );
}

export default Experience;
