import SingleCourseSection from '@container/SingleCourseSection';
import useRequest from 'hooks/useRequest';

interface Props {}

const SingleCourse = (props: Props) => {
  const id =
    typeof window !== 'undefined' ? window.location.pathname.slice(1) : '';
  const { data } = useRequest<string[]>({
    url: id && `${process.env.NEXT_PUBLIC_API_BASE_URL}/${id}`,
    params: { id },
  });
  return <>{data && <SingleCourseSection data={data} />}</>;
};

export default SingleCourse;
