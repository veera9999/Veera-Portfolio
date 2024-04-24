import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import BtnToggleTheme from './BtnTottleTheme';
import { Col, Row } from 'react-bootstrap';
import description from './description';
import logolight from '../assets/veeralogolight.png';
import logodark from '../assets/veeralogodark.png';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { PiStudentFill } from 'react-icons/pi';
import { MdWorkHistory } from 'react-icons/md';
import { IoMdContact } from 'react-icons/io';
import { useThemeContext } from '../hooks/themeHook';

function NavBar() {
  const { dark } = useThemeContext();
  const [expand, updateExpanded] = useState(false);
  const logo = dark ? logodark : logolight;
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      updateExpanded(false);
    }
  };
  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className="sticky"
    >
      <Navbar.Brand
        style={{ borderRadius: '10px' }}
        className="navLogo"
      >
        <Nav.Link
          as={Link}
          to="#"
          onClick={() => scrollToSection('home')}
        >
          <img
            style={{
              borderRadius: '50px',
            }}
            src={logo}
            width="40"
            height="40"
            alt="React Bootstrap logo"
          />
        </Nav.Link>
      </Navbar.Brand>

      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : 'expanded');
        }}
      >
        <span />
        <span />
        <span />
      </Navbar.Toggle>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto" defaultActiveKey="#home">
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="#"
              onClick={() => scrollToSection('home')}
            >
              <AiOutlineHome style={{ marginBottom: '3px' }} /> Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="#"
              onClick={() => scrollToSection('about')}
            >
              <AiOutlineUser style={{ marginBottom: '3px' }} />{' '}
              {description.About}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="#"
              onClick={() => scrollToSection('education')}
            >
              <PiStudentFill style={{ marginBottom: '3px' }} />{' '}
              Education
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="#"
              onClick={() => scrollToSection('projects')}
            >
              <AiOutlineFundProjectionScreen
                style={{ marginBottom: '3px' }}
              />{' '}
              {description.Projects}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="#"
              onClick={() => scrollToSection('experience')}
            >
              <MdWorkHistory style={{ marginBottom: '3px' }} />{' '}
              {description.Experience}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="#"
              onClick={() => scrollToSection('contact')}
            >
              <IoMdContact style={{ marginBottom: '3px' }} />{' '}
              {description.Contact}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>

      {!expand && (
        <Row>
          <Col className="col-sm-4">
            <BtnToggleTheme />
          </Col>
        </Row>
      )}
    </Navbar>
  );
}

export default NavBar;
