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
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/home-banner`,
  });
  const { data: coursesData } = useRequest<PopularCoursesType>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/popular-courses`,
  });
  const { data: educationData } = useRequest<EducationType>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/about-education`,
  });
  const { data: courseData } = useRequest<CourseCategoryType>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/courses-category`,
  });
  const { data: testimonialData } = useRequest<TestimonialTypes>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/testimonial-section`,
  });

  const { data: reasonData } = useRequest<ReasonType>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/why-our-course`,
  });
  const { data: teachersData } = useRequest<FeaturedTeacherType>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/featured-teacher`,
  });
  const { data: successData } = useRequest<SuccessTypes>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/success`,
  });
  const { data: blogData } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/blog-section`,
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
