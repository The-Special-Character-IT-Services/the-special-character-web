import Footer from '@components/Footer';
import Banner from 'container/Banner';
import Categories from 'container/Categories';
import Courses from 'container/Courses';
import Ratings from 'container/Ratings';

export default function Home() {
  return (
    <>
      <Banner />
      <Courses />
      <Ratings />
      <Categories />
      <Footer />
    </>
  );
}
