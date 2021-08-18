import Typography from '@components/Typography';
import styles from './success.module.scss';
interface Props {}

const Success = () => {
  return (
    <section className={styles.success}>
      <div className={styles.containerHead}>
        <Typography variant="h2" className={styles.head}>
          A few numbers that we are proud of
        </Typography>
      </div>
      <div className={styles.container}>
        <div className={styles.achievement}>
          <div className={styles.title}>100,000+</div>
          <Typography variant="h3" className={styles.caption}>
            Students
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </Typography>
        </div>
        <div className={styles.achievement}>
          <div className={styles.title}>5,000+</div>
          <Typography variant="h3" className={styles.caption}>
            Five-star reviews
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </Typography>
        </div>
        <div className={styles.achievement}>
          <div className={styles.title}>75,000+</div>
          <Typography variant="h3" className={styles.caption}>
            Students community
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Success;
