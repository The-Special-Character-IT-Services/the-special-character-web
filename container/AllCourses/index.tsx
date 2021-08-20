import Button from '@components/Button';
import Card from '@components/Card';
import FeaturedCategory from '@components/FeaturedCategory';
import Images from '@components/Images';
import Typography from '@components/Typography';
import Image from 'next/image';
import styles from './allCourses.module.scss';

interface Props {
  data?: string[] | Object;
}

const AllCourses = ({ data }: Props) => {
  return (
    <section className={styles.allCourses}>
      <div className={styles.container}>
        <FeaturedCategory title={data.heading.title}>
          {data.categoryButtons}
        </FeaturedCategory>
        <div className={styles.list}>
          {data.courses.map(x => (
            <Card key={x.id} variant="cardHover" className={styles.cardMain}>
              <a href="/courses/1">
                <Image
                  alt="Featured image"
                  src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2cfe66189f214c09a0c3_image-4-courses-education-x-template.jpg"
                  height={319}
                  width={567}
                />
                <div className={styles.cardBox}>
                  <Typography variant="h3">{x.title}</Typography>
                  <Typography>{x.titleDescription}</Typography>
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCourses;
