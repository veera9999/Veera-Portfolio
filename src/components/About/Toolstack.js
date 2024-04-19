import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  SiLinux,
  SiAmazonaws,
  SiDocker,
  SiGit,
  SiJupyter,
  SiGooglecolab,
  SiApachetomcat,
  SiVercel,
  SiGithub,
  SiJira,
  SiPostman,
  SiSwagger,
  SiAmazonrds,
  SiMongodb,
  SiOracle,
  SiMysql,
} from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
function Toolstack() {
  const toolNameMap = {
    SiLinux: 'Linux',
    SiGit: 'Git',
    SiAmazonaws: 'Amazon AWS',
    SiDocker: 'Docker',
    SiJupyter: 'Jupyter',
    SiGooglecolab: 'Google Colab',
    SiApachetomcat: 'Apache Tomcat',
    SiVercel: 'Vercel',
    SiGithub: 'Github',
    SiJira: 'Jira',
    SiPostman: 'Postman',
    SiSwagger: 'Swagger',
    SiAmazonrds: 'Amazon RDS',
    SiMongodb: 'MongoDB',
    SiOracle: 'Oracle',
    SiMysql: 'MySQL',
    BiLogoPostgresql: 'postgreSQL',
  };
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {[
        <SiLinux />,
        <SiGit />,
        <SiAmazonaws />,
        <SiGithub />,
        <SiDocker />,
        <SiJupyter />,
        <SiGooglecolab />,
        <SiApachetomcat />,
        <SiVercel />,
        <SiJira />,
        <SiPostman />,
        <SiSwagger />,
        <SiAmazonrds />,
        <SiMongodb />,
        <SiOracle />,
        <BiLogoPostgresql />,
        <SiMysql />,
      ].map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {tool}
          <div className="tech-icon-hover-info">
            <span>{toolNameMap[tool.type.name]}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
