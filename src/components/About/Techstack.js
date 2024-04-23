import React from 'react';
import htmlIcon from '../assets/Particles/html-icon.svg';
import cssIcon from '../assets/Particles/css-icon.svg';
import jsIcon from '../assets/Particles/js-icon.svg';
import nodeIcon from '../assets/Particles/node-icon.svg';
import reactIcon from '../assets/Particles/react-icon.svg';
import boostrapIcon from '../assets/Particles/bootstrap-icon.svg';
import javaIcon from '../assets/Particles/java.svg';
import cSharp from '../assets/Particles/cSharp.svg';
import aws from '../assets/Particles/aws.svg';
import mysql from '../assets/Particles/mysql-icon.svg';
import linux from '../assets/Particles/linux.svg';
import kubernetes from '../assets/Particles/kubernetes.svg';
import docker from '../assets/Particles/docker.svg';
import babel2 from '../assets/Particles/babel2.svg';
import django from '../assets/Particles/django.svg';
import flask from '../assets/Particles/flask.svg';
import git from '../assets/Particles/git.svg';
import jira from '../assets/Particles/jira.svg';
import maven from '../assets/Particles/maven.svg';
import oracle from '../assets/Particles/oracle.svg';
import postgresql from '../assets/Particles/postgresql.svg';
import postman from '../assets/Particles/postman.svg';
import redux from '../assets/Particles/redux.svg';
import swagger from '../assets/Particles/swagger.svg';
import tomcat from '../assets/Particles/tomcat.svg';
import webpack from '../assets/Particles/webpack.svg';
import github from '../assets/Particles/github.svg';
import vscode from '../assets/Particles/vscode-icon.svg';
import python from '../assets/Particles/pythonLogo.svg';

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
  SiBootstrap,
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
    SiBootstrap: 'Bootstrap',
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
