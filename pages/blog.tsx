import NewsLetter from '@container/NewsLetter';
import Resources from '@container/Resources';
import BlogContainer from '@container/Blog';
import Header from '@components/Header';
import useRequest from 'hooks/useRequest';

interface Props {}

const Blog = (props: Props) => {
  const { data: blogBanner } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/blog-banner`,
  });
  const { data: newsData } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/blog-subscription`,
  });
  const { data: allBlogData } = useRequest<string[]>({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/all-blogs`,
  });
  return (
    <>
      {blogBanner && (
        <Header
          label={blogBanner.heading.title}
          caption={blogBanner.heading.description}
          position={{
            circle1: ['top', 'right', '#f99d77'],
            circle2: ['bottom', 'left', '#064ea4'],
          }}
        />
      )}
      <BlogContainer isBlog />
      {newsData && <NewsLetter data={newsData} />}
      {allBlogData && <Resources data={allBlogData} />}
    </>
  );
};

export default Blog;
