import NewsLetter from '@container/NewsLetter';
import Resources from '@container/Resources';
import BlogContainer from '@container/Blog';
import Header from '@components/Header';
import useRequest from 'hooks/useRequest';
import { BlogBannerTypes, SubscriptionType } from 'types';

interface Props {}

const Blog = (props: Props) => {
  const { data: blogBanner } = useRequest<BlogBannerTypes>({
    url: 'blog-banner',
  });
  const { data: newsData } = useRequest<SubscriptionType>({
    url: 'blog-subscription',
  });
  const { data: blogData } = useRequest<SubscriptionType>({
    url: 'blog-section',
  });
  const { data: allBlogData } = useRequest<string[]>({
    url: 'all-blogs',
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
      {blogData && <BlogContainer isBlog data={blogData} />}
      {newsData && <NewsLetter data={newsData} />}
      {allBlogData && <Resources data={allBlogData} />}
    </>
  );
};

export default Blog;
