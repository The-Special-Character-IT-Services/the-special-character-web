import Typography from '@components/Typography';
import styles from './resources.module.scss';
import classnames from 'classnames';
import Button from '@components/Button';
import Card from '@components/Card';
import Image from 'next/image';

interface Props {}

const Resources = (props: Props) => {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="top-content">
          <Typography
            variant="h2"
            className={classnames('commonHeading', styles.title)}>
            Resources & News
          </Typography>
          <div className="category-wrapper">
            <div className="category-content">
              <div className="category-item">
                <Button className={classnames(styles.button, styles.current)}>
                  All
                </Button>
                <Button className={classnames(styles.button, styles.primary)}>
                  Development
                </Button>
                <Button className={classnames(styles.button, styles.primary)}>
                  Design
                </Button>
                <Button className={classnames(styles.button, styles.primary)}>
                  Marketing
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-grid">
          <Card variant="cardHover" className={styles.cardResources}>
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
              <Typography variant="h3" className={classnames(styles.cardPost)}>
                How to design a simple, yet unique and memorable brand identity
              </Typography>
            </div>
          </Card>
          <Card variant="cardHover" className={styles.cardResources}>
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
              <Typography variant="h3" className={classnames(styles.cardPost)}>
                How to design a simple, yet unique and memorable brand identity
              </Typography>
            </div>
          </Card>
          <Card variant="cardHover" className={styles.cardResources}>
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
              <Typography variant="h3" className={classnames(styles.cardPost)}>
                How to design a simple, yet unique and memorable brand identity
              </Typography>
            </div>
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
        .top-content {
          display: flex;
          margin-bottom: 3rem;
          justify-content: space-between;
          align-items: center;
        }
        .category-wrapper {
          padding: 1rem 1.25rem;
          border-radius: 1000px;
          background-color: $Neutral200;
        }
        .category-content {
          display: flex;
          justify-content: center;
        }
        .category-item {
          display: flex;
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
          .top-content {
            flex-direction: column;
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
          .top-content {
            margin-bottom: 2.5rem;
          }
          .category-wrapper {
            padding-bottom: 0;
            border-radius: 1.25rem;
          }
          .category-content {
            flex-wrap: wrap;
            justify-content: flex-start;
          }
          .category-item {
            flex-wrap: wrap;
            align-items: flex-start;
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
          .top-content {
            align-items: stretch;
          }
          .category-wrapper {
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
