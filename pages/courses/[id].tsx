import SingleCourseSection from '@container/SingleCourseSection';
import useRequest from 'hooks/useRequest';

interface Props {}

const SingleCourse = (props: Props) => {
  const { data } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/courses/1`,
  });
  return <>{data && <SingleCourseSection data={data} />}</>;
};

export default SingleCourse;
