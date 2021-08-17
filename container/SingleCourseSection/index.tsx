import Typography from '@components/Typography';
import Image from 'next/image';
import classnames from 'classnames';
import styles from './singleCourseSection.module.scss';
import testimonialStyle from '../Testimonials/testimonials.module.scss';
import Images from '@components/Images';
import Button from '@components/Button';
import FeaturedCategory from '@components/FeaturedCategory';
import Divider from '@components/Divider';
import Accordian from '@components/Accordian';
import Card from '@components/Card';
import StarRating from '@components/StarRating';

interface Props {}

const SingleCourseSection = (props: Props) => {
  const btnName = [
    {
      id: 1,
      name: 'About',
    },
    {
      id: 2,
      name: 'Topics',
    },
    {
      id: 3,
      name: 'Results',
    },
    {
      id: 4,
      name: 'Reviews',
    },
  ];
  return (
    <section className="course">
      <div className="container">
        <div className="course-wrapper">
          <div className="course-content">
            <div className="course-category-item">
              <div className="course-category">
                <Image
                  height={18}
                  width={16}
                  src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2199d24e83863a7b02da_icon-2-categories-education-x-template.svg"
                />
                <Typography className={styles.courseCategoryText}>
                  Design
                </Typography>
              </div>
            </div>
            <Typography
              variant="h1"
              className={classnames('commonHeading', styles.courseTitle)}>
              Brand & Identity Design
            </Typography>
            <Typography className={styles.courseSummary}>
              Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
              Diam phasellus vestibulum lorem sed risus ultricies.
            </Typography>
            <Images
              className={styles.coursePreview}
              height={405}
              width={720}
              src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2cfe66189f214c09a0c3_image-4-courses-education-x-template.jpg">
              <div className="course-preview-filter" />
              <a href="#!" className="course-preview-button">
                <Image
                  className={styles.previewIcon}
                  src="https://assets.website-files.com/607de2d8e8911e32707a3efe/60821213dd84a1ae8618efb3_icon-play-education-x-template.svg"
                  width={27}
                  height={31}
                />
              </a>
            </Images>

            <div className="card get-course mobile">
              <div className="card-get-course-content-top">
                <Typography className={styles.price}>$ 199.00 USD</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit
                  purus vivera.
                </Typography>
                <Button>Enroll Now</Button>
              </div>
              <div className="card-get-course-features-grid">
                <div className="card-get-course-feature-wrapper">
                  <div className="card-get-course-feature-icon">
                    <Image
                      src="https://assets.website-files.com/607de2d8e8911e32707a3efe/6082193bcb8d6d565ee6e31f_icon-1-course-features-education-x-template.svg"
                      width={29}
                      height={29}
                    />
                  </div>
                  <div className="card-get-course-feature-text-wrapper">
                    <Typography className={styles.marginRemove}>
                      Level:&nbsp;
                    </Typography>
                    <Typography variant="bold">Advanced</Typography>
                  </div>
                </div>
                <div className="card-get-course-feature-wrapper">
                  <div className="card-get-course-feature-icon">
                    <Image
                      src="https://assets.website-files.com/607de2d8e8911e32707a3efe/6082193b1544f5209a682c41_icon-2-course-features-education-x-template.svg"
                      width={29}
                      height={29}
                    />
                  </div>
                  <div className="card-get-course-feature-text-wrapper">
                    <Typography className={styles.marginRemove}>
                      Duration:&nbsp;
                    </Typography>
                    <Typography variant="bold">8hr 12m</Typography>
                  </div>
                </div>
                <div className="card-get-course-feature-wrapper">
                  <div className="card-get-course-feature-icon">
                    <Image
                      src="https://assets.website-files.com/607de2d8e8911e32707a3efe/6082193aa9614127acec7400_icon-3-course-features-education-x-template.svg"
                      width={29}
                      height={29}
                    />
                  </div>
                  <div className="card-get-course-feature-text-wrapper">
                    <Typography className={styles.marginRemove}>
                      Lessons:&nbsp;
                    </Typography>
                    <Typography variant="bold">80</Typography>
                  </div>
                </div>
                <div className="card-get-course-feature-wrapper">
                  <div className="card-get-course-feature-icon">
                    <Image
                      src="https://assets.website-files.com/607de2d8e8911e32707a3efe/6082193b44f40254cdf961a8_icon-4-course-features-education-x-template.svg"
                      width={29}
                      height={29}
                    />
                  </div>
                  <div className="card-get-course-feature-text-wrapper">
                    <Typography className={styles.marginRemove}>
                      Lifetime Access
                    </Typography>
                    <Typography variant="bold"></Typography>
                  </div>
                </div>
              </div>
            </div>
            <FeaturedCategory children={btnName} />
            <div>
              <Typography variant="h2" className="commonHeading">
                About the course
              </Typography>
              <Typography className={styles.richText}>
                Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                elit. Felis donec massa aliquam id.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Purus viverra praesent felis
                consequat pellentesque turpis et quisque platea. Eu, elit ut
                nunc ac mauris bibendum nulla placerat. Sagittis sit eu sit
                massa sapien, risus diam. In lorem eu sed euismod laoreet urna,
                feugiat et. Euismod sem purus rutrum in. Tortor varius a
                bibendum nisl et tellus. Aliquet elit senectus iaculis netus
                gravida.
              </Typography>
            </div>
            <Divider className={styles.divider} isFooterTop />
            <div>
              <Typography variant="h2" className="commonHeading">
                What will you learn
              </Typography>
              <Accordian label="Introduction" children="Some dummy intro" />
              <Accordian
                label="Hooks"
                children="Some dummy description about hooks"
              />
            </div>
            <Divider className={styles.divider} isFooterTop />
            <div>
              <Typography variant="h2" className="commonHeading">
                Results after course completion
              </Typography>
              <Typography className={styles.richText}>
                Eget aliquet nibh praesent tristique magna sit amet purus.
                Consequat id porta nibh venenatis cras sed felis. Nisl rhoncus
                mattis rhoncus urna neque viverra justo nec. Habitant morbi
                tristique senectus et netus et malesuada fames ac. Et tortor
                consequat id porta nibh venenatis cras sed felis.
              </Typography>
              <Typography className={styles.richText}>
                Mi sit amet mauris commodo quis. Eget arcu dictum varius duis at
                consectetur lorem.Venenatis cras sed felis eget velit aliquet.
              </Typography>
            </div>
            <Divider className={styles.divider} isFooterTop />
            <div>
              <Typography variant="h2" className="commonHeading">
                What our students say
              </Typography>
              <div className="review-grid">
                <Card className={testimonialStyle.testimonialCard}>
                  <Images
                    variant="avtar"
                    height={203}
                    width={203}
                    className={testimonialStyle.image}
                    src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607ef1bc486e0164b300559c_image-3-testimonials-education-x-template.jpg"
                  />
                  <div className="flex-grow">
                    <StarRating
                      number={4}
                      className={classnames(testimonialStyle.testimonialStar)}
                    />
                    <div className="text-align">
                      <Typography
                        className={testimonialStyle.testimonialParagraph}>
                        “Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint”
                      </Typography>
                      <Typography className={testimonialStyle.testimonialName}>
                        Sophie Moore
                      </Typography>
                      <Typography className={testimonialStyle.testimonialRole}>
                        UX Designer at Amazon
                      </Typography>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          <div className="course-sidebar">
            <div className="card get-course">
              <Typography className={styles.price}>$ 199.00 USD</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit
                purus vivera.
              </Typography>
              <Button>Enroll Now</Button>
              <div className="mt1 card-get-course-features-grid">
                <div className="card-get-course-feature-wrapper">
                  <div className="card-get-course-feature-icon">
                    <Image
                      src="https://assets.website-files.com/607de2d8e8911e32707a3efe/6082193bcb8d6d565ee6e31f_icon-1-course-features-education-x-template.svg"
                      width={29}
                      height={29}
                    />
                  </div>
                  <div className="card-get-course-feature-text-wrapper">
                    <Typography className={styles.marginRemove}>
                      Level:&nbsp;
                    </Typography>
                    <Typography variant="bold">Advanced</Typography>
                  </div>
                </div>
                <div className="card-get-course-feature-wrapper">
                  <div className="card-get-course-feature-icon">
                    <Image
                      src="https://assets.website-files.com/607de2d8e8911e32707a3efe/6082193b1544f5209a682c41_icon-2-course-features-education-x-template.svg"
                      width={29}
                      height={29}
                    />
                  </div>
                  <div className="card-get-course-feature-text-wrapper">
                    <Typography className={styles.marginRemove}>
                      Duration:&nbsp;
                    </Typography>
                    <Typography variant="bold">8hr 12m</Typography>
                  </div>
                </div>
                <div className="card-get-course-feature-wrapper">
                  <div className="card-get-course-feature-icon">
                    <Image
                      src="https://assets.website-files.com/607de2d8e8911e32707a3efe/6082193aa9614127acec7400_icon-3-course-features-education-x-template.svg"
                      width={29}
                      height={29}
                    />
                  </div>
                  <div className="card-get-course-feature-text-wrapper">
                    <Typography className={styles.marginRemove}>
                      Lessons:&nbsp;
                    </Typography>
                    <Typography variant="bold">80</Typography>
                  </div>
                </div>
                <div className="card-get-course-feature-wrapper">
                  <div className="card-get-course-feature-icon">
                    <Image
                      src="https://assets.website-files.com/607de2d8e8911e32707a3efe/6082193b44f40254cdf961a8_icon-4-course-features-education-x-template.svg"
                      width={29}
                      height={29}
                    />
                  </div>
                  <div className="card-get-course-feature-text-wrapper">
                    <Typography className={styles.marginRemove}>
                      Lifetime Access
                    </Typography>
                    <Typography variant="bold"></Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-course" />
          <div className="course-bg-shape-wrapper">
            <div className="course-shape-1" />
          </div>
        </div>
      </div>
      <style jsx>{`
        @import './styles/variables.scss';
        .flex-grow {
          flex: 1;
        }
        .bg-course {
          left: 0px;
          top: 0px;
          right: 0px;
          z-index: -2;
          min-height: 594px;
          background-color: $Neutral700;
          position: absolute;
        }
        .course-bg-shape-wrapper {
          position: absolute;
          left: 0px;
          top: 0px;
          right: 0px;
          z-index: -1;
          overflow: hidden;
          min-height: 594px;
          & .course-shape-1 {
            position: absolute;
            top: -307px;
            right: -174px;
            width: 572px;
            min-height: 572px;
            min-width: 572px;
            border-radius: 1000px;
            background-color: $Secondary3;
          }
        }
        .course-sidebar {
          max-width: 396px;
        }
        .course {
          position: relative;
          padding-top: 7.75rem;
          padding-bottom: 14.5rem;
        }
        .container {
          max-width: 1257px;
          margin: 0 auto;
          padding-right: 1.5rem;
          padding-left: 1.5rem;
        }
        .course-wrapper {
          display: flex;
          justify-content: space-between;
        }
        .course-content {
          display: flex;
          max-width: 62%;
          margin-right: 1.75rem;
          flex-direction: column;
          align-items: flex-start;
        }
        .course-category-item {
          display: flex;
          margin-bottom: 1.5rem;
        }
        .mt1 {
          margin-top: 1.5rem;
        }
        .course-category {
          display: flex;
          gap: 6px;
          padding: 1rem 1.5rem;
          align-items: center;
          border-style: solid;
          border-width: 1px;
          border-color: $Neutral300;
          border-radius: 1000px;
          background-color: $Neutral100;
          transition: border-color 300ms ease, background-color 300ms ease,
            color 300ms ease, transform 300ms ease, -webkit-transform 300ms ease;
          color: $Neutral700;
          font-size: 1rem;
          line-height: 1em;
          font-weight: 700;
          max-width: 100%;
        }
        .course-preview-filter {
          position: absolute;
          inset: 0;
          background-color: $darkBlue;
          opacity: 0.6;
        }
        .course-preview-button {
          display: flex;
          top: 35%;
          overflow: hidden;
          position: absolute;
          width: 121px;
          min-height: 121px;
          min-width: 121px;
          justify-content: center;
          align-items: center;
          border-radius: 1000px;
          background-color: $Neutral100;
          box-shadow: 0 17px 67px 0 rgb(3 14 26 / 39%);
          transition-property: box-shadow;
        }
        .card {
          overflow: hidden;
          border-radius: 1.25rem;
          background-color: $Neutral100;
          box-shadow: 0 5px 15px 0 rgb(30 61 96 / 3%);
        }
        .get-course {
          position: sticky;
          top: 20px;
          padding: 3.75rem 2rem 3.5rem;
        }
        .mobile {
          position: static;
          display: none;
        }
        .card-get-course-features-grid {
          display: grid;
          grid-auto-columns: 1fr;
          grid-template-columns: 1fr;
          grid-template-rows: auto;
          grid-row-gap: 1rem;
        }
        .card-get-course-feature-wrapper {
          display: flex;
          align-items: flex-start;
        }
        .card-get-course-feature-icon {
          margin-right: 0.75rem;
        }
        .card-get-course-feature-text-wrapper {
          display: flex;
          margin-top: 0.5rem;
          flex-wrap: wrap;
          align-items: center;
          line-height: 1.111em;
        }
        .review-grid {
          display: grid;
          grid-auto-columns: 1fr;
          grid-template-columns: 1fr;
          grid-template-rows: auto;
          grid-row-gap: 2.5rem;
          grid-column-gap: 1rem;
        }
        @media screen and (max-width: $breakpointLgForMw) {
          .course-sidebar {
            display: none;
          }
          .course-bg-shape-wrapper {
            & .course-shape-1 {
              top: -385px;
              right: -254px;
            }
          }
          .course {
            padding-top: 6.25rem;
            padding-bottom: 11.5rem;
          }
          .course-content {
            max-width: 100%;
            margin-right: 0;
          }
          .mobile {
            display: flex;
            margin-bottom: 3rem;
            padding-top: 3rem;
            padding-bottom: 3rem;
            justify-content: space-between;
            align-items: flex-start;
          }
          .card-get-course-content-top {
            max-width: 396px;
            margin-right: 1.75rem;
          }
          .card-get-course-feature-text-wrapper {
            max-width: 290px;
          }
        }
        @media screen and (max-width: $breakpointMdForMw) {
          .course {
            padding-top: 5rem;
            padding-bottom: 9.25rem;
          }
          .course-category-item {
            margin-bottom: 1.25rem;
          }
          .course-preview-button {
            width: 20%;
            min-height: 36%;
            min-width: 20%;
          }
          .mobile {
            margin-bottom: 2.5rem;
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
            flex-direction: column;
            align-items: center;
          }
          .card-get-course-content-top {
            max-width: 524px;
            margin-right: 0;
            margin-bottom: 2.5rem;
          }
          .card-get-course-features-grid {
            width: 100%;
            max-width: 524px;
          }
        }
        @media screen and (max-width: $breakpointSmForMw) {
          .course {
            padding-top: 4rem;
            padding-bottom: 7.5rem;
          }
          .container {
            padding-right: 1rem;
            padding-left: 1rem;
          }
          .course-category {
            padding-right: 1.25rem;
            padding-left: 1.25rem;
          }
          .course-preview-button {
            top: 30%;
            width: 25%;
            min-height: 44%;
            min-width: 25%;
          }
          .mobile {
            padding: 2.25rem 1.5rem 2rem;
          }
          .card-get-course-features-grid {
            grid-row-gap: 0.5rem;
          }
          .text-align {
            text-align: center;
          }
          .bg-course {
            min-height: 500px;
          }
          .course-bg-shape-wrapper {
            & .course-shape-1 {
              top: -505px;
              right: -361px;
            }
          }
        }
      `}</style>
    </section>
  );
};

export default SingleCourseSection;
