import Button from '@components/Button';
import Images from '@components/Images';
import List from '@components/List';
import Typography from '@components/Typography';
import Image from 'next/image';
import { IndividualEventTypes } from 'types';
import styles from './individualEvent.module.scss';
import format from 'date-fns/format';
import Icons from '@components/Icons';
import useMarkdown from 'hooks/useMarkdown';

interface Props {
  data?: IndividualEventTypes;
}

const IndividualEvent = ({ data }: Props) => {
  const { HTML } = useMarkdown(data?.eventAgenda?.description);
  if (!data) {
    return null;
  }
  return (
    <section className={styles.individualEvent}>
      <div className={styles.imgDiv}>
        <Images
          alt="Event Description"
          src={`${data?.eventImage?.url}`}
          height={900}
          width={1600}
          className={styles.img}
        />
        <div className={styles.shape1} />
        <div className={styles.shape2} />
      </div>
      <div className={styles.eventDesc}>
        <div className={styles.eventTime}>
          <div className={styles.date}>
            <Typography className={styles.month}>
              {format(new Date(data.dateOfEvent), 'MMM')}
            </Typography>
            <Typography className={styles.day}>
              {format(
                new Date(data.dateOfEvent),
                'dd                                                                              '
              )}
            </Typography>
          </div>
          <div className={styles.place}>
            <div className={styles.eventAbout}>
              {data?.minimalDetails?.map(x => {
                return (
                  <div className={styles.firstDiv} key={x.id}>
                    <Image
                      alt="Calender"
                      src={`${x?.icon?.url}`}
                      height={21}
                      width={21}
                    />
                    <Typography variant="bold">{x?.title}</Typography>
                  </div>
                );
              })}
              <Button
                className={styles.button}
                onClick={() => {
                  router.push(data?.category.link);
                }}>
                <Icons socialLink={data?.category} />
                {data?.category.title}
              </Button>
            </div>
            <Typography variant="h2" className={styles.title}>
              {data?.eventDetails?.title}
            </Typography>
            <Typography className={styles.caption}>
              {data?.eventDetails?.description}
            </Typography>
            <Button
              onClick={() => {
                router.push(data?.register?.link);
              }}>
              {data?.register?.buttonText}
            </Button>
          </div>
        </div>
        <div className={styles.container}>
          <Typography variant="h2" className={styles.title}>
            {data?.eventAgenda?.title}
          </Typography>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: HTML }}
          />

          <Button
            onClick={() => {
              router.push(data?.register?.link);
            }}>
            {data?.register?.buttonText}
          </Button>
        </div>
      </div>
      <div className={styles.bgEvent} />
    </section>
  );
};

export default IndividualEvent;
