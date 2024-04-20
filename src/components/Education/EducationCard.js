import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
function EducationCard(props) {
  return (
    <Container className="education-card">
      <Row>
        <Col md={6} sm={12}>
          <h4>{props.name}</h4>
        </Col>
        <Col md={6} sm={12}>
          <p>{props.period}</p>
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={12}>
          <p>{props.degree}</p>
        </Col>
        <Col md={6} sm={12}>
          <p>CGPA: {props.cgpa}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default EducationCard;
