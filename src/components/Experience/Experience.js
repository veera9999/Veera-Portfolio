import React from 'react';
import { Container } from 'react-bootstrap';
import Particle from '../Particle';
import descriptions from '../description';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdDataExploration } from 'react-icons/md';
import { MdOutlineDeveloperMode } from 'react-icons/md';
import { useThemeContext } from '../../hooks/themeHook';

function Experience() {
  const { dark } = useThemeContext();

  return (
    <Container fluid className="experience-section" id="experience">
      <Particle />
      <Container>
        <h1 className="experience-heading">
          {descriptions.ProjHeader}{' '}
          <strong className="green">{descriptions.Experience}</strong>
        </h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work experience-card"
            contentStyle={{
              background: 'rgba(255, 255, 255, 0.2)',
              color: '#fff',
              border: '2px solid #26a641',
              borderRadius: '8px',
              padding: '2rem',
              paddingTop: '4em',
            }}
            contentArrowStyle={{ borderRight: '7px solid #00b894' }}
            date="September 2021 – July 2022"
            iconStyle={{
              background: '#006d32',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              fontWeight: 'bold',
            }}
            icon={
              <span>
                <MdOutlineDeveloperMode />
              </span>
            }
          >
            <div className="main-experience">
              <h3 className="vertical-timeline-element-title">
                Software Engineer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Sein Technologies, Chennai, India
              </h4>
            </div>
            <hr />
            <div className="experience-description">
              <p>
                • Developed applications with Core Java, Maven, Spring
                MVC, implementing multi-threading and RESTful APIs.
              </p>
              <p>
                • Tested applications for end-to-end test cases with
                JUnit and Swagger and resolved over 100 bugs.
              </p>
              <p>
                • Elevated application security by implementing user
                authentication using Spring Security & JWT, resulting
                in 2X security.
              </p>
              <p>
                • Implemented mapping of relational databases to Java
                objects with Ibatis and Hibernate.
              </p>
              <p>
                • Leveraged AWS EC2, S3, API Gateway and RDS for
                scalable application deployment, reducing deployment
                time by 40%.
              </p>
              <p>
                • Streamlined CI/CD process using AWS Code Pipeline
                and Git Desktop, enabling faster time-to-market for
                new features.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work experience-card"
            contentStyle={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#fff',
              border: '2px solid #26a641',
              borderRadius: '8px',
              padding: '2rem',
            }}
            contentArrowStyle={{ borderRight: '7px solid #00b894' }}
            date="August 2020 – June 2021"
            iconStyle={{
              background: '#006d32',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              fontWeight: 'bold',
            }}
            icon={
              <span>
                <MdDataExploration />
              </span>
            }
          >
            <div className="main-experience">
              <h3 className="vertical-timeline-element-title">
                Data Scientist Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Lending kart Finance Private Limited, Bangalore, India
              </h4>
            </div>
            <hr />
            <div className="experience-description">
              <p>
                • Leveraged AWS Athena, Redshift and Excel (macros and
                query functions) to analyze large datasets (100K+
                records), providing strategic insights.
              </p>
              <p>
                • Generated regular analysis reports for facilitating
                key business decisions while working in collections
                team.
              </p>
              <p>
                • Performed data preprocessing and cleaning with
                Python and R, enhancing data quality by 25%.
              </p>
              <p>
                • Built Tableau dashboards for visualization & KPI
                metrics evaluation, leading to 20% increase in debt
                recovery.
              </p>
              <p>
                • Collaborated with teams to develop and refine
                machine learning models with Python in AWS Sage Maker
                to predict customer bounce rates and loan defaults,
                increasing prediction accuracy from 74% to 85%.
              </p>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </Container>
  );
}

export default Experience;