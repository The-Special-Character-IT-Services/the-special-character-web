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

  const { data: reasonData } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}why-our-course`,
  });
  const { data: teachersData } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}featured-teacher`,
  });
  const { data: successData } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}success`,
  });
  const { data: blogData } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}blog-section`,
  });
  return (
    <>
      {bannerData && <Banner data={bannerData} />}
      {coursesData && <Courses data={coursesData} />}
      {educationData && <AboutEducation data={educationData} />}
      {courseData && <Categories data={courseData} />}
      {testimonialData && <Testimonials data={testimonialData} />}
      {reasonData && <Perk data={reasonData} />}
      {teachersData && <Teachers data={teachersData} />}
      {successData && <Ratings data={successData} />}
      {blogData && <Blog data={blogData} />}
    </>
  );
}
