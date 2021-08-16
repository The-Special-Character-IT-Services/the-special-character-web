import AbtMission from '@container/AbtMission';
import Map from '@container/Map';
import Values from '@container/Values';

interface Props {}

const About = (props: Props) => {
  return (
    <>
      <AbtMission />
      <Values />
      <Map />
    </>
  );
};

export default About;
