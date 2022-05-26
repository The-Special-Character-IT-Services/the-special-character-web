import Typography from '@components/Typography';
import { AboutSuccessType } from 'types';
import styles from './success.module.scss';

interface Props {
  data?: AboutSuccessType;
}

const Success = ({ data }: Props) => {
  if (!data) {
    return null;
  }
  return (
    <section className={styles.success}>
      <div className={styles.containerHead}>
        <Typography variant="h2" className={styles.head}>
          {data.heading.title}
        </Typography>
      </div>
      <div className={styles.container}>
        {data?.success?.map(x => {
          return (
            <div key={x.id} className={styles.achievement}>
              <Typography className={styles.title}>{`${x.number}+`}</Typography>
              <Typography variant="h3" className={styles.caption}>
                {x.title}
              </Typography>
              <Typography>{x.description}</Typography>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Success;
