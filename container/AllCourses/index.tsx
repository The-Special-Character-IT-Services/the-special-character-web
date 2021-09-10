import Button from '@components/Button';
import Card from '@components/Card';
import FeaturedCategory from '@components/FeaturedCategory';
import Images from '@components/Images';
import Typography from '@components/Typography';
import Image from 'next/image';
import styles from './allCourses.module.scss';
import { AllCourseTypes, CoursesEntity } from 'types';
import useRequest from 'hooks/useRequest';

interface Props {
  data: AllCourseTypes;
}

const AllCourses = ({ data }: Props) => {
  const { data: coursesData } = useRequest<CoursesEntity>({
    url: 'courses',
  });
  if (!data) {
    return null;
  }
  return (
    <section className={styles.allCourses}>
      <div className={styles.container}>
        {data.categoryButtons && (
          <FeaturedCategory
            title={data.heading.title}
            categoryList={data?.categoryButtons ?? []}
          />
        )}
        <div className={styles.list}>
          {coursesData?.map(x => (
            <Card key={x.id} variant="cardHover" className={styles.cardMain}>
              <a href={`courses/${x?.id}`}>
                <Image
                  alt="Featured image"
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${x.courseImage.url}`}
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
