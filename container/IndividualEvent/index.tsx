import Button from '@components/Button';
import Images from '@components/Images';
import List from '@components/List';
import Typography from '@components/Typography';
import Image from 'next/image';
import Marketing from '../../public/svg/Marketing.svg';
import styles from './individualEvent.module.scss';

interface Props {
  props: JSX.Element;
}

const IndividualEvent = (props: Props) => {
  const array = [
    {
      id: 1,
      item: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dor',
    },

    { id: 2, item: 'Lorem ipsum dolor sit amet, consectetur adipiscing' },

    {
      id: 3,
      item: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dor',
    },
  ];
  return (
    <section className={styles.individualEvent}>
      <div className={styles.imgDiv}>
        <Images
          alt="Event Description"
          src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/6081bcda0eb70e6127b5b859_image-4-events-education-x-template-p-1600.jpeg"
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
            <div className={styles.month}>JULY</div>
            <div className={styles.day}>24</div>
          </div>
          <div className={styles.place}>
            <div className={styles.eventAbout}>
              <div className={styles.firstDiv}>
                <Image
                  alt="Calender"
                  src="https://assets.website-files.com/607de2d8e8911e32707a3efe/6081eb083dfd5737a32ea899_icon-1-event-about-education-x-template.svg"
                  height={21}
                  width={21}
                />
                <Typography variant="bold">
                  Sunday 5:00 pm - 6:00 pm EDT
                </Typography>
              </div>
              <div className={styles.secondDiv}>
                <Image
                  alt="Location"
                  src="https://assets.website-files.com/607de2d8e8911e32707a3efe/6081eb0877bb756f8ad439bb_icon-2-event-about-education-x-template.svg"
                  height={20}
                  width={17}
                />
                <Typography variant="bold">Los Angeles, LA</Typography>
              </div>
              <Button className={styles.button}>
                <Marketing className={styles.marketing} />
                Marketing
              </Button>
            </div>
            <Typography variant="h2" className={styles.title}>
              Social Media Marketing Masterclass
            </Typography>
            <Typography className={styles.caption}>
              Sunday 5:00 pm - 6:00 pm EDT Los Angeles, LA Marketing Social
              Media Marketing Masterclass Lorem ipsum dolor sit amet,
              consectetur dolorili adipiscing elit. Felis donec massa aliquam
              id.
            </Typography>
            <Button>Register Event</Button>
          </div>
        </div>
        <div className={styles.container}>
          <Typography variant="h2" className={styles.title}>
            Event Agenda
          </Typography>
          <div className={styles.description}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta
              massa, eget natoque{' '}
              <Typography variant="bold">tincidunt quis</Typography> .
              Suspendisse vitae vestibulum scelerisque egestas. Volutpat,
              adipiscing a elit platea amet et. At at metus egestas nunc eget.
              Tempus sapien, augue laoreet morbi{' '}
              <Typography variant="a"> habitasse leo</Typography> mauris arcu
              amet. Sapien lectus auctor quis in ut morbi risus. Ornare aliquam
              phasellus consequat amet velit risus.
            </Typography>
            Ac, pellentesque proin{' '}
            <Typography variant="bold">tincidunt lobortis sit</Typography>
            velit velit dui eget. Massa, lectus orci auctor morbi. A nisl vitae,
            sagittis elementum placerat nullam id integer leo. Diam venenatis
            amet diam odio <Typography variant="a">ultrices auctor</Typography>.
            <List
              listItem={array}
              keyProp="id"
              valueProp="item"
              className={styles.listUL}
            />
          </div>
          <Button>Register to event</Button>
        </div>
      </div>
      <div className={styles.bgEvent} />
    </section>
  );
};

export default IndividualEvent;
