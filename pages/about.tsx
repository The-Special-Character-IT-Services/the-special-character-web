import AboutBanner from '@container/AboutBanner';
import AboutEducation from '@container/AboutEducation';
import AboutTeachers from '@container/AboutTeachers';
import AbtMission from '@container/AbtMission';
import Map from '@container/Map';
import Ratings from '@container/Ratings';
import Success from '@container/Success';
import TimelineSection from '@container/TimelineSection';
import Values from '@container/Values';

interface Props {}

const About = (props: Props) => {
  return (
    <>
      <AboutBanner />
      <Success />
      <AbtMission />
      <Values />
      <AbtMission />
      <AboutTeachers />
      <TimelineSection />
      <Map />
    </>
  );
};

export default About;
