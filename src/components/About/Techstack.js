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
  const toolNameMap = {
    SiCplusplus: 'C++',
    DiPython: 'Python',
    FaJava: 'Java',
    DiJavascript1: 'JavaScript',
    DiNodejs: 'Node.js',
    DiReact: 'React',
    DiMongodb: 'MongoDB',
    SiScikitlearn: 'Scikit-learn',
    SiQiskit: 'Qiskit',
    SiPytorch: 'PyTorch',
    SiTensorflow: 'TensorFlow',
    SiFirebase: 'Firebase',
    DiSpark: 'Spark',
    DiRust: 'Rust',
    SiGnubash: 'Bash',
  };

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

export default Techstack;
