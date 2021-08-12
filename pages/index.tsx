import AboutEducation from 'container/AboutEducation';
import Banner from 'container/Banner';
import Courses from 'container/Courses';
import Ratings from 'container/Ratings';

export default function Home() {
  return (
    <>
      <Banner />
      <Courses />
      <Ratings />
      <AboutEducation />
    </>
  );
}
