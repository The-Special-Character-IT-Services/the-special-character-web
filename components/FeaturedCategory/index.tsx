import Button from '@components/Button';
import Typography from '@components/Typography';
import classnames from 'classnames';
import router from 'next/router';
import styles from './featuredCategory.module.scss';

type ButtonList = {
  id: number;
  buttonText: string;
  link?: string | any;
};
interface Props {
  title?: string;
  categoryList: ButtonList[];
}

const FeaturedCategory = ({ categoryList, title }: Props) => {
  return (
    <>
      <div className="top-content">
        {title && (
          <Typography
            variant="h2"
            className={classnames('commonHeading', styles.title)}>
            {title}
          </Typography>
        )}
        <div className="category-wrapper">
          <div className="category-content">
            <div className="category-item">
              {categoryList?.map(x => (
                <Button
                  key={x.id}
                  onClick={() => router.push(x?.link)}
                  className={classnames(styles.button, styles.primary)}>
                  {x.buttonText}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @import './styles/variables.scss';
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
          gap: 1.75rem;
          display: flex;
        }
        @media screen and (max-width: $breakpointLgForMw) {
          .top-content {
            flex-direction: column;
          }
        }
        @media screen and (max-width: $breakpointMdForMw) {
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
        }
        @media screen and (max-width: $breakpointSmForMw) {
          .top-content {
            align-items: stretch;
          }
          .category-wrapper {
            padding-right: 1rem;
            padding-left: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default FeaturedCategory;
