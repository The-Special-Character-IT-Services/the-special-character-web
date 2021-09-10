import Card from '@components/Card';
import Typography from '@components/Typography';
import styles from './featuredCourse.module.scss';
import Image from 'next/image';
import Images from '@components/Images';
import Button from '@components/Button';
import { CourseBannerTypes } from 'types';
import { IKImage } from 'imagekitio-react';

interface Props {
  data: CourseBannerTypes;
}

const FeaturedCourse = ({ data }: Props) => {
  return (
    <section className={styles.featuredCourse}>
      <div className={styles.container}>
        <Typography variant="h2" className={styles.head}>
          {data?.featuredCourse?.title}
        </Typography>
        <Card variant="cardHover">
          <a href={`/courses/${data?.id}`} className={styles.cardMain}>
            <div className={styles.imageDiv}>
              <IKImage
                path={`${data?.course?.courseImage?.url}`.split('/').at(-1)}
                transformation={[
                  {
                    height: 608,
                    width: 1080,
                  },
                ]}
                loading="lazy"
                lqip={{ active: true }}
                alt="Featured image"
              />
            </div>
            <div className={styles.cardBox}>
              <Typography variant="h3" className={styles.cardTitle}>
                {data?.course?.title}
              </Typography>
              <Typography>{data?.course?.titleDescription}</Typography>
            </div>
          </a>
        </Card>
      </div>
    </section>
  );
};

export default FeaturedCourse;
