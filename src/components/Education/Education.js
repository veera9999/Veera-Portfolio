import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EducationFlipCard from './EducationFlipCard';
import uicdark from '../../assets/Education/uicdarklogo.svg';
import lpudark from '../../assets/Education/lpudarklogo.svg';
import uiclight from '../../assets/Education/uiclightlogo.svg';
import lpulight from '../../assets/Education/lpulightlogo.png';
import { useThemeContext } from '../../hooks/themeHook';
function Education() {
  const { dark } = useThemeContext();
  const uiclogo = dark ? uicdark : uiclight;
  const lpulogo = dark ? lpudark : lpulight;

  return (
    <Container fluid className="education-section" id="education">
      <Container>
        <h1 className="education-heading">
          My
          {'  '}
          <strong className="green">Education</strong>
        </h1>
      </Container>
      <Container>
        <Row className="justify-content-md-center">
          <Col
            md={5}
            style={{
              paddingTop: '50px',
              borderRight: `3px solid ${
                dark ? '#778899' : '#0597b1'
              }`,
            }}
          >
            <div className="d-flex justify-content-center">
              <EducationFlipCard
                imageUrl={uiclogo}
                title="Master's"
                name="University of Illinois at Chicago, USA"
                period="Aug 2022 - May 2024"
                cgpa="3.85/4.0"
                degree="Information Systems"
              />
            </div>
          </Col>

          <Col md={5} style={{ paddingTop: '50px' }}>
            <div className="d-flex justify-content-center">
              <EducationFlipCard
                imageUrl={lpulogo}
                title="Bachelor's"
                name="Lovely Professional University, India"
                period="Aug 2018 - May 2022"
                cgpa="8.25/10.0"
                degree="Computer Science"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
