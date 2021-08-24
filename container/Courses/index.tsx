import Button from '@components/Button';
import Card from '@components/Card';
import Images from '@components/Images';
import Typography from '@components/Typography';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './courses.module.scss';
import { Component } from 'react';
import { default as Slider, Settings, CustomArrowProps } from 'react-slick';
import RightArrow from '../../public/svg/rightArrow.svg';
import LeftArrow from '../../public/svg/leftArrow.svg';
import Link from 'next/link';
import router from 'next/router';
import { PopularCoursesType } from 'types';

interface Props {
  data?: PopularCoursesType;
}

const Courses = ({ data }: Props) => {
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
    adaptiveHeight: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
        breakpoint: 600,
        settings: {
          adaptiveHeight: true,
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          adaptiveHeight: true,
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          cssEase: 'linear',
          pauseOnHover: true,
        },
      },
    ],
  };
  return (
    <>
      <section className={styles.courses}>
        <div className={styles.container}>
          <Typography variant="h2" className={styles.head}>
            {data?.courseSectionDetails?.title}
          </Typography>
          <div className={styles.cardDiv}>
            <Slider {...settings}>
              {data?.courses?.map(x => {
                return (
                  <Card variant="cardHover">
                    <a href={`courses/${x.id}`}>
                      <Image
                        alt="card"
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${x?.courseImage?.url}`}
                        height={318}
                        width={567}
                      />
                      <div className={styles.paraDiv}>
                        <Typography variant="h3" className={styles.cardHead}>
                          {x?.title}
                        </Typography>
                        <Typography className={styles.para}>
                          {x?.titleDescription}
                        </Typography>
                      </div>
                    </a>
                  </Card>
                );
              })}
            </Slider>
          </div>

          <div>
            <Button
              style={{ marginTop: '3rem' }}
              onClick={() => {
                router.push(data?.explore?.link);
              }}>
              {data?.explore?.buttonText}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
