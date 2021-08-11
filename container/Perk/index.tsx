import Card from '@components/Card';
import Typography from '@components/Typography';
import classnames from 'classnames';
import card from '@components/Card/card.module.scss';
import styles from './perk.module.scss';

interface Props {}

const Perk = (props: Props) => {
  return (
    <section id="Perks" className="bg-neutral-700 perks wf-section">
      <div className="container-default">
        <div className="perks-wrapper">
          <Typography
            variant="h2"
            className={classnames(styles.titlePerks, 'commonHeading')}>
            Why learn with our courses?
          </Typography>
          <div className="perks-grid">
            <Card variant="perkCard">
              <img
                src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607e21e810beff7a8011b340_image-1-perks-education-x-template.svg"
                alt="Perk Image"
                className={card.imagePerk}
              />
              <div className="perkContent">
                <Typography
                  variant="h3"
                  className={classnames(card.subTitlePerk, 'commonHeading')}>
                  1. Learn
                </Typography>
                <Typography className={classnames(card.paragraphPerk)}>
                  Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                  elit. Felis donec massa aliqua.
                </Typography>
              </div>
            </Card>
            <Card variant="perkCard">
              <img
                src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607e21e8936529d4f0ebfe91_image-2-perks-education-x-template.svg"
                alt="Perk Image"
                className={card.imagePerk}
              />
              <div className="perkContent">
                <Typography
                  variant="h3"
                  className={classnames(card.subTitlePerk, 'commonHeading')}>
                  2. Graduate
                </Typography>
                <Typography className={classnames(card.paragraphPerk)}>
                  Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                  elit. Felis donec massa aliqua.
                </Typography>
              </div>
            </Card>
            <Card variant="perkCard">
              <img
                src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607e21e8c0c9f4644adea00a_image-3-perks-education-x-template.svg"
                alt="Perk Image"
                className={card.imagePerk}
              />
              <div className="perkContent">
                <Typography
                  variant="h3"
                  className={classnames(card.subTitlePerk, 'commonHeading')}>
                  3. Work
                </Typography>
                <Typography className={classnames(card.paragraphPerk)}>
                  Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                  elit. Felis donec massa aliqua.
                </Typography>
              </div>
            </Card>
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
          @media screen and (max-width: $breakpointLg) {
            .perks {
              padding-top: 9.188rem;
              padding-bottom: 9.375rem;
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
          @media screen and (max-width: $breakpointMd) {
            .perks {
              padding-top: 7.375rem;
              padding-bottom: 7.5rem;
            }
            .perks-grid {
              grid-row-gap: 3.125rem;
            }
            .arrow-wrapper {
              bottom: -83px;
              & img {
                width: 55px;
              }
            }
          }
          @media screen and (max-width: $breakpointSm) {
            .container-default {
              padding: 0 1rem;
            }
            .perks {
              padding-top: 5.875rem;
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
