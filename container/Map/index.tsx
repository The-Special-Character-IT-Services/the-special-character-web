import Image from 'next/image';
import Card from '@components/Card';
import Typography from '@components/Typography';
import styles from './map.module.scss';
import classnames from 'classnames';

interface Props {
  data?: string[] | Object;
}

const Map = ({ data }: Props) => {
  return (
    <section id="Map" className="map">
      <div className="offices">
        <Typography variant="h2" className="commonHeading">
          {data.heading.title}
        </Typography>
        <Typography className={styles.paragraph}>
          {data.heading.description}
        </Typography>
      </div>
      <div className="container-default">
        <div className="office-card-wrapper">
          {data.officeCard.map(x => {
            return (
              <Card className={styles.cardOffice}>
                <Image
                  className={styles.cardOfficeIcon}
                  height={64}
                  width={64}
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${x.icon.url}`}
                />
                <div className="card-office-content">
                  <Typography
                    variant="h3"
                    className={classnames(styles.officeTitle)}>
                    {x.country}
                  </Typography>
                  <Typography
                    variant="a"
                    href={x.mailLink}
                    className={styles.officeLink}>
                    {x.mail}
                  </Typography>
                  <Typography
                    variant="a"
                    href={x.phoneLink}
                    className={styles.officeLink}>
                    {x.phone}
                  </Typography>
                  <Typography className={styles.officeAddress}>
                    {x.address}
                  </Typography>
                </div>
                <div className="bg-primary-1" />
              </Card>
            );
          })}
        </div>
        <Image
          width={1460}
          height={680}
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data.mapImage.url}`}
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
