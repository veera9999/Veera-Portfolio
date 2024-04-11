import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import SyncVibe from '../../assets/Projects/SyncVibe.png';
import Netflix from '../../assets/Projects/Netflix.jpeg';
import portfolio from '../../assets/Projects/portfolio.png';
import pandasai from '../../assets/Projects/pandas-ai.png';
import Skywest from '../../assets/Projects/Skywest.jpg';
import diffusers from '../../assets/Projects/diffusers.jpg';
import descriptions from '../description';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {descriptions.ProjHeader}{' '}
          <strong className="green">{descriptions.Works} </strong>
        </h1>
        <p className="text">{descriptions.ProjSubtitle}</p>

        <Row
          style={{ justifyContent: 'center', paddingBottom: '10px' }}
        >
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SyncVibe}
              title="SyncVibe"
              description={descriptions.Proj1}
              link="https://github.com/LaurentMazare/diffusers-rs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Netflix Data Analysis"
              description={descriptions.Proj2}
              link="https://github.com/mspronesti/baylib"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pandasai}
              isBlog={false}
              title="Pandas AI"
              description={descriptions.Proj5}
              link="https://github.com/gventuri/pandas-ai"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Skywest}
              isBlog={false}
              title="Skywest Airlines Performance Analysis"
              description={descriptions.Proj3}
              link="https://github.com/mspronesti/qlearnkit"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title={descriptions.ThisWebsite}
              description={descriptions.Proj4}
              link="https://github.com/mspronesti/mspronesti.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diffusers}
              title="Diffusers-rs"
              description={descriptions.Proj1}
              link="https://github.com/LaurentMazare/diffusers-rs"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
