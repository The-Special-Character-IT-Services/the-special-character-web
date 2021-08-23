import Typography from '@components/Typography';
import styles from './success.module.scss';

export interface AboutSuccessType {
  id: number;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  heading: Heading;
  success?: SuccessEntity[] | null;
  localizations?: null[] | null;
}
export interface Heading {
  id: number;
  title: string;
  description?: null;
}
export interface SuccessEntity {
  id: number;
  numberOfSuccess?: null;
  title: string;
  description: string;
  number: string;
}

interface Props {
  data?: AboutSuccessType;
}

const Success = ({ data }: Props) => {
  return (
    <section className={styles.success}>
      <div className={styles.containerHead}>
        <Typography variant="h2" className={styles.head}>
          {data.heading.title}
        </Typography>
      </div>
      <div className={styles.container}>
        {data.success.map(x => {
          return (
            <div className={styles.achievement}>
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
