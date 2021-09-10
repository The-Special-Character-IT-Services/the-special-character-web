import Button from '@components/Button';
import Card from '@components/Card';
import FeaturedCategory from '@components/FeaturedCategory';
import Typography from '@components/Typography';
import Image from 'next/image';
import format from 'date-fns/format';
import styles from './upcomingEvents.module.scss';
import { UpcomingEventType } from 'types';
import Icons from '@components/Icons';
import { IKImage } from 'imagekitio-react';

interface Props {
  data?: UpcomingEventType;
}

const UpcomingEvents = ({ data }: Props) => {
  return (
    <section className={styles.upcomingEvents}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Typography variant="h2" className={styles.head}>
            {data.header.title}
          </Typography>
          <Button
            className="secondary"
            onClick={() => {
              router.push(data?.button?.link);
            }}>
            {data.button.buttonText}
          </Button>
        </div>
        <div className={styles.list}>
          {data.events.map(x => {
            return (
              <Card variant="cardHover" className={styles.cardMain} key={x.id}>
                <div className={styles.imageDiv}>
                  <IKImage
                    path={`${x.eventImage.url}`.split('/').at(-1)}
                    transformation={[
                      {
                        height: 608,
                        width: 1080,
                      },
                    ]}
                    loading="lazy"
                    lqip={{ active: true }}
                    alt="Featured image"
                  />
                </div>
                <div className={styles.cardBox}>
                  <div className={styles.box}>
                    <div className={styles.time}>
                      <div className={styles.contentTopLeft}>
                        <Image
                          src={`${x.schedule.icon.url}`}
                          alt="calender"
                          height={21}
                          width={21}
                        />
                        <Typography
                          variant="smallP"
                          className={styles.eventDay}>
                          {x.schedule.title}
                        </Typography>
                      </div>
                      <div className={styles.mobileWrapper}>
                        <div className={styles.month}>
                          {format(new Date(x.dateOfEvent), 'MMM')}
                        </div>
                        <div className={styles.date}>
                          {format(
                            new Date(x.dateOfEvent),
                            'dd                                                                              '
                          )}
                        </div>
                      </div>
                    </div>
                    <Typography variant="h3" className={styles.cardTitle}>
                      {x.eventDetails.title}
                    </Typography>
                    <Typography className={styles.para}>
                      {x.eventDetails.description}
                    </Typography>
                    <div className={styles.category}>
                      <Button
                        className={styles.buttonWhite}
                        onClick={() => {
                          router.push(x?.category?.link);
                        }}>
                        <Icons socialLink={x?.category} />
                        {x?.category.title}
                      </Button>
                    </div>
                  </div>
                  <div className={styles.mobileWrapper}>
                    <div className={styles.month}>
                      {format(new Date(x.dateOfEvent), 'MMM')}
                    </div>
                    <div className={styles.date}>
                      {format(
                        new Date(x.dateOfEvent),
                        'dd                                                                              '
                      )}
                    </div>
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

export default UpcomingEvents;
