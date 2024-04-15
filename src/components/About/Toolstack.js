import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  SiLinux,
  SiMicrosoftazure,
  SiAmazonaws,
  SiVim,
  SiDocker,
  SiGit,
  SiJupyter,
  SiGooglecolab,
} from 'react-icons/si';

function Toolstack() {
  const toolNameMap = {
    SiLinux: 'Linux',
    SiGit: 'Git',
    SiMicrosoftazure: 'Microsoft Azure',
    SiAmazonaws: 'Amazon AWS',
    SiVim: 'Vim',
    SiDocker: 'Docker',
    SiJupyter: 'Jupyter',
    SiGooglecolab: 'Google Colab',
  };
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {[
        <SiLinux />,
        <SiGit />,
        <SiMicrosoftazure />,
        <SiAmazonaws />,
        <SiVim />,
        <SiDocker />,
        <SiJupyter />,
        <SiGooglecolab />,
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
