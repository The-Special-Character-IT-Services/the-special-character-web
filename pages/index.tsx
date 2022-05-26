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

const Home = ({ data }) => {
  console.log('data.blogSection', data.blogSection);
  const courses = [data?.courses, data?.popularCourse];
  const blogData = [data?.blogSection, data?.blogs];
  console.log('COURSES ::::', data?.courses);

  return (
    <>
      <Banner data={data?.homeBanner} />
      <Courses data={courses} />
      <Perk data={data?.whyOurCourse} />
      <Teachers data={data?.featuredTeacher} />
      <Ratings data={data?.success} />
      <AboutEducation data={data?.aboutEducation} />
      <Divider isSectionDivider />
      <Categories data={data?.coursesCategory} />
      <Testimonials data={data?.testimonialSecion} />
      <Blog data={blogData} />
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
      data: res.data.data,
    }, // will be passed to the page component as props
  };
}

export default Home;
