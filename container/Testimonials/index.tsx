interface Props {}
import Typography from '@components/Typography';
import classNames from 'classnames';
import courseStyle from '../Courses/courses.module.scss';
import styles from './testimonials.module.scss';
import Slider from 'react-slick';
import RightArrow from '../../public/svg/rightArrow.svg';
import LeftArrow from '../../public/svg/leftArrow.svg';
import Card from '@components/Card';
import Images from '@components/Images';
import StarRating from '@components/StarRating';

const Testimonials = (props: Props) => {
  const NextArrow = ({ onClick }) => (
    <div className={styles.rightArrow} role="button" onClick={onClick}>
      <div className={styles.rightIcon}>
        <RightArrow />
      </div>
    </div>
  );
  const PrevArrow = ({ onClick }) => (
    <div className={styles.leftArrow} role="button" onClick={onClick}>
      <div className={styles.leftIcon}>
        <LeftArrow />
      </div>
    </div>
  );
  const settings = {
    infinite: false,
    pauseOnHover: true,
    autoplay: true,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
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
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };
  return (
    <section className="testimonials">
      <div className="container-default">
        <div className="testimonials-wrapper">
          <Typography
            variant="h2"
            className={classNames('commonHeading', styles.title)}>
            What our students say about us
          </Typography>
          <Slider {...settings}>
            <Card className={styles.testimonialCard}>
              <Images
                variant="avtar"
                height={203}
                width={203}
                className={styles.image}
                src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607ef1bd45dc22493a193f7e_image-1-testimonials-education-x-template.jpg"
              />
              <div className="flex-grow">
                <StarRating
                  number={5}
                  className={classNames(styles.testimonialStar)}
                />
                <div className="text-align">
                  <Typography className={styles.testimonialParagraph}>
                    “Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”
                  </Typography>
                  <Typography className={styles.testimonialName}>
                    Katherine Cutts
                  </Typography>
                  <Typography className={styles.testimonialRole}>
                    Junior Designer at Facebook
                  </Typography>
                </div>
              </div>
            </Card>
            <Card className={styles.testimonialCard}>
              <Images
                variant="avtar"
                height={203}
                width={203}
                className={styles.image}
                src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607ef1bd486e01646f00559d_image-2-testimonials-education-x-template.jpg"
              />
              <div className="flex-grow">
                <StarRating
                  number={4}
                  className={classNames(styles.testimonialStar)}
                />
                <div className="text-align">
                  <Typography className={styles.testimonialParagraph}>
                    “Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”
                  </Typography>
                  <Typography className={styles.testimonialName}>
                    Daniel Smith
                  </Typography>
                  <Typography className={styles.testimonialRole}>
                    Mobile Developer at Google
                  </Typography>
                </div>
              </div>
            </Card>
            <Card className={styles.testimonialCard}>
              <Images
                variant="avtar"
                height={203}
                width={203}
                className={styles.image}
                src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607ef1bc486e0164b300559c_image-3-testimonials-education-x-template.jpg"
              />
              <div className="flex-grow">
                <StarRating
                  number={4}
                  className={classNames(styles.testimonialStar)}
                />
                <div className="text-align">
                  <Typography className={styles.testimonialParagraph}>
                    “Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”
                  </Typography>
                  <Typography className={styles.testimonialName}>
                    Sophie Moore
                  </Typography>
                  <Typography className={styles.testimonialRole}>
                    UX Designer at Amazon
                  </Typography>
                </div>
              </div>
            </Card>
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
