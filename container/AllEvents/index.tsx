import Button from '@components/Button';
import Card from '@components/Card';
import FeaturedCategory from '@components/FeaturedCategory';
import Images from '@components/Images';
import Typography from '@components/Typography';
import Image from 'next/image';
import styles from './allEvents.module.scss';

interface Props {}

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
                      src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2cfe66189f214c09a0c3_image-4-courses-education-x-template.jpg"
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

          {/* <Card variant="cardHover">
            <a href="/events/1" className={styles.cardMain}>
              <div className={styles.imageDiv}>
                <Image
                  alt="Featured image"
                  src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2cfe66189f214c09a0c3_image-4-courses-education-x-template.jpg"
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
                      <Typography variant="smallP" className={styles.eventDay}>
                        Sunday 5:00pm - 6:00pm EDT
                      </Typography>
                    </div>
                    <div className={styles.mobileWrapper}>
                      <div className={styles.month}>JULY</div>
                      <div className={styles.date}>24</div>
                    </div>
                  </div>
                  <Typography variant="h3" className={styles.cardTitle}>
                    Brand & Identity Design
                  </Typography>
                  <Typography>
                    Sed viverra ipsum nunc aliquet bibendum enim facilisis
                    gravida. Diam phasellus vestibulum lorem sed risus
                    ultricies.
                  </Typography>
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
          <Card variant="cardHover">
            <a href="/events/1" className={styles.cardMain}>
              <div className={styles.imageDiv}>
                <Image
                  alt="Featured image"
                  src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2cfe66189f214c09a0c3_image-4-courses-education-x-template.jpg"
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
                      <Typography variant="smallP" className={styles.eventDay}>
                        Sunday 5:00pm - 6:00pm EDT
                      </Typography>
                    </div>
                    <div className={styles.mobileWrapper}>
                      <div className={styles.month}>JULY</div>
                      <div className={styles.date}>24</div>
                    </div>
                  </div>
                  <Typography variant="h3" className={styles.cardTitle}>
                    Brand & Identity Design
                  </Typography>
                  <Typography>
                    Sed viverra ipsum nunc aliquet bibendum enim facilisis
                    gravida. Diam phasellus vestibulum lorem sed risus
                    ultricies.
                  </Typography>
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
          <Card variant="cardHover">
            <a href="/events/1" className={styles.cardMain}>
              <div className={styles.imageDiv}>
                <Image
                  alt="Featured image"
                  src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2cfe66189f214c09a0c3_image-4-courses-education-x-template.jpg"
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
                      <Typography variant="smallP" className={styles.eventDay}>
                        Sunday 5:00pm - 6:00pm EDT
                      </Typography>
                    </div>
                    <div className={styles.mobileWrapper}>
                      <div className={styles.month}>JULY</div>
                      <div className={styles.date}>24</div>
                    </div>
                  </div>
                  <Typography variant="h3" className={styles.cardTitle}>
                    Brand & Identity Design
                  </Typography>
                  <Typography>
                    Sed viverra ipsum nunc aliquet bibendum enim facilisis
                    gravida. Diam phasellus vestibulum lorem sed risus
                    ultricies.
                  </Typography>
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
          </Card> */}
        </div>
      </div>
    </section>
  );
};

export default AllEvents;
