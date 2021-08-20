import Banner from 'container/Banner';
import AboutEducation from 'container/AboutEducation';
import Button from '@components/Button';
import Divider from '@components/Divider';
import Perk from '@container/Perk';
import Teachers from '@container/Teachers';
import Categories from 'container/Categories';
import Courses from 'container/Courses';
import Ratings from 'container/Ratings';
import Blog from '@container/Blog';
import Testimonials from '@container/Testimonials';
import useBanner from 'hooks/useBanner';
import useRequest from 'hooks/useRequest';

export default function Home() {
  const { data: bannerData } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}home-banner`,
  });
  const { data: coursesData } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}popular-courses`,
  });
  const { data: educationData } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}about-education`,
  });
  const { data: courseData } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}courses-category`,
  });
  const { data: testimonialData } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}testimonial-section`,
  });

  return (
    <>
      {bannerData && <Banner data={bannerData} />}
      {coursesData && <Courses data={coursesData} />}
      <Perk />
      <Teachers />
      <Ratings />
      <Blog />
      {educationData && <AboutEducation data={educationData} />}
      {courseData && <Categories data={courseData} />}
      {testimonialData && <Testimonials data={testimonialData} />}
    </>
  );
}
