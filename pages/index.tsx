import Button from '@components/Button';
import Divider from '@components/Divider';
import Perk from '@container/Perk';
import Teachers from '@container/Teachers';
import Banner from 'container/Banner';
import Categories from 'container/Categories';
import Courses from 'container/Courses';
import Ratings from 'container/Ratings';

export default function Home() {
  return (
    <>
      <Banner />
      <Courses />
      <Perk />
      <Teachers />
      <Ratings />
      <Categories />
    </>
  );
}
