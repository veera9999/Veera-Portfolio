import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiLinkExternal } from 'react-icons/bi';
import description from '../description';
import { useThemeContext } from '../../hooks/themeHook';
function ProjectCards(props) {
  const { dark } = useThemeContext();
  return (
    <Card className="project-card-view">
      <Card.Img
        className="project-card-img"
        variant="top"
        src={props.imgPath}
        alt="card-img"
      />
      <div className="card-body-wrapper">
        <Card.Body>
          <Card.Title>
            <span style={{ color: dark ? '#39d353' : '#e27720' }}>
              {props.title}
            </span>
          </Card.Title>
          <Card.Text style={{ textAlign: 'justify' }}>
            {props.description}
          </Card.Text>
        </Card.Body>
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp; {description.View}
        </Button>
      </div>
    </Card>
  );
}
export default ProjectCards;
