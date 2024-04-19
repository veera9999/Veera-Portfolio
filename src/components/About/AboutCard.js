import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaHandPointRight } from 'react-icons/fa';
import description from '../description';
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            {description.Greeting} {description.Im}{' '}
            <span className="green">Veera Palla</span>,{' '}
            {description.MLE} {description.IWorkAt}{' '}
            <span className="green">{description.Company}</span>{' '}
            {description.CompanyLocation}.
            <br />
            {description.IHoldDegree1}{' '}
            <span className="green">
              Management Information Systems
            </span>{' '}
            {description.School1} {description.And}{' '}
            <span className="green">
              Computer Science and Engineering
            </span>{' '}
            {description.School2}.
            <br />
            <br />
            {description.Interests}
          </p>
          <ul>
            <li className="about-activity">
              <FaHandPointRight /> Web Development
            </li>
            <li className="about-activity">
              <FaHandPointRight /> System Design and Architecture
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Generative AI and LLM's
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Machine Learning
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Cloud Computing
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
