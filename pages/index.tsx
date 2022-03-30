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
import useRequest from 'hooks/useRequest';
import {
  BlogTypes,
  CourseCategoryType,
  EducationType,
  FeaturedTeacherType,
  HomeBannerType,
  PopularCoursesType,
  ReasonType,
  SuccessTypes,
  TestimonialTypes,
} from 'types';
import axiosInstance from '../lib/axiosInstance';
import HomeQuery from 'queries/homeQuery';

const Home = ({ webData }) => {
  console.log('website data', webData);

  const { data: educationData } = useRequest<EducationType>({
    url: 'about-education',
  });
  const { data: courseData } = useRequest<CourseCategoryType>({
    url: 'courses-category',
  });
  const { data: testimonialData } = useRequest<TestimonialTypes>({
    url: 'testimonial-section',
  });
  const { data: reasonData } = useRequest<ReasonType>({
    url: 'why-our-course',
  });
  const { data: teachersData } = useRequest<FeaturedTeacherType>({
    url: 'featured-teacher',
  });
  const { data: successData } = useRequest<SuccessTypes>({
    url: 'success',
  });
  const { data: blogData } = useRequest<BlogTypes>({
    url: 'blog-section',
  });
  return (
    <>
      {webData && <Banner data={webData} />}
      {webData && <Courses data={webData} />}
      {webData && <Perk data={webData} />}
      {webData && <Teachers data={webData} />}
      {webData && <Ratings data={webData} />}
      {webData && <AboutEducation data={webData} />}
      <Divider isSectionDivider />
      {/* this might contain an error: */}
      {webData && <Categories data={webData} />}
      {webData && <Testimonials data={webData} />}
      {webData && <Blog data={webData} />}
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await axiosInstance.post('graphql', {
    query: HomeQuery,

    variables: {},
  });

  // console.log(res.data);

  return {
    props: {
      webData: res.data.data,
    }, // will be passed to the page component as props
  };
}

export default Home;
