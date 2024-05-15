import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import resumeFile from './resume.pdf';
import { AiFillGithub, AiFillMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function HomeSocial() {
  const handleOpenResume = () => {
    console.log('Attempting to open resume...');
    window.open(resumeFile, '_blank'); // Open resume in a new window
  };

  const handleOpenGmail = () => {
    const email = 'veera.palla919@gmail.com';
    const subject = encodeURIComponent('Subject Here'); // You can customize the subject if needed
    const body = encodeURIComponent('Body Here'); // You can customize the body if needed
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`,
      '_blank',
    );
  };

  return (
    <section
      style={{ paddingTop: '120px' }}
      className="home-social-section"
    >
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
                    onClick={() => console.log('GitHub link clicked')}
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
                    onClick={() =>
                      console.log('LinkedIn link clicked')
                    }
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="home-social-icons">
                  <a
                    className="footer-social-icons"
                    href="gmailto:veera.palla919@gmail.com"
                    onClick={handleOpenGmail}
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
