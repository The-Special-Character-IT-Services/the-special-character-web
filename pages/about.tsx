import AbtMission from '@container/AbtMission';
import Values from '@container/Values';
import React from 'react';

interface Props {}

const About = (props: Props) => {
  return (
    <div>
      <AbtMission />
      <Values />
    </div>
  );
};

export default About;
