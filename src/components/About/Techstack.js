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
  const techStack = [
    { icon: <SiCplusplus />, name: 'C++' },
    { icon: <SiCsharp />, name: 'C#' },
    { icon: <DiPython />, name: 'Python' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <DiJavascript1 />, name: 'JavaScript' },
    { icon: <SiHtml5 />, name: 'HTML' },
    { icon: <SiCss3 />, name: 'CSS' },
    { icon: <SiBootstrap />, name: 'Bootstrap' },
    { icon: <DiNodejs />, name: 'Node.js' },
    { icon: <DiReact />, name: 'React' },
    { icon: <SiRedux />, name: 'Redux' },
    { icon: <SiExpress />, name: 'Express' },
    { icon: <SiDjango />, name: 'Django' },
    { icon: <SiFlask />, name: 'Flask' },
    { icon: <SiSpring />, name: 'Spring' },
    { icon: <SiSpringboot />, name: 'Spring Boot' },
    { icon: <SiScikitlearn />, name: 'Scikit-learn' },
    { icon: <SiPytorch />, name: 'PyTorch' },
    { icon: <DiSpark />, name: 'Spark' },
    { icon: <DiRust />, name: 'Rust' },
    { icon: <SiGnubash />, name: 'Bash' },
    { icon: <SiWebpack />, name: 'Webpack' },
    { icon: <SiBabel />, name: 'Babel' },
  ];
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {techStack.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div className="icon-images">{tech.icon}</div>
          <div className="tech-icon-hover-info">
            <span>{tech.name}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
