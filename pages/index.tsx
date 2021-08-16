import Banner from 'container/Banner';
import Perk from '@container/Perk';
import Teachers from '@container/Teachers';
import Categories from 'container/Categories';
import Courses from 'container/Courses';
import Ratings from 'container/Ratings';
import Testimonials from '@container/Testimonials';

export default function Home() {
  return (
    <>
      <Banner />
      <Courses />
      <Perk />
      <Teachers />
      <Ratings />
      <Categories />
      <Testimonials />
    </>
  );
}
