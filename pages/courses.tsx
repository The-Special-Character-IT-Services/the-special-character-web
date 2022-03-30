import Header from '@components/Header';
import Typography from '@components/Typography';
import AllCourses from '@container/AllCourses';
import FeaturedCourse from '@container/FeaturedCourse';
import CoursesQuery from '@queries/coursesQuery';
import useRequest from 'hooks/useRequest';
import axiosInstance from 'lib/axiosInstance';
import { AllCourseTypes, CourseBannerTypes } from 'types';

interface Props {}

const Courses = ({ coursesData }) => {
  // console.log('All courses data:', props);

  // const { data: courseBanner } = useRequest<CourseBannerTypes>({
  //   url: 'course-banner',
  // });
  // const { data: allCourseData } = useRequest<AllCourseTypes>({
  //   url: 'all-courses',
  // });
  console.log('coursesData from courses.tsx', coursesData);

  return (
    <>
      {coursesData?.courseBanner && (
        <>
          <Header
            label={coursesData?.courseBanner?.heading?.title}
            caption={coursesData?.courseBanner?.heading?.description}
            position={{
              circle1: ['top', 'right', '#fcdf69'],
              circle2: ['bottom', 'left', '#f99d77'],
            }}
          />
          <FeaturedCourse data={coursesData} />
        </>
      )}
      {coursesData && <AllCourses data={coursesData} />}
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await axiosInstance.post('graphql', {
    query: CoursesQuery,

    variables: {},
  });

  return {
    props: {
      coursesData: res.data.data,
    },
  };
}

export default Courses;
