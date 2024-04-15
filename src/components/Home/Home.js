import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import homeLogo from '../../assets/home.svg';
import About from '../About/About';
import Particle from '../Particle';
import Type from './Type';
import description from '../description';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';

function Home() {
  const resumeLink = '../../assets/Veera_resume_DD.pdf';
  const handleResumeClick = () => {
    window.open(resumeLink, '_blank');
  };
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {description.Greeting}{' '}
                <span
                  className="wave"
                  role="img"
                  aria-labelledby="wave"
                >
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                {description.Im}
                <strong className="main-name"> Veera Palla</strong>
              </h1>

              <div style={{ padding: 50, textAlign: 'left' }}>
                <Type />
              </div>
              <div
                style={{
                  position: 'relative',
                  paddingTop: '80px',
                  bottom: '20px',
                  left: '60px',
                  zIndex: 1,
                }}
              >
                <Button variant="primary" onClick={handleResumeClick}>
                  View Resume
                </Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingTop: 150 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
      <Projects />
      <Experience />
      <Contact />
    </section>
  );
}

export default Home;