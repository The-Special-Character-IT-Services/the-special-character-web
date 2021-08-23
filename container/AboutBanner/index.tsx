import Button from '@components/Button';
import Typography from '@components/Typography';
import Image from 'next/image';
import router from 'next/router';
import styles from './aboutbanner.module.scss';

export interface AboutBannerType {
  id: number;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  header: Header;
  buttonText: ButtonText;
  localizations?: null[] | null;
}
export interface Header {
  id: number;
  title: string;
  description: string;
}
export interface ButtonText {
  id: number;
  buttonText: string;
  link?: null;
}

interface Props {
  data?: AboutBannerType;
}

const AboutBanner = ({ data }: Props) => {
  const goToContact = () => {
    router.push('/contact');
  };
  return (
    <section className={styles.aboutBanner}>
      <div className={styles.container}>
        <div className={styles.leftDiv}>
          <Typography variant="h1" className={styles.head}>
            {data?.header?.title}
          </Typography>
          <Button className={styles.button1} onClick={goToContact}>
            {data?.buttonText?.buttonText}
          </Button>
        </div>
        <div className={styles.rightDiv}>
          <Typography>{data?.header?.description}</Typography>
          <Button className={styles.button2} onClick={goToContact}>
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
