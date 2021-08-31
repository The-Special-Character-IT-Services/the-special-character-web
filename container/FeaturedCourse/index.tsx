import Card from '@components/Card';
import Typography from '@components/Typography';
import styles from './featuredCourse.module.scss';
import Image from 'next/image';
import Images from '@components/Images';
import Button from '@components/Button';
import { CourseBannerTypes } from 'types';

interface Props {
  data?: CourseBannerTypes;
}

const FeaturedCourse = ({ data }: Props) => {
  return (
    <section className={styles.featuredCourse}>
      <div className={styles.container}>
        <Typography variant="h2" className={styles.head}>
          {data?.featuredCourse?.title}
        </Typography>
        {}
        <Card variant="cardHover">
          <a href={`/courses/${data.id}`} className={styles.cardMain}>
            <div className={styles.imageDiv}>
              <Image
                alt="Featured image"
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data?.course?.courseImage?.url}`}
                height={608}
                width={1080}
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
