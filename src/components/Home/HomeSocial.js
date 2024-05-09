import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import resumeFile from './resume.pdf';
import { AiFillGithub, AiFillMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function HomeSocial() {
  const handleOpenResume = () => {
    window.open(resumeFile, '_blank'); // Open resume in a new window
  };

  return (
    <section style={{ paddingTop: '120px' }}>
      <Container fluid>
        <Container>
          <Row>
            <Col md={6} className="home-social">
              <Button variant="primary" onClick={handleOpenResume}>
                View Resume
              </Button>
            </Col>
            <Col md={6} className="home-social">
              <ul>
                <li className="home-social-icons">
                  <a
                    className="footer-social-icons"
                    href="https://github.com/veera9999"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="home-social-icons">
                  <a
                    className="footer-social-icons"
                    href="https://www.linkedin.com/in/veera-palla-6097071b8/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="home-social-icons">
                  <a
                    className="footer-social-icons"
                    href="mailto:veera.palla919@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillMail />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default HomeSocial;
