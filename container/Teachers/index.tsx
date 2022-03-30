import Button from '@components/Button';
import Card from '@components/Card';
import Images from '@components/Images';
// import Images from '@components/Images';
import Typography from '@components/Typography';
import classnames from 'classnames';
import router from 'next/router';
import { FeaturedTeacherType } from 'types';
import styles from './teachers.module.scss';

interface Props {
  data: FeaturedTeacherType;
}

const Teachers = ({ data }: Props) => {
  console.log(`teacher's data`, data);

  return (
    <section className="featured-teacher">
      <div className="container-default">
        <div className="featured-teacher-wrapper">
          <div className="split-content">
            <Typography
              variant="h2"
              className={classnames('commonHeading', styles.classH2)}>
              {data?.aboutTeacher?.heading?.title}
            </Typography>
            <Typography className={styles.featuredTeacherParagraph}>
              {data?.aboutTeacher?.heading?.description}
            </Typography>
            <div className="two-buttons">
              <Button
                className={styles.btn}
                onClick={() => {
                  router.push(data?.aboutTeacher?.browse.link);
                }}>
                {data?.aboutTeacher?.buttonText?.buttonText}
              </Button>
              <Button
                className={classnames('secondary', styles.btn)}
                onClick={() => {
                  router.push(data?.aboutTeacher?.buttonText?.link);
                }}>
                {/* {data.becomeTeacher.buttonText} */}
              </Button>
            </div>
          </div>
          <div className="featured-teacher-content">
            {/* <Images
              src={`${data?.teachers?.image.url}`}
              width={1076}
              height={1334}
            /> */}
            <Card className={styles.cardFeaturedTeacher}>
              <div className={styles.cardFeaturedTeacherBadge}>
                Featured Teacher
              </div>
              <Typography
                variant="h3"
                className={classnames(
                  'commonHeading',
                  styles.cardFeaturedTeacherTitle
                )}>
                {data?.aboutTeacher?.heading?.description}
              </Typography>
              <div className={styles.cardFeaturedTeacherAbout}>
                <Typography className={styles.cardFeaturedTeacherName}>
                  {`${data?.teachers?.firstName} ${data?.teachers?.lastName}`}
                </Typography>
                <Typography className={styles.cardFeaturedTeacherRole}>
                  {data.teachers?.jobTitle}
                </Typography>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          @import './styles/variables.scss';
          .featured-teacher {
            padding-bottom: 13.5rem;
            padding-top: 11.5rem;
          }
          .container-default {
            max-width: 1209px;
            margin: 0 auto;
            padding: 0 1.5rem;
          }
          .featured-teacher-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .split-content {
            max-width: 47%;
            margin-right: 2rem;
          }
          .featured-teacher-content {
            max-width: 46%;
          }
          @media screen and (max-width: $breakpointLgForMw) {
            .featured-teacher {
              padding-top: 9rem;
              padding-bottom: 11rem;
            }
            .featured-teacher-wrapper {
              flex-direction: column;
              text-align: center;
            }
            .split-content {
              max-width: 542px;
              margin-right: 0;
              margin-bottom: 2.5rem;
            }
            .featured-teacher-content {
              max-width: 538px;
            }
          }
          @media screen and (max-width: $breakpointMdForMw) {
            .featured-teacher {
              padding-top: 7.25rem;
              padding-bottom: 8.5rem;
            }
            .split-content {
              margin-bottom: 1.8rem;
            }
          }
          @media screen and (max-width: $breakpointSmForMw) {
            .featured-teacher {
              padding-top: 6rem;
              padding-bottom: 7rem;
            }
            .container-default {
              padding: 0 1rem;
            }
            .two-buttons {
              display: flex;
              flex-direction: column;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Teachers;
