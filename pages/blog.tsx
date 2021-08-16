import NewsLetter from '@container/NewsLetter';
import Resources from '@container/Resources';
import BlogContainer from '@container/Blog';
import BlogFeatured from '@container/BlogFeatured';

interface Props {}

const Blog = (props: Props) => {
  return (
    <>
      <BlogFeatured />
      <NewsLetter />
      <BlogContainer />
      <Resources />
    </>
  );
};

export default Blog;
