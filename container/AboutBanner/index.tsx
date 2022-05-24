import Button from '@components/Button';
import Typography from '@components/Typography';
import Image from 'next/image';
import router from 'next/router';
import { AboutBannerType } from 'types';
import styles from './aboutbanner.module.scss';

interface Props {
  data?: AboutBannerType;
}

const AboutBanner = ({ data }: Props) => {
  return (
    <section className={styles.aboutBanner}>
      <div className={styles.container}>
        <div className={styles.leftDiv}>
          <Typography variant="h1" className={styles.head}>
            {data?.header?.title}
          </Typography>
          <Button
            className={styles.button1}
            onClick={() => {
              router.push(data?.buttonText?.link);
            }}>
            {data?.buttonText?.buttonText}
          </Button>
        </div>
        <div className={styles.rightDiv}>
          <Typography>{data?.header?.description}</Typography>
          <Button
            className={styles.button2}
            onClick={() => {
              router.push(data?.buttonText?.link);
            }}>
            {data?.buttonText?.buttonText}
          </Button>
        </div>
      </div>
      <div className={styles.circleDiv}>
        <div className={styles.circle1} />
        <div className={styles.circle2} />
      </div>
      <div className={styles.arrow}>
        <Image
          alt="Next Section"
          src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607f6baa56bb661a7bbbf5eb_arrow-3-education-x-template.svg"
          height={206}
          width={77}
        />
      </div>
    </section>
  );
};

export default AboutBanner;
