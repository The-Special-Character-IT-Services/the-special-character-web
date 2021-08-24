import Button from '@components/Button';
import Card from '@components/Card';
import FeaturedCategory from '@components/FeaturedCategory';
import Images from '@components/Images';
import Typography from '@components/Typography';
import Image from 'next/image';
import styles from './allEvents.module.scss';

export interface AllEvents {
  id: number;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  heading: EventDetailsOrEventAgendaOrHeading;
  allEventHeading: AllEventHeading;
  categoryButton?: CategoryButtonEntityOrCategoryEntityOrRegister[] | null;
  events?: EventsEntity[] | null;
  localizations?: null[] | null;
}
export interface EventDetailsOrEventAgendaOrHeading {
  id: number;
  title: string;
  description: string;
}
export interface AllEventHeading {
  id: number;
  title: string;
  description?: null;
}
export interface CategoryButtonEntityOrCategoryEntityOrRegister {
  id: number;
  buttonText: string;
  link?: null;
}
export interface EventsEntity {
  id: number;
  dateOfEvent: string;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  location: string;
  minimalDetails?: MinimalDetailsEntity[] | null;
  category?: CategoryButtonEntityOrCategoryEntityOrRegister[] | null;
  eventDetails: EventDetailsOrEventAgendaOrHeading;
  eventAgenda: EventDetailsOrEventAgendaOrHeading;
  register: CategoryButtonEntityOrCategoryEntityOrRegister;
  eventImage: EventImage;
}
export interface MinimalDetailsEntity {
  id: number;
  title: string;
  description: string;
  icon?: null;
}
export interface EventImage {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: null;
  provider: string;
  provider_metadata?: null;
  created_at: string;
  updated_at: string;
}
export interface Formats {
  large: LargeOrSmallOrMediumOrThumbnail;
  small: LargeOrSmallOrMediumOrThumbnail;
  medium: LargeOrSmallOrMediumOrThumbnail;
  thumbnail: LargeOrSmallOrMediumOrThumbnail;
}
export interface LargeOrSmallOrMediumOrThumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: null;
  size: number;
  width: number;
  height: number;
}

interface Props {
  data?: AllEvents;
}

const AllEvents = ({ data }: Props) => {
  const array = [
    {
      id: 1,
      name: 'All',
    },
    { id: 2, name: 'Development' },
    { id: 3, name: 'Design' },
    { id: 4, name: 'Marketing' },
  ];
  return (
    <section className={styles.allEvents}>
      <div className={styles.container}>
        <FeaturedCategory title={data.allEventHeading.title}>
          {data.categoryButton}
        </FeaturedCategory>
        <div className={styles.list}>
          {data.events.map(x => {
            return (
              <Card key={x.id} variant="cardHover">
                <a href="/events/1" className={styles.cardMain}>
                  <div className={styles.imageDiv}>
                    <Image
                      alt="Featured image"
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${x?.eventImage?.url}`}
                      height={608}
                      width={1080}
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
                          <div className={styles.month}>JULY</div>
                          <div className={styles.date}>24</div>
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
                            width={21}
                          />
                          Marketing
                        </Button>
                      </div>
                    </div>
                    <div className={styles.mobileWrapper}>
                      <div className={styles.month}>JULY</div>
                      <div className={styles.date}>24</div>
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
