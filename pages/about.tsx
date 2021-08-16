import AbtMission from '@container/AbtMission';
import Blog from '@container/Blog';
import Values from '@container/Values';
import React from 'react';

interface Props {}

const About = (props: Props) => {
  return (
    <div>
      <AbtMission />
      <Values />
      <Blog />
    </div>
  );
};

export default About;
