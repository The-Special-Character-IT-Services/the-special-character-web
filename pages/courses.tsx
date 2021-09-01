import Header from '@components/Header';
import Typography from '@components/Typography';
import AllCourses from '@container/AllCourses';
import FeaturedCourse from '@container/FeaturedCourse';
import useRequest from 'hooks/useRequest';
import { AllCourseTypes, CourseBannerTypes } from 'types';

interface Props {}

const Courses = (props: Props) => {
  const { data: courseBanner } = useRequest<CourseBannerTypes>({
    url: 'course-banner',
  });
  const { data: allCourseData } = useRequest<AllCourseTypes>({
    url: 'all-courses',
  });
  return (
    <>
      {courseBanner && (
        <>
          <Header
            label={courseBanner.heading.title}
            caption={courseBanner.heading.description}
            position={{
              circle1: ['top', 'right', '#fcdf69'],
              circle2: ['bottom', 'left', '#f99d77'],
            }}
          />
          <FeaturedCourse data={courseBanner} />
        </>
      )}
      {allCourseData && <AllCourses data={allCourseData} />}
    </>
  );
};

export default Courses;
