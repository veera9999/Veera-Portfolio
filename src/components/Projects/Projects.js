import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import SyncVibe from '../../assets/Projects/SyncVibe.png';
import Netflix from '../../assets/Projects/Netflix.jpeg';
import portfolio from '../../assets/Projects/portfolio.png';
import hms from '../../assets/Projects/HMS.jpg';
import Skywest from '../../assets/Projects/Skywest.jpg';
import bestbuy from '../../assets/Projects/BestBuy.jpg';
import TaskNinja from '../../assets/Projects/TaskNinja.png';
import bksapp from '../../assets/Projects/bksapp.png';
import descriptions from '../description';

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
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
              link="https://github.com/veera9999/REACT-DJANGO"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TaskNinja}
              title="Task Ninja"
              description={descriptions.Proj7}
              link="https://project-management-tool-e76n.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bksapp}
              title="Book Search App"
              description={descriptions.Proj8}
              link="https://veera9999.github.io/Book-Search-App--Typescript/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bestbuy}
              title="E-commerce Website"
              description={descriptions.Proj6}
              link="https://github.com/veera9999/BestBuy2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hms}
              isBlog={false}
              title="HMS"
              description={descriptions.Proj5}
              link="https://github.com/veera9999/HMSWEB"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Netflix Data Analysis"
              description={descriptions.Proj2}
              link="https://github.com/veera9999/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Skywest}
              isBlog={false}
              title="Skywest Airlines Analysis"
              description={descriptions.Proj3}
              link="https://github.com/veera9999/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title={descriptions.ThisWebsite}
              description={descriptions.Proj4}
              link="https://github.com/veera9999/Veera-Portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
