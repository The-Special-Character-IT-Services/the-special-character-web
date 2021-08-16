import React from 'react';

interface Props {}

const BlogFeatured = (props: Props) => {
  return (
    <section className="blog-featured">
      <div className="container">{/* harsh code here */}</div>
      <style jsx>{`
        @import './styles/variables.scss';
        .blog-featured {
          padding-top: 190px;
          padding-bottom: 126px;
        }
        .container {
          max-width: 1209px;
          margin-right: auto;
          margin-left: auto;
          padding-right: 24px;
          padding-left: 24px;
        }
        @media screen and (max-width: $breakpointLgForMw) {
          .blog-featured {
            padding-top: 152px;
            padding-bottom: 101px;
          }
        }
        @media screen and (max-width: $breakpointMdForMw) {
          .blog-featured {
            padding-top: 122px;
            padding-bottom: 81px;
          }
        }
        @media screen and (max-width: $breakpointSmForMw) {
          .blog-featured {
            padding-top: 98px;
            padding-bottom: 65px;
          }
          .container {
            padding-right: 16px;
            padding-left: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default BlogFeatured;
