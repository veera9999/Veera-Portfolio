import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiRust,
  DiSpark,
} from 'react-icons/di';
import {
  SiCplusplus,
  SiPytorch,
  SiTensorflow,
  SiFirebase,
  SiQiskit,
  SiScikitlearn,
  SiGnubash,
} from 'react-icons/si';

import { FaJava } from 'react-icons/fa';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {[
        <SiCplusplus />,
        <DiPython />,
        <FaJava />,
        <DiJavascript1 />,
        <DiNodejs />,
        <DiReact />,
        <DiMongodb />,
        <SiScikitlearn />,
        <SiQiskit />,
        <SiPytorch />,
        <SiTensorflow />,
        <SiFirebase />,
        <DiSpark />,
        <DiRust />,
        <SiGnubash />,
      ].map((tool) => (
        <Col xs={4} md={2} className="tech-icons">
          {tool}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
