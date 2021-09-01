import SingleCourseSection from '@container/SingleCourseSection';
import useRequest from 'hooks/useRequest';
import { useRouter } from 'next/router';
import { CourseType } from 'types';

interface Props {}

const SingleCourse = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useRequest<CourseType>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/courses/${id}`,
  });
  return <>{data && <SingleCourseSection data={data} />}</>;
};

export default SingleCourse;
