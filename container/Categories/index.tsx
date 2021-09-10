import Button from '@components/Button';
import Card from '@components/Card';
import Divider from '@components/Divider';
import Typography from '@components/Typography';
import Image from 'next/image';
import { CourseCategoryType } from 'types';
import styles from './categories.module.scss';

interface Props {
  data?: CourseCategoryType;
}

const Categories = ({ data }: Props) => {
  return (
    <>
      <section className={styles.categories}>
        <div className={styles.container}>
          <Typography variant="h2">{data?.heading?.title}</Typography>
          <div className={styles.cardDiv}>
            {data?.cardComponent?.map(x => (
              <Card key={x.id} variant="cardHover" className={styles.cardBox}>
                <a href={`/courses/${x.id}`}>
                  <Image
                    alt="Design Category"
                    src={`${x?.image?.url}`}
                    height={400}
                    width={550}
                  />
                  <Button className="secondary">
                    <Image
                      alt="Play"
                      src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607f4d1b6d6b05c4f9a7289c_icon-card-category-courses-education-x-template.svg"
                      height={12}
                      width={12}
                    />
                    <Typography>12 courses</Typography>
                  </Button>
                  <div className={styles.paraDiv}>
                    <Typography variant="h3">{x.title}</Typography>
                    <Typography>{x.description}</Typography>
                  </div>
                </a>
              </Card>
            ))}
          </div>
        </div>
        <div className={styles.arrow}>
          <Image
            alt="Next Section"
            src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607f6baa1a6ec59517e0c917_arrow-2-education-x-template.svg"
            height={206}
            width={77}
          />
        </div>
      </section>
    </>
  );
};

export default Categories;
