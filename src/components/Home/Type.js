import React from "react";
import Typewriter from "typewriter-effect";

function Type() {

  return (
    <Typewriter
      options={{
        strings: [
          'Full Stack Developer',
          'Data Analyst / Data Scientist',
          'Machine Learning Enthusiast', 
          'Open-Source Contributor',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
