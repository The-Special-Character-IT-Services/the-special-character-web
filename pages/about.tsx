import AboutBanner from '@container/AboutBanner';
import AboutEducation from '@container/AboutEducation';
import AboutTeachers from '@container/AboutTeachers';
import AbtMission from '@container/AbtMission';
import Ratings from '@container/Ratings';
import Success from '@container/Success';
import Values from '@container/Values';

interface Props {}

const About = (props: Props) => {
  return (
    <>
      <AboutBanner />
      <Success />
      <AbtMission />
      <Values />
      <AboutTeachers />
    </>
  );
};

export default About;
