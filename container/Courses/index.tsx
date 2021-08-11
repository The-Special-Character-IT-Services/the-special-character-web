import Button from '@components/Button';
import Card from '@components/Card';
import Images from '@components/Images';
import Typography from '@components/Typography';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './courses.module.scss';
import React from 'react';
import Slider from 'react-slick';
import RightArrow from '../../public/svg/rightArrow.svg';
import LeftArrow from '../../public/svg/leftArrow.svg';

interface Props {}

const Courses = (props: Props) => {
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
    adaptiveHeight: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          adaptiveHeight: true,
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 768,
        settings: {
          adaptiveHeight: true,
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
    ],
  };
  return (
    <section className={styles.courses}>
      <div className={styles.container}>
        <Typography variant="h2" className={styles.head}>
          Browse our popular courses
        </Typography>
        <div className={styles.cardDiv}>
          <Slider {...settings}>
            <Card variant="cardHover">
              <Image
                alt="card"
                src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2bd223dde86aadbf10e5_image-2-courses-education-x-template-p-500.jpeg"
                height={318}
                width={567}
              />
              <div className={styles.price}>
                <Button className="secondary">7hr 24min</Button>
                <Button>$99.00USD</Button>
              </div>
              <div>
                <Typography variant="h3">Mobile App Development</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus cum et repellat reprehenderit iure at.
                </Typography>
                <div className={styles.faculty}>
                  <Images
                    className="avtar"
                    src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607ef1bd486e01646f00559d_image-2-testimonials-education-x-template.jpg"
                    height={48}
                    width={48}
                  />
                  <Typography variant="bold">Mike Warren</Typography>
                </div>
              </div>
            </Card>{' '}
            <Card variant="cardHover">
              <Image
                alt="card"
                src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2bd223dde86aadbf10e5_image-2-courses-education-x-template-p-500.jpeg"
                height={318}
                width={567}
              />
              <div className={styles.price}>
                <Button className="secondary">7hr 24min</Button>
                <Button>$99.00USD</Button>
              </div>
              <div>
                <Typography variant="h3">Mobile App Development</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus cum et repellat reprehenderit iure at.
                </Typography>
                <div className={styles.faculty}>
                  <Images
                    className="avtar"
                    src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607ef1bd486e01646f00559d_image-2-testimonials-education-x-template.jpg"
                    height={48}
                    width={48}
                  />
                  <Typography variant="bold">Mike Warren</Typography>
                </div>
              </div>
            </Card>{' '}
            <Card variant="cardHover">
              <Image
                alt="card"
                src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2bd223dde86aadbf10e5_image-2-courses-education-x-template-p-500.jpeg"
                height={318}
                width={567}
              />
              <div className={styles.price}>
                <Button className="secondary">7hr 24min</Button>
                <Button>$99.00USD</Button>
              </div>
              <div>
                <Typography variant="h3">Mobile App Development</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus cum et repellat reprehenderit iure at.
                </Typography>
                <div className={styles.faculty}>
                  <Images
                    className="avtar"
                    src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607ef1bd486e01646f00559d_image-2-testimonials-education-x-template.jpg"
                    height={48}
                    width={48}
                  />
                  <Typography variant="bold">Mike Warren</Typography>
                </div>
              </div>
            </Card>{' '}
            <Card variant="cardHover">
              <Image
                alt="card"
                src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2bd223dde86aadbf10e5_image-2-courses-education-x-template-p-500.jpeg"
                height={318}
                width={567}
              />
              <div className={styles.price}>
                <Button className="secondary">7hr 24min</Button>
                <Button>$99.00USD</Button>
              </div>
              <div>
                <Typography variant="h3">Mobile App Development</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus cum et repellat reprehenderit iure at.
                </Typography>
                <div className={styles.faculty}>
                  <Images
                    className="avtar"
                    src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607ef1bd486e01646f00559d_image-2-testimonials-education-x-template.jpg"
                    height={48}
                    width={48}
                  />
                  <Typography variant="bold">Mike Warren</Typography>
                </div>
              </div>
            </Card>{' '}
            <Card variant="cardHover">
              <Image
                alt="card"
                src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2bd223dde86aadbf10e5_image-2-courses-education-x-template-p-500.jpeg"
                height={318}
                width={567}
              />
              <div className={styles.price}>
                <Button className="secondary">7hr 24min</Button>
                <Button>$99.00USD</Button>
              </div>
              <div>
                <Typography variant="h3">Mobile App Development</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus cum et repellat reprehenderit iure at.
                </Typography>
                <div className={styles.faculty}>
                  <Images
                    className="avtar"
                    src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607ef1bd486e01646f00559d_image-2-testimonials-education-x-template.jpg"
                    height={48}
                    width={48}
                  />
                  <Typography variant="bold">Mike Warren</Typography>
                </div>
              </div>
            </Card>{' '}
          </Slider>
        </div>

        <div>
          <Button style={{ marginTop: '3.5rem' }}>Explore all courses</Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;