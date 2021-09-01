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
  CourseCategoryType,
  EducationType,
  FeaturedTeacherType,
  HomeBannerType,
  PopularCoursesType,
  ReasonType,
  SuccessTypes,
  TestimonialTypes,
} from 'types';

export default function Home() {
  const { data: bannerData } = useRequest<HomeBannerType>({
    url: 'home-banner',
  });
  const { data: coursesData } = useRequest<PopularCoursesType>({
    url: 'popular-courses',
  });
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
  const { data: blogData } = useRequest<string[]>({
    url: 'blog-section',
  });
  return (
    <>
      {bannerData && <Banner data={bannerData} />}
      {coursesData && <Courses data={coursesData} />}
      {reasonData && <Perk data={reasonData} />}
      {teachersData && <Teachers data={teachersData} />}
      {successData && <Ratings data={successData} />}
      {educationData && <AboutEducation data={educationData} />}
      {courseData && <Categories data={courseData} />}
      {testimonialData && <Testimonials data={testimonialData} />}
      {blogData && <Blog data={blogData} />}
    </>
  );
}
