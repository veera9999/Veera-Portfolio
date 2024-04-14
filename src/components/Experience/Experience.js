import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import sedin from '../../assets/sedin.svg';
import Lendingkart from '../../assets/lendingkart.svg';
import Type from './Type';
import laptopImg from '../../assets/about.svg';
import { FaHandPointRight } from 'react-icons/fa';
import ExperienceCard from './ExperienceCard';
import descriptions from '../description';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';

const ExperienceDescription = styled.pre`
  display: flex;
  flex-direction: column;
  text-align: left;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0;
`;

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="experience-heading">
          {descriptions.ProjHeader}{' '}
          <strong className="green">{descriptions.Experience}</strong>
        </h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#fff',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgba(255, 255, 255, 0.1)',
            }}
            date="September 2021 – July 2022"
            iconStyle={{ background: '#00b894', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Sein Technologies, Chennai, India
            </h4>
            <ExperienceDescription>
              • Developed applications with Core Java, Maven, Spring
              MVC, implementing multi-threading and RESTful APIs.
              <br />
              • Tested applications for end-to-end test cases with
              JUnit and Swagger and resolved over 100 bugs.
              <br />
              • Elevated application security by implementing user
              authentication using Spring Security & JWT, resulting in
              2X security.
              <br />
              • Implemented mapping of relational databases to Java
              objects with Ibatis and Hibernate.
              <br />
              • Leveraged AWS EC2, S3, API Gateway and RDS for
              scalable application deployment, reducing deployment
              time by 40%.
              <br />• Streamlined CI/CD process using AWS Code
              Pipeline and Git Desktop, enabling faster time-to-market
              for new features.
            </ExperienceDescription>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#fff',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgba(255, 255, 255, 0.1)',
            }}
            date="August 2020 – June 2021"
            iconStyle={{ background: '#00b894', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">
              Data Analyst/ Data Scientist Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Lending kart Finance Private Limited, Bangalore, India
            </h4>
            <ExperienceDescription>
              • Leveraged AWS Athena, Redshift and Excel (macros and
              query functions) to analyze large datasets (100K+
              records), providing strategic insights.
              <br />
              • Generated regular analysis reports for facilitating
              key business decisions while working in collections
              team.
              <br />
              • Performed data preprocessing and cleaning with Python
              and R, enhancing data quality by 25%.
              <br />
              • Built Tableau dashboards for visualization & KPI
              metrics evaluation, leading to 20% increase in debt
              recovery.
              <br />• Collaborated with teams to develop and refine
              machine learning models with Python in AWS Sage Maker to
              predict customer bounce rates and loan defaults,
              increasing prediction accuracy from 74% to 85%.
            </ExperienceDescription>
          </VerticalTimelineElement>
          {/* Add more VerticalTimelineElement components for other experiences */}
        </VerticalTimeline>
      </Container>
    </Container>
  );
}
/*function Experience() { 
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
          <Col md={6}>
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
          <Col
            md={6}
            style={{ paddingTop: '600px', paddingBottom: '50px' }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <Row style={{ paddingTop: 50 }}>
          <Col md={6}>
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
}*/

export default Experience;
