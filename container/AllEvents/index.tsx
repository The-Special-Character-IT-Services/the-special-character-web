import Button from '@components/Button';
import Card from '@components/Card';
import FeaturedCategory from '@components/FeaturedCategory';
import Images from '@components/Images';
import Typography from '@components/Typography';
import Image from 'next/image';
import styles from './allEvents.module.scss';
import { AllEventsType, EventsEntity } from 'types';
import useRequest from 'hooks/useRequest';
import format from 'date-fns/format';

interface Props {
  data?: AllEventsType;
}

const AllEvents = ({ data }: Props) => {
  // const { data: eventsData } = useRequest<EventsEntity[]>({
  //   url: 'events',
  // });
  return (
    <section className={styles.allEvents}>
      <div className={styles.container}>
        <FeaturedCategory
          title={data?.eventPage?.allEventHeading?.title}
          categoryList={data?.eventPage?.categoryButton ?? []}
        />
        <div className={styles.list}>
          {data?.events?.map(x => {
            return (
              <Card key={x.id} variant="cardHover">
                <a href={`events/${x?.id}`} className={styles.cardMain}>
                  <div className={styles.imageDiv}>
                    <Image
                      src={x?.eventImage?.url}
                      height={608}
                      width={1080}
                      alt="Featured image"
                    />
                  </div>
                  <div className={styles.cardBox}>
                    <div className={styles.box}>
                      <div className={styles.time}>
                        <div className={styles.contentTopLeft}>
                          <Image
                            src="https://assets.website-files.com/607de2d8e8911e32707a3efe/6081c72dd73f4ebc33cc14dc_icon-date-education-x-template.svg"
                            alt="calender"
                            height={21}
                            width={21}
                          />
                          <Typography
                            variant="smallP"
                            className={styles.eventDay}>
                            {x.dateOfEvent}
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
                      <Typography>{x.eventDetails.description}</Typography>
                      <div className={styles.category}>
                        <Button className={styles.buttonWhite}>
                          <Image
                            src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/60870a1a6fa2bf07a97df928_icon-1-categories-education-x-template.svg"
                            alt="icon"
                            height={16}
                            width={23}
                          />
                          Marketing
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
                </a>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllEvents;
