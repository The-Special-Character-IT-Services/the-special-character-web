import Card from '@components/Card';
import Typography from '@components/Typography';
import styles from './featuredCourse.module.scss';
import Image from 'next/image';
import Images from '@components/Images';
import Button from '@components/Button';

interface Props {}

const FeaturedCourse = () => {
  return (
    <section className={styles.featuredCourse}>
      <div className={styles.container}>
        <Typography variant="h2" className={styles.head}>
          Featured Course
        </Typography>
        <Card variant="cardHover" className={styles.cardMain}>
          <div className={styles.imageDiv}>
            <Image
              alt="Featured image"
              src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2cfe66189f214c09a0c3_image-4-courses-education-x-template.jpg"
              height={608}
              width={1080}
            />
          </div>
          <div className={styles.cardBox}>
            <Typography variant="h3" className={styles.cardTitle}>
              Brand & Identity Design
            </Typography>
            <Typography>
              Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
              Diam phasellus vestibulum lorem sed risus ultricies.
            </Typography>
            <div className={styles.faculty}>
              <Images
                variant="avtar"
                src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg"
                height={48}
                width={48}
              />
              <div className={styles.price}>
                <Button className={styles.buttonWhite}>8hr 12m</Button>
                <Button className={styles.button}>$199.00 USD</Button>
              </div>
              <Typography variant="bold">Kathie Corl</Typography>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FeaturedCourse;
