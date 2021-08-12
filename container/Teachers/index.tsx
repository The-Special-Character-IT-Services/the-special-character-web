import Button from '@components/Button';
import Card from '@components/Card';
import Images from '@components/Images';
import Typography from '@components/Typography';
import classnames from 'classnames';
import styles from './teachers.module.scss';

interface Props {}

const Teachers = (props: Props) => {
  return (
    <section className="featured-teacher">
      <div className="container-default">
        <div className="featured-teacher-wrapper">
          <div className="split-content">
            <Typography
              variant="h2"
              className={classnames('commonHeading', styles.classH2)}>
              Courses taught by industry leaders around the world
            </Typography>
            <Typography className={styles.featuredTeacherParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </Typography>
            <div className="two-buttons">
              <Button className={styles.btn}>Browse Teachers</Button>
              <Button className={classnames('secondary', styles.btn)}>
                Become a Teacher
              </Button>
            </div>
          </div>
          <div className="featured-teacher-content">
            <Images
              src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607e240b3c46c0182718cf14_image-featured-teacher-education-x-template.jpg"
              width={1076}
              height={1334}
            />
            <Card className={styles.cardFeaturedTeacher}>
              <div class={styles.cardFeaturedTeacherBadge}>
                Featured Teacher
              </div>
              <Typography
                variant="h3"
                className={classnames(
                  'commonHeading',
                  styles.cardFeaturedTeacherTitle
                )}>
                “Teaching on Education platform has been an amazing experience”
              </Typography>
              <div className={styles.cardFeaturedTeacherAbout}>
                <Typography className={styles.cardFeaturedTeacherName}>
                  Sophie Moore
                </Typography>
                <Typography className={styles.cardFeaturedTeacherRole}>
                  Marketing Lead at Facebook
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
            margin-right: 1.875rem;
          }
          .featured-teacher-content {
            max-width: 46%;
          }
          @media screen and (max-width: $breakpointLgForMw) {
            .featured-teacher {
              padding-bottom: 10.813rem;
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
              padding-bottom: 8.625rem;
            }
            .split-content {
              margin-bottom: 1.875rem;
            }
          }
          @media screen and (max-width: $breakpointSmForMw) {
            .featured-teacher {
              padding-bottom: 6.938rem;
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
