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
import { BsPatchCheckFill } from 'react-icons/bs';

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
              background: dark
                ? 'rgba(255, 255, 255,0)'
                : 'rgba(0, 0, 0,0)',
              color: dark ? '#39d353' : '#6002ad',
              border: `3px solid ${dark ? '#006d32' : '#9f53d1'}`,
              borderRadius: '20px',
              padding: '1rem',
              paddingTop: '1em',
            }}
            contentArrowStyle={{
              borderRight: `15px solid ${
                dark ? '#006d32' : '#9f53d1'
              }`,
            }}
            date="September 2021 – July 2022"
            iconStyle={{
              background: dark ? '#006d32' : '#6002ad',
              color: '#ffffff',
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
            <span></span>
            <hr />
            <div className="experience-description">
              <p>
                <BsPatchCheckFill
                  style={{ color: dark ? '#26a641' : '#6002ad' }}
                />{' '}
                {''}Developed applications with Core Java, Maven,
                Spring MVC, implementing multi-threading and RESTful
                APIs.
              </p>
              <p>
                <BsPatchCheckFill
                  style={{ color: dark ? '#26a641' : '#6002ad' }}
                />{' '}
                Tested applications for end-to-end test cases with
                JUnit and Swagger and resolved over 100 bugs.
              </p>
              <p>
                <BsPatchCheckFill
                  style={{ color: dark ? '#26a641' : '#6002ad' }}
                />{' '}
                Elevated application security by implementing user
                authentication using Spring Security & JWT, resulting
                in 2X security.
              </p>
              <p>
                <BsPatchCheckFill
                  style={{ color: dark ? '#26a641' : '#6002ad' }}
                />{' '}
                Implemented mapping of relational databases to Java
                objects with Ibatis and Hibernate.
              </p>
              <p>
                <BsPatchCheckFill
                  style={{ color: dark ? '#26a641' : '#6002ad' }}
                />{' '}
                Leveraged AWS EC2, S3, API Gateway and RDS for
                scalable application deployment, reducing deployment
                time by 40%.
              </p>
              <p>
                <BsPatchCheckFill
                  style={{ color: dark ? '#26a641' : '#6002ad' }}
                />{' '}
                Streamlined CI/CD process using AWS Code Pipeline and
                Git Desktop, enabling faster time-to-market for new
                features.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work experience-card"
            contentStyle={{
              background: dark
                ? 'rgba(255, 255, 255,0)'
                : 'rgba(0, 0, 0,0)',
              color: dark ? '#39d353' : '#6002ad',
              border: `3px solid ${dark ? '#006d32' : '#9f53d1'}`,
              borderRadius: '20px',
              padding: '1rem',
              paddingTop: '1em',
            }}
            contentArrowStyle={{
              borderRight: `15px solid ${
                dark ? '#006d32' : '#9f53d1'
              }`,
            }}
            date="September 2021 – July 2022"
            iconStyle={{
              background: dark ? '#006d32' : '#6002ad',
              color: '#ffffff',
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
            <span></span>
            <hr />
            <div className="experience-description">
              <p>
                <BsPatchCheckFill
                  style={{ color: dark ? '#26a641' : '#6002ad' }}
                />{' '}
                Leveraged AWS Athena, Redshift and Excel (macros and
                query functions) to analyze large datasets (100K+
                records), providing strategic insights.
              </p>
              <p>
                <BsPatchCheckFill
                  style={{ color: dark ? '#26a641' : '#6002ad' }}
                />{' '}
                Generated regular analysis reports for facilitating
                key business decisions while working in collections
                team.
              </p>
              <p>
                <BsPatchCheckFill
                  style={{ color: dark ? '#26a641' : '#6002ad' }}
                />{' '}
                Performed data preprocessing and cleaning with Python
                and R, enhancing data quality by 25%.
              </p>
              <p>
                <BsPatchCheckFill
                  style={{ color: dark ? '#26a641' : '#6002ad' }}
                />{' '}
                Built Tableau dashboards for visualization & KPI
                metrics evaluation, leading to 20% increase in debt
                recovery.
              </p>
              <p>
                <BsPatchCheckFill
                  style={{ color: dark ? '#26a641' : '#6002ad' }}
                />{' '}
                Collaborated with teams to develop and refine machine
                learning models with Python in AWS Sage Maker to
                predict customer bounce rates and loan defaults,
                increasing prediction accuracy from 74% to 85%.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work experience-card"
            contentStyle={{
              background: dark
                ? 'rgba(255, 255, 255,0)'
                : 'rgba(0, 0, 0,0)',
              color: dark ? '#39d353' : '#f54500',
              border: `3px solid ${dark ? '#006d32' : '#f54500'}`,
              borderRadius: '20px',
              padding: '1rem',
              paddingTop: '1em',
            }}
            contentArrowStyle={{
              borderRight: `15px solid ${
                dark ? '#006d32' : '#f54500'
              }`,
            }}
            date="September 2021 – July 2022"
            iconStyle={{
              background: dark ? '#006d32' : '#f54500',
              color: '#ffffff',
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
                Student Club President
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                XNerves, Punjab, India
              </h4>
            </div>
            <span></span>
            <hr />
            <div className="experience-description">
              <p>
                <BsPatchCheckFill
                  style={{ color: dark ? '#26a641' : '#6002ad' }}
                />
                {'  '}
                XNerves is a student-led technical club dedicated to
                nurturing and enhancing the coding proficiency of its
                members through a multifaceted approach.
              </p>
              <p>
                <BsPatchCheckFill
                  style={{ color: dark ? '#26a641' : '#6002ad' }}
                />{' '}
                Conducted comprehensive technical workshops and guest
                lectures to impart valuable knowledge and foster the
                skill development of students.
              </p>
              <p>
                <BsPatchCheckFill
                  style={{ color: dark ? '#26a641' : '#6002ad' }}
                />{' '}
                Organized coding hackathons that promote healthy
                competition among participants, cultivating a spirit
                of collaboration and innovation.
              </p>
              <p>
                <BsPatchCheckFill
                  style={{ color: dark ? '#26a641' : '#6002ad' }}
                />{' '}
                Fostered a vibrant and inclusive community of
                like-minded individuals, where knowledge-sharing,
                peer-to-peer learning, and mentorship opportunities
                are actively encouraged.
              </p>
              <p>
                <BsPatchCheckFill
                  style={{ color: dark ? '#26a641' : '#6002ad' }}
                />{' '}
                Organized networking events, facilitating connections
                between students and professionals, and providing a
                platform for members to gain insights into diverse
                career paths and industries.
              </p>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </Container>
  );
}

export default Experience;
