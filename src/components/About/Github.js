import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Row } from 'react-bootstrap';
import { useThemeContext } from '../../hooks/themeHook';

function Github() {
  const { dark } = useThemeContext();

  // personalized colors for the
  // contributions calendar
  const colourTheme = dark
    ? // colors for the dark theme
      {
        background: 'transparent',
        text: '#ffffff',
        level4: '#00c3fff8',
        level3: '#008db8',
        level2: '#0597b1',
        level1: '#19879b',
        level0: '#161b22',
      }
    : // colors for the white theme
      {
        background: 'transparent',
        level4: '#008caf',
        level3: '#3eb1ce',
        level2: '#6de0fd',
        level1: '#cbf5ff',
        level0: '#ebedf0',
      };

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '40px' }}>
      <h1
        className="project-heading"
        style={{ paddingBottom: '20px' }}
      >
        <strong className="green">Github</strong> Activity
      </h1>

      <GitHubCalendar
        username="veera9999"
        blockSize={16}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
