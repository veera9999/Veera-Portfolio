import React from 'react';
import { Row, Col } from 'react-bootstrap';
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
  SiScikitlearn,
  SiGnubash,
  SiCsharp,
  SiDjango,
  SiSpring,
  SiSpringboot,
  SiExpress,
  SiFlask,
  SiCss3,
  SiRedux,
  SiWebpack,
  SiBabel,
  SiBootstrap,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

function Techstack() {
  const toolNameMap = {
    SiCplusplus: 'C++',
    SiCsharp: 'C#',
    DiPython: 'Python',
    FaJava: 'Java',
    DiJavascript1: 'JavaScript',
    DiNodejs: 'Node.js',
    DiReact: 'React',
    SiScikitlearn: 'Scikit-learn',
    SiPytorch: 'PyTorch',
    DiSpark: 'Spark',
    DiRust: 'Rust',
    SiGnubash: 'Bash',
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
    SiBootstrap: 'Bootstrap',
  };

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {[
        <SiCplusplus />,
        <SiCsharp />,
        <DiPython />,
        <FaJava />,
        <DiJavascript1 />,
        <SiHtml5 />,
        <SiCss3 />,
        <SiBootstrap />,
        <DiNodejs />,
        <DiReact />,
        <SiRedux />,
        <SiExpress />,
        <SiDjango />,
        <SiFlask />,
        <SiSpring />,
        <SiSpringboot />,
        <SiScikitlearn />,
        <SiPytorch />,
        <DiSpark />,
        <DiRust />,
        <SiGnubash />,
        <SiWebpack />,
        <SiBabel />,
      ].map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div className="icon-images">{tool}</div>
          <div className="tech-icon-hover-info hover">
            <span>{toolNameMap[tool.type.name]}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
