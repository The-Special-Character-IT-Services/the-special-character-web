import Button from '@components/Button';
import Card from '@components/Card';
import FeaturedCategory from '@components/FeaturedCategory';
import Images from '@components/Images';
import Typography from '@components/Typography';
import Image from 'next/image';
import styles from './allCourses.module.scss';
import { AllCourseTypes } from 'types';

interface Props {
  data: AllCourseTypes;
}

const AllCourses = ({ data }: Props) => {
  const array = [
    {
      id: 1,
      buttonText: 'All',
    },
    {
      id: 2,
      buttonText: 'Development',
    },
    {
      id: 3,
      buttonText: 'Design',
    },
  ];
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
          {data?.courses?.map(x => (
            <Card key={x.id} variant="cardHover" className={styles.cardMain}>
              <a href={`/courses/${x.id}`}>
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
