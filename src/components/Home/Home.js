import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
/*import home5 from '../../assets/home5.svg';
import home6 from '../../assets/home6.svg';*/
import veera from '../../assets/veera_home.jpg';
import About from '../About/About';
import Particle from '../Particle';
import Type from './Type';
import description from '../description';
import HomeSocial from './HomeSocial';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
/*import { useThemeContext } from '../../hooks/themeHook';*/

function Home() {
  /*const { dark } = useThemeContext();*/

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
            </Col>
            <Col md={5}>
              <img src={veera} alt="home pic" className="img-home" />
            </Col>
          </Row>
        </Container>
      </Container>
      <HomeSocial />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </section>
  );
}

export default Home;
