import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaHandPointRight } from 'react-icons/fa';
import description from '../description';
import { useThemeContext } from '../../hooks/themeHook';
function AboutCard() {
  const { dark } = useThemeContext();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote>
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
            {description.Interests}
          </p>
          <ul>
            <li className="about-activity">
              <FaHandPointRight
                style={{ color: dark ? '#00c3fff8' : '#9f53d1' }}
              />{' '}
              Web Development
            </li>
            <li className="about-activity">
              <FaHandPointRight
                style={{ color: dark ? '#00c3fff8' : '#9f53d1' }}
              />{' '}
              System Design and Architecture
            </li>
            <li className="about-activity">
              <FaHandPointRight
                style={{ color: dark ? '#00c3fff8' : '#9f53d1' }}
              />{' '}
              Generative AI and LLM's
            </li>
            <li className="about-activity">
              <FaHandPointRight
                style={{ color: dark ? '#00c3fff8' : '#9f53d1' }}
              />{' '}
              Machine Learning
            </li>
            <li className="about-activity">
              <FaHandPointRight
                style={{ color: dark ? '#00c3fff8' : '#9f53d1' }}
              />{' '}
              Cloud Computing
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
