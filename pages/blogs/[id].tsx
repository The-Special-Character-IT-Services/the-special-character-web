import IndividualBlog from '@container/IndividualBlog';
import useMarkdown from 'hooks/useMarkdown';
import useRequest from 'hooks/useRequest';
import { useRouter } from 'next/router';

interface Props {}

const SingleBlog = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useRequest({
    url: `blogs/${id}`,
  });
  // const { HTML } = useMarkdown(data.content);
  // console.log(HTML);

  return <div>{data && <IndividualBlog data={data} />}</div>;
};

export default SingleBlog;
