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
          <Card variant="cardHover" className={styles.cardMain}>
            <a href="/courses/1">
              <Image
                alt="Featured image"
                src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2cfe66189f214c09a0c3_image-4-courses-education-x-template.jpg"
                height={319}
                width={567}
              />
              <div className={styles.cardBox}>
                <Typography variant="h3">Brand & Identity Design</Typography>
                <Typography>
                  Sed viverra ipsum nunc aliquet bibendum enim facilisis
                  gravida. Diam phasellus vestibulum lorem sed risus ultricies.
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
            </a>
          </Card>
          <Card variant="cardHover" className={styles.cardMain}>
            <a href="/courses/1">
              <Image
                alt="Featured image"
                src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2cfe66189f214c09a0c3_image-4-courses-education-x-template.jpg"
                height={319}
                width={567}
              />
              <div className={styles.cardBox}>
                <Typography variant="h3">Brand & Identity Design</Typography>
                <Typography>
                  Sed viverra ipsum nunc aliquet bibendum enim facilisis
                  gravida. Diam phasellus vestibulum lorem sed risus ultricies.
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
            </a>
          </Card>
          <Card variant="cardHover" className={styles.cardMain}>
            <Image
              alt="Featured image"
              src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2cfe66189f214c09a0c3_image-4-courses-education-x-template.jpg"
              height={319}
              width={567}
            />
            <div className={styles.cardBox}>
              <Typography variant="h3">Brand & Identity Design</Typography>
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
          <Card variant="cardHover" className={styles.cardMain}>
            <Image
              alt="Featured image"
              src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2cfe66189f214c09a0c3_image-4-courses-education-x-template.jpg"
              height={319}
              width={567}
            />
            <div className={styles.cardBox}>
              <Typography variant="h3">Brand & Identity Design</Typography>
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
          <Card variant="cardHover" className={styles.cardMain}>
            <Image
              alt="Featured image"
              src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2cfe66189f214c09a0c3_image-4-courses-education-x-template.jpg"
              height={319}
              width={567}
            />
            <div className={styles.cardBox}>
              <Typography variant="h3">Brand & Identity Design</Typography>
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
          <Card variant="cardHover" className={styles.cardMain}>
            <Image
              alt="Featured image"
              src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2cfe66189f214c09a0c3_image-4-courses-education-x-template.jpg"
              height={319}
              width={567}
            />
            <div className={styles.cardBox}>
              <Typography variant="h3">Brand & Identity Design</Typography>
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
      </div>
    </section>
  );
};

export default AllCourses;
