import Button from '@components/Button';
import Card from '@components/Card';
import Typography from '@components/Typography';
import router from 'next/router';
import styles from './ratings.module.scss';

interface Props {
  data?: string[] | Object;
}
const Ratings = ({ data }: Props) => {
  const goToCourse = () => {
    router.push('/courses');
  };
  return (
    <section className={styles.ratings}>
      <div className={styles.container}>
        <div className={styles.leftDiv}>
          <Typography variant="h2" className="commonHeading">
            {data.successHeading.title}
          </Typography>
          <Typography>{data.successHeading.description}</Typography>
          <Button className="secondary" onClick={goToCourse}>
            {data.exploreCourse.buttonText}
          </Button>
        </div>
        <div className={styles.rightDiv}>
          <div className={styles.cards}>
            {data?.leftCards?.map(x => {
              return (
                <Card key={x.id} className={styles.box}>
                  <Typography className={styles.boxHead}>{x.title}</Typography>
                  <Typography className={styles.boxPara}>
                    {x.description}
                  </Typography>
                </Card>
              );
            })}
          </div>
          <div className={styles.singleCard}>
            {data.rightCards.map(x => {
              return (
                <Card key={x.id} className={styles.box}>
                  <Typography className={styles.boxHead}>{x.title}</Typography>
                  <Typography className={styles.boxPara}>
                    {x.description}
                  </Typography>
                </Card>
              );
            })}
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
