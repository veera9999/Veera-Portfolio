import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Particle from '../Particle';
import sedin from '../../assets/sedin.svg';
import Lendingkart from '../../assets/lendingkart.svg';
import Type from './Type';
import ControlledCarousel from './ExperienceCarousel';
import descriptions from '../description';
function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="experience-heading">
          {descriptions.ProjHeader}{' '}
          <strong className="green">
            {descriptions.Experience}{' '}
          </strong>
        </h1>
        <Row
          className="experience-carousel"
          style={{ justifyContent: 'center', padding: '10px' }}
        >
          <ControlledCarousel imgpath={sedin} />
        </Row>
        <Row
          className="experience-carousel"
          style={{ justifyContent: 'center', padding: '10px' }}
        >
          <ControlledCarousel imgpath={Lendingkart} />
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
