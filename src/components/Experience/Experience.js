import React from 'react';
import { Container } from 'react-bootstrap';
import descriptions from '../description';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdDataExploration } from 'react-icons/md';
import { MdOutlineDeveloperMode } from 'react-icons/md';
import { useThemeContext } from '../../hooks/themeHook';
import { FaJava } from 'react-icons/fa6';
import { HiDocumentReport } from 'react-icons/hi';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { PiStudentFill } from 'react-icons/pi';
import { GrWorkshop, GrTechnology } from 'react-icons/gr';
import { VscOrganization } from 'react-icons/vsc';
import { BsPeopleFill } from 'react-icons/bs';

import {
  SiSwagger,
  SiSpringsecurity,
  SiHibernate,
  SiAmazonaws,
  SiGit,
  SiMicrosoftexcel,
  SiPython,
  SiTableau,
  SiHackerrank,
} from 'react-icons/si';
function Experience() {
  const { dark } = useThemeContext();

  return (
    <Container fluid className="experience-section" id="experience">
      <Container>
        <h1 className="experience-heading">
          {descriptions.ProjHeader}
          {'  '}
          <strong className="green">{descriptions.Experience}</strong>
        </h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work experience-card"
            contentStyle={{
              background: 'inherit',
              color: dark ? '#0ad0f3' : '#6002ad',
              border: `3px solid ${dark ? '#0ad0f3' : '#0ad0f3'}`,
              borderRadius: '20px',
              padding: '1rem',
              paddingTop: '1em',
            }}
            contentArrowStyle={{
              borderRight: `15px solid ${
                dark ? '#0ad0f3' : '#0ad0f3'
              }`,
            }}
            date="January 2024 – May 2024"
            iconStyle={{
              background: `${dark ? '#0ad0f3' : '#0ad0f3'}`,
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              paddingTop: '10px',
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
                Software Developer (Apprenticeship)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Luminari CRO, Remote, USA
              </h4>
            </div>
            <span></span>
            <hr />
            <div className="experience-description">
              <p>
                <FaJava
                  style={{ color: dark ? '#00d9ffe1' : '#e27720' }}
                />{' '}
                {''} Fine-tuned the LLama2 model using transformers
                and LangChain, enhancing its performance and accuracy
                with specific datasets.
              </p>
              <p>
                <SiSwagger
                  style={{ color: dark ? '#00d9ffe1' : '#e27720' }}
                />
                {'  '} Developed a responsive website with Python,
                Django and React, integrating the LLama2 model to
                provide dynamic functionality.
              </p>
              <p>
                <SiSpringsecurity
                  style={{ color: dark ? '#00d9ffe1' : '#e27720' }}
                />{' '}
                Utilized AWS SageMaker for efficient model training
                and deployment, ensuring scalable and reliable
                performance.
              </p>

              <p>
                <SiAmazonaws
                  style={{ color: dark ? '#00d9ffe1' : '#e27720' }}
                />{' '}
                Managed datasets using AWS S3, ensuring secure and
                organized storage for seamless data access and
                management.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work experience-card"
            contentStyle={{
              background: 'inherit',
              color: dark ? '#0ad0f3' : '#6002ad',
              border: `3px solid ${dark ? '#0ad0f3' : '#0ad0f3'}`,
              borderRadius: '20px',
              padding: '1rem',
              paddingTop: '1em',
            }}
            contentArrowStyle={{
              borderRight: `15px solid ${
                dark ? '#0ad0f3' : '#0ad0f3'
              }`,
            }}
            date="January 2023 – June 2023"
            iconStyle={{
              background: `${dark ? '#0ad0f3' : '#0ad0f3'}`,
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              paddingTop: '10px',
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
                Graduate Student Aide <br />
                (Software Developer)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Discovery Partner's Institute, Chicago, USA
              </h4>
            </div>
            <span></span>
            <hr />
            <div className="experience-description">
              <p>
                <FaJava
                  style={{ color: dark ? '#00d9ffe1' : '#e27720' }}
                />{' '}
                {''} Designed & developed Learning Management System
                (LMS) website for students, ensuring usability and
                inclusivity.
              </p>
              <p>
                <SiSwagger
                  style={{ color: dark ? '#00d9ffe1' : '#e27720' }}
                />
                {'  '} Implemented front-end using React to create an
                intuitive and responsive user interface, providing a
                seamless user experience.
              </p>
              <p>
                <SiSpringsecurity
                  style={{ color: dark ? '#00d9ffe1' : '#e27720' }}
                />{' '}
                Engineered back-end with Java and Spring to manage
                data efficiently and ensure robust performance and
                scalability.
              </p>

              <p>
                <SiAmazonaws
                  style={{ color: dark ? '#00d9ffe1' : '#e27720' }}
                />{' '}
                Collaborated with diverse team to integrate
                accessibility features, enhancing the educational
                experience for all users.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work experience-card"
            contentStyle={{
              background: 'inherit',
              color: dark ? '#0ad0f3' : '#6002ad',
              border: `3px solid ${dark ? '#0ad0f3' : '#0ad0f3'}`,
              borderRadius: '20px',
              padding: '1rem',
              paddingTop: '1em',
            }}
            contentArrowStyle={{
              borderRight: `15px solid ${
                dark ? '#0ad0f3' : '#0ad0f3'
              }`,
            }}
            date="August 2021 – July 2022"
            iconStyle={{
              background: `${dark ? '#0ad0f3' : '#0ad0f3'}`,
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              paddingTop: '10px',
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
                Software Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Sein Technologies, Chennai, India
              </h4>
            </div>
            <span></span>
            <hr />
            <div className="experience-description">
              <p>
                <FaJava
                  style={{ color: dark ? '#00d9ffe1' : '#e27720' }}
                />{' '}
                {''}Developed applications with Core Java, Maven,
                Spring MVC, implementing multi-threading and RESTful
                APIs.
              </p>
              <p>
                <SiSwagger
                  style={{ color: dark ? '#00d9ffe1' : '#e27720' }}
                />
                {'  '}
                Tested applications for end-to-end test cases with
                JUnit and Swagger and resolved over 100 bugs.
              </p>
              <p>
                <SiSpringsecurity
                  style={{ color: dark ? '#00d9ffe1' : '#e27720' }}
                />{' '}
                Elevated application security by implementing user
                authentication using Spring Security & JWT, resulting
                in 2X security.
              </p>
              <p>
                <SiHibernate
                  style={{ color: dark ? '#00d9ffe1' : '#e27720' }}
                />{' '}
                Implemented mapping of relational databases to Java
                objects with Ibatis and Hibernate.
              </p>
              <p>
                <SiAmazonaws
                  style={{ color: dark ? '#00d9ffe1' : '#e27720' }}
                />{' '}
                Leveraged AWS EC2, S3, API Gateway and RDS for
                scalable application deployment, reducing deployment
                time by 40%.
              </p>
              <p>
                <SiGit
                  style={{ color: dark ? '#00d9ffe1' : '#e27720' }}
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
              background: 'inherit',
              color: dark ? '#0ad0f3' : '#6002ad',
              border: `3px solid ${dark ? '#0ad0f3' : '#0ad0f3'}`,
              borderRadius: '20px',
              padding: '1rem',
              paddingTop: '1em',
            }}
            contentArrowStyle={{
              borderRight: `15px solid ${
                dark ? '#0ad0f3' : '#0ad0f3'
              }`,
            }}
            date="September 2020 – July 2021"
            iconStyle={{
              background: `${dark ? '#0ad0f3' : '#0ad0f3'}`,
              color: '#ffffff',
              display: 'flex',
              paddingTop: '10px',
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
                <SiMicrosoftexcel
                  style={{ color: dark ? '#00d9ffe1' : '#e27720' }}
                />{' '}
                Leveraged AWS Athena, Redshift and Excel (macros and
                query functions) to analyze large datasets (100K+
                records), providing strategic insights.
              </p>
              <p>
                <HiDocumentReport
                  style={{ color: dark ? '#00d9ffe1' : '#e27720' }}
                />{' '}
                Generated regular analysis reports for facilitating
                key business decisions while working in collections
                team.
              </p>
              <p>
                <SiPython
                  hCheckFill
                  style={{ color: dark ? '#00d9ffe1' : '#e27720' }}
                />{' '}
                Performed data preprocessing and cleaning with Python
                and R, enhancing data quality by 25%.
              </p>
              <p>
                <SiTableau
                  style={{ color: dark ? '#00d9ffe1' : '#e27720' }}
                />{' '}
                Built Tableau dashboards for visualization & KPI
                metrics evaluation, leading to 20% increase in debt
                recovery.
              </p>
              <p>
                <GiArtificialIntelligence
                  style={{ color: dark ? '#00d9ffe1' : '#e27720' }}
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
              background: 'inherit',
              color: dark ? '#0ad0f3' : '#6002ad',
              border: `3px solid ${dark ? '#0ad0f3' : '#0ad0f3'}`,
              borderRadius: '20px',
              padding: '1rem',
              paddingTop: '1em',
            }}
            contentArrowStyle={{
              borderRight: `15px solid ${
                dark ? '#0ad0f3' : '#0ad0f3'
              }`,
            }}
            date="August 2018 – July 2022"
            iconStyle={{
              background: `${dark ? '#0ad0f3' : '#0ad0f3'}`,
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              paddingTop: '10px',
              justifyContent: 'center',
              fontSize: '2rem',
              fontWeight: 'bold',
            }}
            icon={
              <span>
                <GrTechnology />
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
                <PiStudentFill
                  style={{ color: dark ? '#00d9ffe1' : '#e27720' }}
                />
                {'  '}
                XNerves is a student-led technical club dedicated to
                nurturing and enhancing the coding proficiency of its
                members through a multifaceted approach.
              </p>
              <p>
                <GrWorkshop
                  style={{ color: dark ? '#00d9ffe1' : '#e27720' }}
                />{' '}
                Conducted comprehensive technical workshops and guest
                lectures to impart valuable knowledge and foster the
                skill development of students.
              </p>
              <p>
                <SiHackerrank
                  style={{ color: dark ? '#00d9ffe1' : '#e27720' }}
                />{' '}
                Organized coding hackathons that promote healthy
                competition among participants, cultivating a spirit
                of collaboration and innovation.
              </p>
              <p>
                <VscOrganization
                  style={{ color: dark ? '#00d9ffe1' : '#e27720' }}
                />{' '}
                Fostered a vibrant and inclusive community of
                like-minded individuals, where knowledge-sharing,
                peer-to-peer learning, and mentorship opportunities
                are actively encouraged.
              </p>
              <p>
                <BsPeopleFill
                  style={{ color: dark ? '#00d9ffe1' : '#e27720' }}
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
