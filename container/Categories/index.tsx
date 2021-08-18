import Button from '@components/Button';
import Card from '@components/Card';
import Typography from '@components/Typography';
import Image from 'next/image';
import styles from './categories.module.scss';

const Categories = () => {
  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        <Typography variant="h2">Browse our courses by category</Typography>
        <div className={styles.cardDiv}>
          <Card variant="cardHover" className={styles.cardBox}>
            <a href="/courses/1">
              <Image
                alt="Design Category"
                src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607f500fe9f6c983c68e88ef_image-1-courses-categories-education-x-template.svg"
                height={311}
                width={369}
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
                <Typography variant="h3">Design</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum laborum natus delectus est!
                </Typography>
              </div>
            </a>
          </Card>
          <Card variant="cardHover" className={styles.cardBox}>
            <a href="/courses/1">
              <Image
                alt="Design Category"
                src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607f500fe9f6c983c68e88ef_image-1-courses-categories-education-x-template.svg"
                height={311}
                width={369}
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
                <Typography variant="h3">Design</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum laborum natus delectus est!
                </Typography>
              </div>
            </a>
          </Card>
          <Card variant="cardHover" className={styles.cardBox}>
            <a href="/courses/1">
              <Image
                alt="Design Category"
                src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607f500fe9f6c983c68e88ef_image-1-courses-categories-education-x-template.svg"
                height={311}
                width={369}
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
                <Typography variant="h3">Design</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum laborum natus delectus est!
                </Typography>
              </div>
            </a>
          </Card>
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
  );
};

export default Categories;
