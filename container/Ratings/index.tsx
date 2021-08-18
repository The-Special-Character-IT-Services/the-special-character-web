import Button from '@components/Button';
import Card from '@components/Card';
import Typography from '@components/Typography';
import styles from './ratings.module.scss';

const Ratings = () => {
  return (
    <section className={styles.ratings}>
      <div className={styles.container}>
        <div className={styles.leftDiv}>
          <Typography variant="h2" className="commonHeading">
            Grow your career today with the Education courses
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </Typography>
          <Button className="secondary">Explore courses</Button>
        </div>
        <div className={styles.rightDiv}>
          <div className={styles.cards}>
            <Card className={styles.box}>
              <Typography className={styles.boxHead}>9/10</Typography>
              <Typography className={styles.boxPara}>
                Overall courses satisfaction score
              </Typography>
            </Card>
            <Card className={styles.box}>
              <Typography className={styles.boxHead}>96%</Typography>
              <Typography className={styles.boxPara}>
                Completition rate on all courses
              </Typography>
            </Card>
          </div>
          <div className={styles.singleCard}>
            <Card className={styles.box}>
              <Typography className={styles.boxHead}>10K+</Typography>
              <Typography className={styles.boxPara}>
                Happy students worldwide
              </Typography>
            </Card>
          </div>
          <div className={styles.middleCircle} />
        </div>
        <div className={styles.bottomCircle} />
        <div className={styles.firstCircle} />
      </div>
    </section>
  );
};

export default Ratings;
