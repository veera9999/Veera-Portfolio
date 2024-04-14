import React from 'react';

const ExperienceCard = ({
  title,
  duration,
  location,
  description,
}) => {
  return (
    <div className="ExperienceCardWrapper">
      <strong className="green">
        <h3>{title}</h3>
      </strong>
      <p>{duration}</p>
      <p className="experience-location">{location}</p>
      <hr />
      <pre>{description}</pre>
    </div>
  );
};

export default ExperienceCard;
