import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import home5 from '../../assets/home5.svg';
import home6 from '../../assets/home6.svg';
import About from '../About/About';
import Particle from '../Particle';
import Type from './Type';
import description from '../description';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
import { useThemeContext } from '../../hooks/themeHook';

function Home() {
  const { dark } = useThemeContext();

  const homeLogo = dark ? home5 : home6;

  const handleResumeClick = () => {
    window.open('../../assets/Veera_resume_DD.pdf', '_blank');
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

              <Button
                className="resume-button"
                variant="primary"
                onClick={handleResumeClick}
              >
                View Resume
              </Button>
            </Col>

            <Col md={5} style={{ paddingTop: '120px' }}>
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
