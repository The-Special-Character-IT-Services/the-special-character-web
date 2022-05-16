import Button from '@components/Button';
import Card from '@components/Card';
import FeaturedCategory from '@components/FeaturedCategory';
import Images from '@components/Images';
import Typography from '@components/Typography';
import styles from './allCourses.module.scss';
import { AllCourseTypes, CoursesEntity } from 'types';
import useRequest from 'hooks/useRequest';
import Image from 'next/image';

interface Props {
  data: AllCourseTypes;
}

const AllCourses = ({ data }: Props) => {
  console.log('All Courses data:', data);

  const { data: coursesData } = useRequest<CoursesEntity[]>({
    url: 'courses',
  });
  if (!data) {
    return null;
  }
  return (
    <section className={styles.allCourses}>
      <div className={styles.container}>
        {data.allCourse.categoryButtons && (
          <FeaturedCategory
            title={data?.allCourse?.heading?.title}
            categoryList={data?.allCourse?.categoryButtons ?? []}
          />
        )}
        <div className={styles.list}>
          {data?.courses?.map(x => (
            <Card key={x.id} variant="cardHover" className={styles.cardMain}>
              <a href={`courses/${x?.id}`}>
                <div>
                  <Image
                    src={x?.courseImage?.url}
                    height={319}
                    width={567}
                    alt="Featured image"
                    layout="responsive"
                  />
                </div>
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
