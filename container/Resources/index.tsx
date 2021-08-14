import Typography from '@components/Typography';
import styles from './resources.module.scss';
import classnames from 'classnames';
import Button from '@components/Button';

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
        <div className="blog-grid"></div>
      </div>
      <style jsx>{`
        @import './styles/variables.scss';
        .blog-section {
          padding-top: 163px;
          padding-bottom: 200px;
        }
        .container {
          max-width: 1209px;
          margin-right: auto;
          margin-left: auto;
          padding-right: 24px;
          padding-left: 24px;
        }
        .top-content {
          display: flex;
          margin-bottom: 47px;
          justify-content: space-between;
          align-items: center;
        }
        .category-wrapper {
          padding: 18px 20px;
          border-radius: 1000px;
          background-color: #f9fafb;
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
          grid-column-gap: 29px;
          grid-row-gap: 50px;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto;
        }
        @media screen and (max-width: $breakpointLgForMw) {
          .blog-section {
            padding-top: 130px;
            padding-bottom: 160px;
          }
          .top-content {
            flex-direction: column;
          }
        }
        @media screen and (max-width: $breakpointMdForMw) {
          .blog-section {
            padding-top: 104px;
            padding-bottom: 128px;
          }
          .top-content {
            margin-bottom: 40px;
          }
          .category-wrapper {
            padding-bottom: 0px;
            border-radius: 20px;
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
            grid-row-gap: 40px;
            grid-template-columns: 1fr;
          }
        }
        @media screen and (max-width: $breakpointSmForMw) {
          .blog-section {
            padding-top: 83px;
            padding-bottom: 102px;
          }
          .container {
            padding-right: 16px;
            padding-left: 16px;
          }
          .top-content {
            align-items: stretch;
          }
          .category-wrapper {
            padding-right: 15px;
            padding-left: 15px;
          }
          .blog-grid {
            grid-row-gap: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default Resources;
