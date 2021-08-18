import Typography from '@components/Typography';
import styles from './resources.module.scss';
import classnames from 'classnames';
import Button from '@components/Button';
import Card from '@components/Card';
import Image from 'next/image';
import FeaturedCategory from '@components/FeaturedCategory';

interface Props {}

const Resources = (props: Props) => {
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
        <FeaturedCategory title="Resources & News" children={btnName} />
        <div className="blog-grid">
          <Card variant="cardHover" className={styles.cardResources}>
            <a href="/blog/1">
              <div className="image-wrapper">
                <div className="image">
                  <Image
                    layout="fill"
                    src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f23fe55a94aa127fb47b2_image-6-blog-education-x-template.jpg"
                  />
                </div>
                <div className="card-post-category-wrapper">
                  <div className={styles.cardIcon}>
                    <Image
                      width={16}
                      height={18}
                      src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2199d24e83863a7b02da_icon-2-categories-education-x-template.svg"
                    />
                  </div>
                  <Typography className={styles.iconTitle}>Design</Typography>
                </div>
              </div>
              <div className="card-post-content">
                <Typography className={styles.cardPostDate}>
                  April 20, 2021
                </Typography>
                <Typography
                  variant="h3"
                  className={classnames(styles.cardPost)}>
                  How to design a simple, yet unique and memorable brand
                  identity
                </Typography>
              </div>
            </a>
          </Card>
          <Card variant="cardHover" className={styles.cardResources}>
            <a href="/blog/1">
              <div className="image-wrapper">
                <div className="image">
                  <Image
                    layout="fill"
                    src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f23fe55a94aa127fb47b2_image-6-blog-education-x-template.jpg"
                  />
                </div>
                <div className="card-post-category-wrapper">
                  <div className={styles.cardIcon}>
                    <Image
                      width={16}
                      height={18}
                      src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2199d24e83863a7b02da_icon-2-categories-education-x-template.svg"
                    />
                  </div>
                  <Typography className={styles.iconTitle}>Design</Typography>
                </div>
              </div>
              <div className="card-post-content">
                <Typography className={styles.cardPostDate}>
                  April 20, 2021
                </Typography>
                <Typography
                  variant="h3"
                  className={classnames(styles.cardPost)}>
                  How to design a simple, yet unique and memorable brand
                  identity
                </Typography>
              </div>
            </a>
          </Card>
          <Card variant="cardHover" className={styles.cardResources}>
            <a href="/blog/1">
              <div className="image-wrapper">
                <div className="image">
                  <Image
                    layout="fill"
                    src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f23fe55a94aa127fb47b2_image-6-blog-education-x-template.jpg"
                  />
                </div>
                <div className="card-post-category-wrapper">
                  <div className={styles.cardIcon}>
                    <Image
                      width={16}
                      height={18}
                      src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2199d24e83863a7b02da_icon-2-categories-education-x-template.svg"
                    />
                  </div>
                  <Typography className={styles.iconTitle}>Design</Typography>
                </div>
              </div>
              <div className="card-post-content">
                <Typography className={styles.cardPostDate}>
                  April 20, 2021
                </Typography>
                <Typography
                  variant="h3"
                  className={classnames(styles.cardPost)}>
                  How to design a simple, yet unique and memorable brand
                  identity
                </Typography>
              </div>
            </a>
          </Card>
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
