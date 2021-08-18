import Button from '@components/Button';
import Typography from '@components/Typography';
import Image from 'next/image';
import router from 'next/router';
import styles from './aboutbanner.module.scss';

interface Props {}

const AboutBanner = (props: Props) => {
  const goToContact = () => {
    router.push('/contact');
  };
  return (
    <section className={styles.aboutBanner}>
      <div className={styles.container}>
        <div className={styles.leftDiv}>
          <Typography variant="h1" className={styles.head}>
            The big mission behind Education
          </Typography>
          <Button className={styles.button1} onClick={goToContact}>
            Join Our Team
          </Button>
        </div>
        <div className={styles.rightDiv}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
            pulvinar ac molestie cursus malesuada enim. Massa nec tellus, elit
            tellus, erat faucibus aenean. Nunc, lacus, dignissim nec sit.
          </Typography>
          <Button className={styles.button2}>Join Our Team</Button>
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
