import Button from '@components/Button';
import Card from '@components/Card';
import Typography from '@components/Typography';
import Image from 'next/image';
import styles from './aboutTeachers.module.scss';
import router from 'next/router';
import { AboutTeacherType, TeachersEntity } from 'types';
import useRequest from 'hooks/useRequest';
import { IKImage } from 'imagekitio-react';

interface Props {
  data?: AboutTeacherType;
}

const AboutTeachers = ({ data }: Props) => {
  const { data: teachersData } = useRequest<TeachersEntity>({
    url: 'teachers',
  });
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
          {teachersData?.map(x => {
            return (
              <Card
                key={x.id}
                variant="cardHover"
                className={styles.singleCard}>
                <div>
                  <IKImage
                    path={`${x?.image?.url}`.split('/').at(-1)}
                    transformation={[{ height: 330, width: 349 }]}
                    loading="lazy"
                    lqip={{ active: true }}
                    alt={x.firstName}
                  />
                </div>
                <div className={styles.description}>
                  <Typography variant="h3">{`${x?.firstName} ${x?.lastName}`}</Typography>
                  <Typography>{x?.description}</Typography>
                  <div className={styles.socialIcons}>
                    {x?.socialMedia?.map(icon => {
                      return (
                        <Button
                          key={icon.id}
                          onClick={() => router.push(`${icon.link}`)}
                          className="socialIcon">
                          <Image
                            alt="Social Icon"
                            src={`${icon?.icon.url}`}
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
