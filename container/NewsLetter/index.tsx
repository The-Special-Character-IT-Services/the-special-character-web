import Button from '@components/Button';
import SubscriptionEmail from '@components/SubscriptionEmail';
import Typography from '@components/Typography';
import Image from 'next/image';
import classnames from 'classnames';
import styles from './newsLetter.module.scss';

interface Props {}

const NewsLetter = (props: Props) => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-wrapper">
          <Typography
            variant="h2"
            className={classnames('commonHeading', styles.title)}>
            Subscribe to our weekly newsletter today!
          </Typography>
          <div className="newsletter-form-block">
            <SubscriptionEmail
              submitValue="Subscribe"
              className={styles.color}
            />
          </div>
          <div className="newsletter-shape-2" />
          <div className="newsletter-shape-3" />
        </div>
      </div>
      <style jsx>{`
        @import './styles/variables.scss';
        .container {
          max-width: 1209px;
          margin-right: auto;
          margin-left: auto;
          padding-right: 1.5rem;
          padding-left: 1.5rem;
        }
        .newsletter-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          padding: 8.25rem 3.75rem 8.25rem 4.5rem;
          overflow: hidden;
          border-radius: 30px;
          background-color: $Primary1;
        }
        .newsletter-form-block {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 513px;
          margin-bottom: 0;
        }
        .newsletter-shape-2 {
          top: -129.5px;
          right: -107px;
          width: 409px;
          position: absolute;
          min-height: 409px;
          min-width: 409px;
          border-radius: 1000px;
          background-color: $Secondary2;
        }
        .newsletter-shape-3 {
          position: absolute;
          left: -139px;
          bottom: -260.5px;
          width: 409px;
          min-height: 409px;
          min-width: 409px;
          border-radius: 1000px;
          background-color: $Secondary3;
        }
        @media screen and (max-width: $breakpointLgForMw) {
          .newsletter-wrapper {
            padding-top: 7rem;
            padding-bottom: 7rem;
            text-align: center;
            flex-direction: column;
          }
          .newsletter-form-block {
            max-width: 650px;
          }
          .newsletter-shape-2 {
            top: -279.5px;
            right: -186px;
          }
          .newsletter-shape-3 {
            left: -80px;
          }
        }
        @media screen and (max-width: $breakpointMdForMw) {
          .newsletter-wrapper {
            padding: 5.75rem 2.5rem;
          }
          .newsletter-shape-2 {
            top: -320.5px;
            right: -231px;
          }
          .newsletter-shape-3 {
            left: -149px;
            bottom: -293.5px;
          }
        }
        @media screen and (max-width: $breakpointSmForMw) {
          .container {
            padding-right: 1rem;
            padding-left: 1rem;
          }
          .newsletter-wrapper {
            padding: 4rem 1.5rem;
          }
          .newsletter-shape-2 {
            top: -339.5px;
          }
          .newsletter-shape-3 {
            left: -206px;
            bottom: -298.5px;
          }
        }
      `}</style>
    </section>
  );
};

export default NewsLetter;
