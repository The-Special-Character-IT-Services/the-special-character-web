import NewsLetter from '@container/NewsLetter';
import Resources from '@container/Resources';
import BlogContainer from '@container/Blog';
import BlogFeatured from '@container/BlogFeatured';
import Header from '@components/Header';

interface Props {}

const Blog = (props: Props) => {
  return (
    <>
      <Header
        label="Blog"
        caption="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
          excepturi, animi autem similique voluptas reiciendis."
        position={{
          circle1: ['top', 'right', '#f99d77'],
          circle2: ['bottom', 'left', '#064ea4'],
        }}
      />
      <BlogFeatured />
      <NewsLetter />
      <BlogContainer />
      <Resources />
    </>
  );
};

export default Blog;
