import Button from '@components/Button';
import Card from '@components/Card';
import FeaturedCategory from '@components/FeaturedCategory';
import Images from '@components/Images';
import Typography from '@components/Typography';
import styles from './allCourses.module.scss';
import { AllCourseTypes } from 'types';
import { IKImage } from 'imagekitio-react';

interface Props {
  data: AllCourseTypes;
}

const AllCourses = ({ data }: Props) => {
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
              <a href={`courses/${x?.id}`}>
                <div>
                  <IKImage
                    path={`${x?.courseImage?.url}`.split('/').at(-1)}
                    transformation={[{ height: 319, width: 567 }]}
                    loading="lazy"
                    lqip={{ active: true }}
                    alt="Featured image"
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
