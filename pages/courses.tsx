import Header from '@components/Header';
import Typography from '@components/Typography';
import AllCourses from '@container/AllCourses';
import FeaturedCourse from '@container/FeaturedCourse';

interface Props {
  props: JSX.Element;
}

const Courses = (props: Props) => {
  return (
    <>
      <Header
        label="Courses"
        caption="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
          excepturi, animi autem similique voluptas reiciendis."
        position={{
          circle1: ['top', 'left', '#fcdf69'],
          circle2: ['bottom', 'right', '#f99d77'],
        }}
      />
      <FeaturedCourse />
      <AllCourses />
    </>
  );
};

export default Courses;
