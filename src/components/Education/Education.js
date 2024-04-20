import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EducationCard from './EducationCard';
function Education() {
  return (
    <Container fluid className="education-section" id="education">
      <Container>
        <h1 className="education-heading">
          My
          {'  '}
          <strong className="green">Education</strong>
        </h1>
        <p className="text">What I have studied</p>
        <Row>
          <Col md={12} sm={12} style={{ paddingTop: '50px' }}>
            <EducationCard
              name="University of Illinois at Chicago, USA"
              period="Aug 2022 - May 2024"
              cgpa="3.85/4.0"
              degree="Master of Science in Management Information Systems"
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12} style={{ paddingTop: '50px' }}>
            <EducationCard
              name="Lovely Professional University, India"
              period="Aug 2018 - May 2022"
              cgpa="8.25/10.0"
              degree="Bachelor of Technology in Computer Science"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
