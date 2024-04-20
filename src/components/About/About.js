import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import Github from './Github';
import Techstack from './Techstack';
import Aboutcard from './AboutCard';
import about from '../../assets/about.svg';
import about5 from '../../assets/about5.svg';
import Toolstack from './Toolstack';
import description from '../description';
import Education from '../Education/Education';
import { useThemeContext } from '../../hooks/themeHook';

function About() {
  const { dark } = useThemeContext();
  const laptopImg = dark ? about : about5;
  return (
    <Container fluid className="about-section" id="about">
      <Particle />
      <Container>
        <Container fluid className="about-card">
          <Row style={{ padding: '10px' }}>
            <Col
              md={8}
              sm={12}
              style={{
                paddingTop: '30px',
                paddingBottom: '50px',
              }}
            >
              <h1
                style={{
                  fontSize: '2.3em',
                  paddingBottom: '20px',
                }}
              >
                {description.AboutHeader}{' '}
                <strong className="green">Me</strong>
              </h1>
              <div>
                <Aboutcard />
              </div>
            </Col>
            <Col
              md={4}
              sm={12}
              style={{
                paddingTop: '150px',
                paddingBottom: '50px',
                paddingLeft: '30px',
              }}
              className="about-img"
            >
              <img
                src={laptopImg}
                alt="about"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
        <Education />
        <div style={{ paddingTop: '180px' }}>
          <h1 className="project-heading">
            <strong className="green">
              {description.Languages}{' '}
            </strong>
            {description.And}{' '}
            <strong className="green">
              {description.Frameworks}{' '}
            </strong>{' '}
            {description.IUse}
          </h1>
        </div>
        <div
          style={{
            paddingTop: '30px',
          }}
        >
          <Techstack />
        </div>
        <div style={{ paddingTop: '180px' }}>
          <h1 className="project-heading">
            <strong className="green">Tools</strong>{' '}
            {description.IUse}
          </h1>
        </div>
        <div
          style={{
            paddingTop: '30px',
            paddingBottom: '100px',
          }}
        >
          <Toolstack />
        </div>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
