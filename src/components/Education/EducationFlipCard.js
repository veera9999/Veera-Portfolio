import React from 'react';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

function EducationFlipCard(props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Card.Img variant="top" src={props.imageUrl} />
        </div>
        <div className="flip-card-back">
          <Card.Body>
            <Card.Title>
              <p>{props.title}</p>
            </Card.Title>
            <hr />
            <Card.Text>
              <Col md={12}>
                <p style={{ fontSize: '1.2em' }}>{props.name}</p>
              </Col>
              <Col md={12}>
                <p style={{ textAlign: 'justify' }}>{props.period}</p>
              </Col>
              <Col md={12}>
                <p style={{ textAlign: 'justify' }}>
                  Major: {props.degree}
                </p>
              </Col>
              <Col md={12}>
                <p style={{ textAlign: 'justify' }}>
                  CGPA: {props.cgpa}
                </p>
              </Col>
            </Card.Text>
          </Card.Body>
        </div>
      </div>
    </div>
  );
}

export default EducationFlipCard;
