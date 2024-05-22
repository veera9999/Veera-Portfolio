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
  const toolStack = [
    { icon: <SiLinux />, name: 'Linux' },
    { icon: <SiGit />, name: 'Git' },
    { icon: <SiAmazonaws />, name: 'Amazon AWS' },
    { icon: <SiGithub />, name: 'Github' },
    { icon: <SiDocker />, name: 'Docker' },
    { icon: <SiJupyter />, name: 'Jupyter' },
    { icon: <SiGooglecolab />, name: 'Google Colab' },
    { icon: <SiApachetomcat />, name: 'Apache Tomcat' },
    { icon: <SiVercel />, name: 'Vercel' },
    { icon: <SiJira />, name: 'Jira' },
    { icon: <SiPostman />, name: 'Postman' },
    { icon: <SiSwagger />, name: 'Swagger' },
    { icon: <SiAmazonrds />, name: 'Amazon RDS' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiOracle />, name: 'Oracle' },
    { icon: <BiLogoPostgresql />, name: 'PostgreSQL' },
    { icon: <SiMysql />, name: 'MySQL' },
  ];
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {toolStack.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div className="icon-images">{tool.icon}</div>
          <div className="tech-icon-hover-info">
            <span>{tool.name}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
