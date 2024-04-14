import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import sedin from '../../assets/sedin.svg';
import Lendingkart from '../../assets/lendingkart.svg';
import Type from './Type';
import ExperienceCard from './ExperienceCard';
import descriptions from '../description';
function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="experience-heading">
          {descriptions.ProjHeader}{' '}
          <strong className="green">
            {descriptions.Experience}{' '}
          </strong>
        </h1>

        <Row style={{ paddingTop: 50 }}>
          <Col md={12}>
            <ExperienceCard
              title="Software Engineer Intern"
              duration="Sep 2021 – Jul 2022"
              location={'Sein Technologies, Chennai, India'}
              description={
                '• Developed applications with Core Java, Maven, Spring MVC, implementing multi-threading and RESTful APIs.\n' +
                '\n' +
                '• Tested applications for end-to-end test cases with JUnit and Swagger and resolved over 100 bugs.\n' +
                '\n' +
                '• Elevated application security by implementing user authentication using Spring Security & JWT, resulting in 2X security.\n' +
                '\n' +
                '• Implemented mapping of relational databases to Java objects with Ibatis and Hibernate.\n' +
                '\n' +
                '• Leveraged AWS EC2, S3, API Gateway and RDS for scalable application deployment, reducing deployment time by 40%.\n' +
                '\n' +
                '• Streamlined CI/CD process using AWS Code Pipeline and Git Desktop, enabling faster time-to-market for new features.'
              }
            />
          </Col>
        </Row>

        <Row style={{ paddingTop: 50 }}>
          <Col md={12}>
            <ExperienceCard
              title="Data Analyst / Data Scientist Intern"
              duration="August 2020 – June 2021 "
              location={
                'Lendingkart Technologies PVT LTD, Bangalore, India'
              }
              description={
                '• Leveraged AWS Athena, Redshift and Excel (macros and query functions) to analyze large datasets (100K+ records), providing strategic insights.\n' +
                '\n' +
                '• Generated regular analysis reports for facilitating key business decisions while working in collections team.\n' +
                '\n' +
                '• Performed data preprocessing and cleaning with Python and R, enhancing data quality by 25%.\n' +
                '\n' +
                '• Implemented mapping of relational databases to Java objects with Ibatis and Hibernate.\n' +
                '\n' +
                '• Built Tableau dashboards for visualization & KPI metrics evaluation, leading to 20% increase in debt recovery.\n' +
                '\n' +
                '• Collaborated with teams to develop and refine machine learning models with Python in AWS Sage Maker to predict customer bounce rates and loan defaults, increasing prediction accuracy from 74% to 85%. '
              }
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
