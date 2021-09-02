import Typography from '@components/Typography';
import styles from './resources.module.scss';
import classnames from 'classnames';
import Button from '@components/Button';
import Card from '@components/Card';
import Image from 'next/image';
import FeaturedCategory from '@components/FeaturedCategory';
import { Fragment } from 'react';
import { AllBlogsType } from 'types';

interface Props {
  data?: AllBlogsType;
}

const Resources = ({ data }: Props) => {
  const btnName = [
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'Development',
    },
    {
      id: 3,
      name: 'Design',
    },
    {
      id: 4,
      name: 'Marketing',
    },
  ];
  return (
    <section className="blog-section">
      <div className="container">
        <FeaturedCategory
          title={data.heading.title}
          categoryList={data.categoryButton}></FeaturedCategory>
        <div className="blog-grid">
          {data?.blogs?.map(x => {
            return (
              <Card
                key={x.id}
                variant="cardHover"
                className={styles.cardResources}>
                <a href={`/blog/${x.id}`}>
                  <div className="image-wrapper">
                    <div className="image">
                      <Image
                        layout="fill"
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${x.bannerImage.url}`}
                      />
                    </div>
                    <div className="card-post-category-wrapper">
                      <div className={styles.cardIcon}>
                        {x?.categories?.map(y => {
                          return (
                            <Fragment key={y.id}>
                              <Image
                                width={16}
                                height={18}
                                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${y.icon.url}`}
                              />
                              <Typography className={styles.iconTitle}>
                                {y.title}
                              </Typography>
                            </Fragment>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="card-post-content">
                    <Typography className={styles.cardPostDate}>
                      {x.updated_at}
                    </Typography>
                    <Typography
                      variant="h3"
                      className={classnames(styles.cardPost)}>
                      {x.title}
                    </Typography>
                  </div>
                </a>
              </Card>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        @import './styles/variables.scss';
        .blog-section {
          padding-top: 10rem;
          padding-bottom: 12.5rem;
        }
        .container {
          max-width: 1209px;
          margin-right: auto;
          margin-left: auto;
          padding-right: 1.5rem;
          padding-left: 1.5rem;
        }

        .blog-grid {
          display: grid;
          grid-auto-columns: 1fr;
          grid-column-gap: 1.75rem;
          grid-row-gap: 2.5rem;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto;
        }
        .image-wrapper {
          position: relative;
          overflow: hidden;
          transform: translate(0px, 0px);
        }

        .card-post-category-wrapper {
          position: absolute;
          top: 25px;
          right: 32px;
          display: flex;
          padding: 0.75rem 1.5rem;
          align-items: center;
          border-radius: 1000px;
          background-color: $Neutral100;
          box-shadow: 0 5px 15px 0 rgb(30 61 96 / 3%);
          color: $Neutral700;
          font-size: 1rem;
          line-height: 1em;
          font-weight: 700;
        }
        .card-post-content {
          padding: 3rem 2rem 3.5rem;
        }

        @media screen and (min-width: $breakpointLg) {
          .image {
            height: 264px;
            width: 471px;
          }
        }
        @media screen and (min-width: $breakpointXl) {
          .image {
            height: 317px;
            width: 566px;
          }
        }
        @media screen and (max-width: $breakpointLgForMw) {
          .blog-section {
            padding-top: 8rem;
            padding-bottom: 10rem;
          }

          .image {
            height: 193px;
            width: 346px;
          }
        }
        @media screen and (max-width: $breakpointMdForMw) {
          .blog-section {
            padding-top: 6.5rem;
            padding-bottom: 8rem;
          }

          .blog-grid {
            max-width: 567px;
            margin-right: auto;
            margin-left: auto;
            grid-row-gap: 2.5rem;
            grid-template-columns: 1fr;
          }
          .card-post-category-wrapper {
            right: 28px;
          }
          .card-post-content {
            padding-top: 2.5rem;
            padding-bottom: 3rem;
          }
        }
        @media screen and (max-width: $breakpointSmForMw) {
          .blog-section {
            padding-top: 5.25rem;
            padding-bottom: 6.5rem;
          }
          .container {
            padding-right: 1rem;
            padding-left: 1rem;
          }

          .blog-grid {
            grid-row-gap: 2rem;
          }
          .card-post-category-wrapper {
            right: 20px;
            padding-right: 1.25rem;
            padding-left: 1.25rem;
          }
          .card-post-content {
            padding: 2rem 1.5rem 2.5rem;
          }
          .image {
            height: 161px;
            width: 288px;
          }
        }
      `}</style>
    </section>
  );
};

export default Resources;
