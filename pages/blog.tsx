import NewsLetter from '@container/NewsLetter';
import Resources from '@container/Resources';
import BlogContainer from '@container/Blog';
import Header from '@components/Header';
import useRequest from 'hooks/useRequest';
import {
  AllBlogsType,
  BlogBannerTypes,
  BlogTypes,
  SubscriptionType,
} from 'types';
import BlogQuery from '@queries/blogQuery';
import axiosInstance from 'lib/axiosInstance';

interface Props {}

const Blog = ({ allBlogData }) => {
  const blogContainer = [allBlogData?.blogSection, allBlogData?.blogs];
  // console.log('blogContainer', blogContainer);
  return (
    <>
      {allBlogData?.blogBanner && (
        <Header
          label={allBlogData?.blogBanner?.heading?.title}
          caption={allBlogData?.blogBanner?.heading?.description}
          position={{
            circle1: ['top', 'right', '#f99d77'],
            circle2: ['bottom', 'left', '#064ea4'],
          }}
        />
      )}
      {blogContainer && <BlogContainer isBlog data={blogContainer} />}
      {allBlogData && <NewsLetter data={allBlogData} />}
      {allBlogData && <Resources data={allBlogData} />}
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await axiosInstance.post('graphql', {
    query: BlogQuery,
    variables: {},
  });
  return {
    props: {
      allBlogData: res.data.data,
    },
  };
}

export default Blog;
