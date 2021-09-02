import Card from '@components/Card';
import Typography from '@components/Typography';
import classnames from 'classnames';
import card from '@components/Card/card.module.scss';
import styles from './perk.module.scss';
import Image from 'next/image';
import { ReasonType } from 'types';

interface Props {
  data?: ReasonType;
}

const Perk = ({ data }: Props) => {
  return (
    <section id="Perks" className="bg-neutral-700 perks">
      <div className="container-default">
        <div className="perks-wrapper">
          <Typography
            variant="h2"
            className={classnames(styles.titlePerks, 'commonHeading')}>
            {data?.heading?.title}
          </Typography>
          <div className="perks-grid">
            {data?.cards?.map(x => {
              return (
                <Card variant="perkCard">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${x?.image?.url}`}
                    alt="Perk Image"
                    height={233}
                    width={233}
                    className={card.imagePerk}
                  />
                  <div className="perkContent">
                    <Typography
                      variant="h3"
                      className={classnames(
                        card.subTitlePerk,
                        'commonHeading'
                      )}>
                      {x.title}
                    </Typography>
                    <Typography className={classnames(card.paragraphPerk)}>
                      {x.description}
                    </Typography>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <div className="arrow-wrapper">
        <img
          src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607f6baa6449de7ea4c48cb3_arrow-1-education-x-template.svg"
          alt="Arrow image"
        />
      </div>
      <style jsx>
        {`
          @import './styles/variables.scss';
          .perks {
            position: relative;
            padding-top: 11.5rem;
            padding-bottom: 11.75rem;
          }
          .bg-neutral-700 {
            background-color: $Neutral700;
          }
          .container-default {
            max-width: 1209px;
            margin: 0 auto;
            padding: 0 1.5rem;
          }
          .perks-wrapper {
            text-align: center;
          }
          .perks-grid {
            display: grid;
            grid-template-columns: auto auto auto;
            grid-row-gap: 1rem;
            grid-column-gap: 1rem;
            grid-template-rows: auto;
            justify-content: space-between;
          }
          .arrow-wrapper {
            display: flex;
            position: absolute;
            justify-content: center;
            left: 0px;
            right: 0px;
            bottom: -116px;
          }
          @media screen and (max-width: $breakpointLgForMw) {
            .perks {
              padding-top: 9rem;
              padding-bottom: 9.25rem;
            }
            .perks-grid {
              grid-row-gap: 3.75rem;
              grid-template-columns: 1fr;
            }
            .arrow-wrapper {
              bottom: -100px;
              & img {
                width: 65px;
              }
            }
          }
          @media screen and (max-width: $breakpointMdForMw) {
            .perks {
              padding-top: 7.25rem;
              padding-bottom: 7.5rem;
            }
            .perks-grid {
              grid-row-gap: 3rem;
            }
            .arrow-wrapper {
              bottom: -83px;
              & img {
                width: 55px;
              }
            }
          }
          @media screen and (max-width: $breakpointSmForMw) {
            .container-default {
              padding: 0 1rem;
            }
            .perks {
              padding-top: 5.75rem;
              padding-bottom: 6rem;
            }
            .arrow-wrapper {
              bottom: -79px;
              & img {
                width: 45px;
              }
            }
          }
        `}
      </style>
    </section>
  );
};

export default Perk;
