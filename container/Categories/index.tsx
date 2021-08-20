import Button from '@components/Button';
import Card from '@components/Card';
import Typography from '@components/Typography';
import Image from 'next/image';
import styles from './categories.module.scss';

interface Props {
  data?: Object;
}

const Categories = ({ data }: Props) => {
  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        <Typography variant="h2">{data.heading.title}</Typography>
        <div className={styles.cardDiv}>
          {data.cardComponent.map(x => (
            <Card key={x.id} variant="cardHover" className={styles.cardBox}>
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
                  <Typography>{x.iconButton.title}</Typography>
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
  );
};

export default Categories;
