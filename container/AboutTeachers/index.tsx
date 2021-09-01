import Button from '@components/Button';
import Card from '@components/Card';
import Typography from '@components/Typography';
import Image from 'next/image';
import Facebook from '../../public/svg/facebook.svg';
import Github from '../../public/svg/github.svg';
import Twitter from '../../public/svg/twitter.svg';
import Linkedin from '../../public/svg/linkedin.svg';
import styles from './aboutTeachers.module.scss';
import router from 'next/router';
import { AboutTeacherType } from 'types';

interface Props {
  data?: AboutTeacherType;
}

const AboutTeachers = ({ data }: Props) => {
  return (
    <section id="Teachers" className={styles.aboutTeachers}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.leftHead}>
            <Typography variant="h2" className={styles.title}>
              {data?.heading?.title}
            </Typography>
            <Typography className={styles.caption}>
              {data?.heading?.description}
            </Typography>
          </div>
          <Button
            onClick={() => {
              router.push(data?.buttonText?.link);
            }}>
            {data?.buttonText?.buttonText}
          </Button>
        </div>
        <div className={styles.cards}>
          {data?.teachers?.map(x => {
            return (
              <Card variant="cardHover" className={styles.singleCard}>
                <Image
                  alt="John Carter"
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${x?.image?.url}`}
                  width={349}
                  height={330}
                />
                <div className={styles.description}>
                  <Typography variant="h3">{`${x?.firstName} ${x?.lastName}`}</Typography>
                  <Typography>{x?.description}</Typography>
                  <div className={styles.socialIcons}>
                    {x?.socialMedia?.map(icon => {
                      return (
                        <Button
                          onClick={() => router.push(`${icon.link}`)}
                          className="socialIcon">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${icon?.icon.url}`}
                            height={21}
                            width={21}
                          />
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutTeachers;
