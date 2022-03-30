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
import router from 'next/router';
import { CourseType } from 'types';

interface Props {
  data?: CourseType;
}
const SingleCourseSection = ({ data }: Props) => {
  const goToContact = () => {
    router.push({
      pathname: '/contact',
      query: {
        value: data?.title,
      },
    });
  };
  if (!data) {
    return null;
  }
  return (
    <section className="course">
      <div className="container">
        <div className="course-wrapper">
          <div className="course-content">
            <div className="course-category-item">
              <div>
                {data?.tags?.map(x => {
                  return (
                    <a key={x.id} className="course-category" href={x?.link}>
                      {x?.icon?.url && (
                        <Image height={18} width={16} src={`${x?.icon?.url}`} />
                      )}
                      <Typography className={styles.courseCategoryText}>
                        {x.title}
                      </Typography>
                    </a>
                  );
                })}
              </div>
            </div>
            <Typography
              variant="h1"
              className={classnames('commonHeading', styles.courseTitle)}>
              {data?.title}
            </Typography>
            <Typography className={styles.courseSummary}>
              {data?.titleDescription}
            </Typography>
            <Images
              className={styles.coursePreview}
              height={405}
              width={720}
              src={`${data?.courseImage?.url}`}>
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
                <Typography
                  className={styles.price}>{`$ ${data?.price} USD`}</Typography>
                <Button onClick={goToContact}>
                  {data?.enroll?.buttonText}
                </Button>
              </div>
              <div className="card-get-course-features-grid">
                {data?.courseMinimalDetails?.map(x => {
                  return (
                    <div key={x.id} className="card-get-course-feature-wrapper">
                      <div className="card-get-course-feature-icon">
                        {/* <Image src={`${x?.icon?.url}`} width={29} height={29} /> */}
                      </div>
                      <div className="card-get-course-feature-text-wrapper">
                        <Typography className={styles.marginRemove}>
                          {x.title}&nbsp;
                        </Typography>
                        <Typography variant="bold">{x.description}</Typography>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* <FeaturedCategory categoryList={data?.sectionButtons} /> */}
            <div>
              <Typography variant="h2" className="commonHeading">
                {data?.aboutCourse?.title}
              </Typography>
              <Typography className={styles.richText}>
                {data?.aboutCourse?.description}
              </Typography>
            </div>
            <Divider className={styles.divider} isFooterTop />
            <div className="full-width">
              <Typography variant="h2" className="commonHeading">
                What will you learn
              </Typography>
              {data?.curriculum?.map(x => {
                return (
                  <Accordian key={x.id} label={x.title}>
                    {x.description}
                  </Accordian>
                );
              })}
            </div>
            <Divider className={styles.divider} isFooterTop />
            <div>
              <Typography variant="h2" className="commonHeading">
                {data?.result?.title}
              </Typography>
              <Typography className={styles.richText}>
                {data?.result?.description}
              </Typography>
            </div>
            <Divider className={styles.divider} isFooterTop />
            {data?.feedbacks && (
              <div>
                <Typography variant="h2" className="commonHeading">
                  What our students say
                </Typography>
                <div className="review-grid">
                  {data?.feedbacks?.map(x => {
                    return (
                      <Card
                        key={x.id}
                        className={testimonialStyle.testimonialCard}>
                        <Images
                          variant="avtar"
                          height={203}
                          width={203}
                          className={testimonialStyle.image}
                          src={`${x?.avatar?.url}`}
                        />
                        <div className="flex-grow">
                          <StarRating
                            number={x.starRating}
                            className={classnames(
                              testimonialStyle.testimonialStar
                            )}
                          />
                          <div className="text-align">
                            <Typography
                              className={testimonialStyle.testimonialParagraph}>
                              {x.description}
                            </Typography>
                            <Typography
                              className={testimonialStyle.testimonialName}>
                              {x.name}
                            </Typography>
                            <Typography
                              className={testimonialStyle.testimonialRole}>
                              {x.jobTitle}
                            </Typography>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <div className="course-sidebar">
            <div className="card get-course">
              <Typography className={styles.price}>
                {`$ ${data.price} USD`}
              </Typography>
              <Typography>{data.titleDescription}</Typography>
              <Button onClick={goToContact}>Enroll Now</Button>
              <div className="mt1 card-get-course-features-grid">
                {data?.courseMinimalDetails?.map(x => {
                  return (
                    <div key={x.id} className="card-get-course-feature-wrapper">
                      <div className="card-get-course-feature-icon">
                        {/* <Image src={`${x?.icon?.url}`} width={29} height={29} /> */}
                      </div>
                      <div className="card-get-course-feature-text-wrapper">
                        <Typography className={styles.marginRemove}>
                          {x.title}&nbsp;
                        </Typography>
                        <Typography variant="bold">{x.description}</Typography>
                      </div>
                    </div>
                  );
                })}
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
        .full-width {
          width: 100%;
        }
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
