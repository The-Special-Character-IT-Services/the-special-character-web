import NewsLetter from '@container/NewsLetter';
import Resources from '@container/Resources';

interface Props {}

const Blog = (props: Props) => {
  return (
    <>
      <NewsLetter />
      <Resources />
    </>
  );
};

export default Blog;
