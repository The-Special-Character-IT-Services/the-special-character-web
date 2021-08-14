import Image from 'next/image';
import Card from '@components/Card';
import Typography from '@components/Typography';
import styles from './map.module.scss';
import classnames from 'classnames';

interface Props {}

const Map = (props: Props) => {
  return (
    <section className="map">
      <div className="offices">
        <Typography variant="h2" className="commonHeading">
          Our offices
        </Typography>
        <Typography className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </Typography>
      </div>
      <div className="container-default">
        <div className="office-card-wrapper">
          <Card className={styles.cardOffice}>
            <Image
              className={styles.cardOfficeIcon}
              height={64}
              width={64}
              src="https://assets.website-files.com/607de2d8e8911e32707a3efe/60807b6df1d27e55abdefd53_icon-1-offices-education-x-template.svg"
            />
            <div className="card-office-content">
              <Typography
                variant="h3"
                className={classnames(styles.officeTitle)}>
                India
              </Typography>
              <Typography
                variant="a"
                href="mailto:sanfrancisco@education.com"
                className={styles.officeLink}>
                sanfrancisco@education.com
              </Typography>
              <Typography
                variant="a"
                href="tel:+1415-550-2433"
                className={styles.officeLink}>
                +1 (415) 550 - 2433
              </Typography>
              <Typography className={styles.officeAddress}>
                51 Osceola Ln, San Francisco, California(CA), 94124
              </Typography>
            </div>
            <div className="bg-primary-1" />
          </Card>
        </div>
        <Image
          width={1460}
          height={680}
          src="/images/mapOffice.jpg"
          className={styles.officeImage}
        />
      </div>
      <style jsx>
        {`
          @import './styles/variables.scss';
          .map {
            padding-top: 11.5rem;
            padding-bottom: 11.5rem;
          }
          .offices {
            margin-bottom: 4rem;
            text-align: center;
            margin-right: auto;
            margin-left: auto;
            padding-right: 1.5rem;
            padding-left: 1.5rem;
            max-width: 568px;
          }
          .container-default {
            max-width: 1209px;
            margin-right: auto;
            margin-left: auto;
            padding-right: 1.5rem;
            padding-left: 1.5rem;
          }
          .office-card-wrapper {
            position: relative;
            z-index: 1;
            display: flex;
            max-width: 990px;
            margin-right: auto;
            margin-left: auto;
            justify-content: center;
          }
          .card-office-content {
            display: flex;
            flex-direction: column;
          }
          .bg-primary-1 {
            right: -51px;
            bottom: -48px;
            width: 119px;
            min-height: 119px;
            min-width: 119px;
            border-radius: 1000px;
            position: absolute;
            background-color: $Primary1;
          }
          @media screen and (max-width: $breakpointLgForMw) {
            .map {
              padding-top: 9rem;
              padding-bottom: 9rem;
            }
            .offices {
              margin-bottom: 3.75rem;
            }
            .office-card-wrapper {
              flex-direction: column;
              align-items: center;
            }
          }
          @media screen and (max-width: $breakpointMdForMw) {
            .map {
              padding-top: 7.5rem;
              padding-bottom: 7.5rem;
            }
            .offices {
              margin-bottom: 3rem;
            }
            .bg-primary-1 {
              right: -66px;
            }
          }
          @media screen and (max-width: $breakpointSmForMw) {
            .map {
              padding-top: 6rem;
              padding-bottom: 6rem;
            }
            .offices {
              margin-bottom: 2.5rem;
            }
            .container-default {
              padding-right: 1rem;
              padding-left: 1rem;
            }
            .bg-primary-1 {
              right: -77px;
              bottom: -58px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Map;
