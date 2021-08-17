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
        bgColor1="#fcdf69"
        bgColor2="#f99d77"
        label="Courses"
        caption="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
          excepturi, animi autem similique voluptas reiciendis."
        position={{
          circle1: ['top', 'right'],
          circle2: ['bottom', 'left'],
        }}
      />
      <FeaturedCourse />
      <AllCourses />
    </>
  );
};

export default Courses;
