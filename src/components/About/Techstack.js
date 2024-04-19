import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiRust,
  DiSpark,
} from 'react-icons/di';
import {
  SiCplusplus,
  SiPytorch,
  SiHtml5,
  SiQiskit,
  SiScikitlearn,
  SiGnubash,
  SiCsharp,
  SiKotlin,
  SiDjango,
  SiSpring,
  SiSpringboot,
  SiExpress,
  SiFlask,
  SiCss3,
  SiRedux,
  SiWebpack,
  SiBabel,
} from 'react-icons/si';

import { FaJava } from 'react-icons/fa';

function Techstack() {
  const toolNameMap = {
    SiCplusplus: 'C++',
    DiPython: 'Python',
    SiKotlin: 'Kotlin',
    FaJava: 'Java',
    DiJavascript1: 'JavaScript',
    DiNodejs: 'Node.js',
    DiReact: 'React',
    SiScikitlearn: 'Scikit-learn',
    SiQiskit: 'Qiskit',
    SiPytorch: 'PyTorch',
    DiSpark: 'Spark',
    DiRust: 'Rust',
    SiGnubash: 'Bash',
    SiCsharp: 'C#',
    SiHtml5: 'HTML',
    SiDjango: 'Django',
    SiSpring: 'Spring',
    SiSpringboot: 'Springboot',
    SiExpress: 'Express',
    SiFlask: 'Flask',
    SiCss3: 'CSS',
    SiRedux: 'Redux',
    SiWebpack: 'Webpack',
    SiBabel: 'Babel',
  };

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {[
        <SiCplusplus />,
        <SiKotlin />,
        <SiCsharp />,
        <DiPython />,
        <FaJava />,
        <DiJavascript1 />,
        <SiHtml5 />,
        <SiCss3 />,
        <DiNodejs />,
        <DiReact />,
        <SiRedux />,
        <SiExpress />,
        <SiDjango />,
        <SiFlask />,
        <SiSpring />,
        <SiSpringboot />,
        <SiScikitlearn />,
        <SiQiskit />,
        <SiPytorch />,
        <DiSpark />,
        <DiRust />,
        <SiGnubash />,
        <SiWebpack />,
        <SiBabel />,
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
