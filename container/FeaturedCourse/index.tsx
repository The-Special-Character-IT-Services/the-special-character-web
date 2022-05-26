import Card from '@components/Card';
import Typography from '@components/Typography';
import styles from './featuredCourse.module.scss';
import Image from 'next/image';
import Images from '@components/Images';
import Button from '@components/Button';
import { CourseBannerTypes } from 'types';

interface Props {
  data: CourseBannerTypes;
}

const FeaturedCourse = ({ data }: Props) => {
  console.log('FEATURED COURSE ::: ', data?.courseBanner);

  return (
    <section className={styles.featuredCourse}>
      <div className={styles.container}>
        <Typography variant="h2" className={styles.head}>
          {data?.courseBanner?.featuredCourse?.title}
        </Typography>
        <Card variant="cardHover">
          <a
            href={`/courses/${data?.courseBanner?.course?.id}`}
            className={styles.cardMain}>
            <div className={styles.imageDiv}>
              <Image
                src={data?.courseBanner?.course?.courseImage?.url}
                height={608}
                width={1080}
                alt="Featured image"
              />
            </div>
            <div className={styles.cardBox}>
              <Typography variant="h3" className={styles.cardTitle}>
                {data?.courseBanner?.course?.title}
              </Typography>
              <Typography>
                {data?.courseBanner?.course?.titleDescription}
              </Typography>
            </div>
          </a>
        </Card>
      </div>
    </section>
  );
};

export default FeaturedCourse;
