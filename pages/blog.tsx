import NewsLetter from '@container/NewsLetter';
import Resources from '@container/Resources';
import BlogContainer from '@container/Blog';

interface Props {}

const Blog = (props: Props) => {
  return (
    <>
      <BlogContainer />
      <NewsLetter />
      <Resources />
    </>
  );
};

export default Blog;
