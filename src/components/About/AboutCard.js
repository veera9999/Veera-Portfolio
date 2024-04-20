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
            {description.AboutDescription1}
            <br />
            <br />
            {description.AboutDescription2}
            <br />
            <br />
            {description.AboutDescription3}
            <br />
            <br />
            {description.AboutDescription4}
            <br />
            <br />
            {description.AboutDescription5}
            <br />
            <br />
            {description.AboutDescription6}
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
