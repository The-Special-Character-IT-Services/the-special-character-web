import Header from '@components/Header';
import Typography from '@components/Typography';
import FeaturedCourse from '@container/FeaturedCourse';

interface Props {
  props: JSX.Element;
}

const Courses = (props: Props) => {
  return (
    <>
      <Header label="Courses" isCourse>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
          excepturi, animi autem similique voluptas reiciendis.
        </Typography>
      </Header>
      <FeaturedCourse />
    </>
  );
};

export default Courses;
