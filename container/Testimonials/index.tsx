interface Props {}
import Typography from '@components/Typography';
import classnames from 'classnames';
import courseStyle from '../Courses/courses.module.scss';
import styles from './testimonials.module.scss';
import { default as Slider, Settings, CustomArrowProps } from 'react-slick';
import RightArrow from '../../public/svg/rightArrow.svg';
import LeftArrow from '../../public/svg/leftArrow.svg';
import Card from '@components/Card';
import Images from '@components/Images';
import StarRating from '@components/StarRating';
import { TestimonialTypes } from 'types';

interface Props {
  data?: TestimonialTypes;
}

const Testimonials = ({ data }: Props) => {
  function NextArrow(props: CustomArrowProps): JSX.Element {
    const { onClick } = props;
    return (
      <div className={styles.rightArrow} role="button" onClick={onClick}>
        <div className={styles.rightIcon}>
          <RightArrow />
        </div>
      </div>
    );
  }
  function PrevArrow(props: CustomArrowProps): JSX.Element {
    const { onClick } = props;
    return (
      <div className={styles.leftArrow} role="button" onClick={onClick}>
        <div className={styles.leftIcon}>
          <LeftArrow />
        </div>
      </div>
    );
  }
  const settings: Settings = {
    pauseOnHover: true,
    autoplay: true,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 5000,
        settings: {
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          adaptiveHeight: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (!data) {
    return null;
  }
  return (
    <section className="testimonials">
      <div className="container-default">
        <div className="testimonials-wrapper">
          <Typography
            variant="h2"
            className={classnames('commonHeading', styles.title)}>
            {data?.heading?.title}
          </Typography>
          <Slider {...settings}>
            {data?.testimonials?.map(x => (
              <Card key={x.id} className={styles.testimonialCard}>
                <Images
                  variant="avtar"
                  height={203}
                  width={203}
                  className={styles.image}
                  src={`${x?.avatar?.url}`}
                />
                <div className="flex-grow">
                  <StarRating
                    number={x.starRating}
                    className={classnames(styles.testimonialStar)}
                  />
                  <div className="text-align">
                    <Typography className={styles.testimonialParagraph}>
                      {x.description}
                    </Typography>
                    <Typography className={styles.testimonialName}>
                      {x.name}
                    </Typography>
                    <Typography className={styles.testimonialRole}>
                      {x.jobTitle}
                    </Typography>
                  </div>
                </div>
              </Card>
            ))}
          </Slider>
        </div>
      </div>
      <style jsx>
        {`
          @import './styles/variables.scss';
          .testimonials {
            overflow: hidden;
            padding-top: 11.5rem;
            padding-bottom: 11.5rem;
            background-color: $Neutral200;
          }
          .container-default {
            max-width: 1209px;
            margin: 0 auto;
            padding: 0 0.8rem;
          }
          .testimonials-wrapper {
            text-align: center;
          }
          .flex-grow {
            flex: 1;
          }
          @media screen and (min-width: $breakpointMd) {
            .flex-grow {
              padding-top: 1.25rem;
            }
          }
          @media screen and (max-width: $breakpointLgForMw) {
            .testimonials {
              padding-top: 9rem;
              padding-bottom: 9rem;
            }
          }

          @media screen and (max-width: $breakpointMdForMw) {
            .testimonials {
              padding-top: 7.25rem;
              padding-bottom: 7.25rem;
            }
          }
          @media screen and (max-width: $breakpointSmForMw) {
            .testimonials {
              padding-top: 6.8rem;
              padding-bottom: 5.8rem;
            }
            .text-align {
              text-align: center;
            }
            .container-default {
              padding: 0;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
