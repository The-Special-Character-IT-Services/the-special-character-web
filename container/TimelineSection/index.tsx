import Button from '@components/Button';
import Timeline from '@components/Timeline';
import Typography from '@components/Typography';
import router from 'next/router';
import { AboutHistoryType } from 'types';
import styles from './timelineSection.module.scss';

interface Props {
  data?: AboutHistoryType;
}

const TimelineSection = ({ data }: Props) => {
  return (
    <section className="timeline">
      <div className="container-default">
        <div className="timeline-wrapper">
          <div className="timeline-left">
            <div className="timeline-main-content">
              <Typography variant="h2" className="commonHeading">
                {data?.heading?.title}
              </Typography>
              <Typography className={styles.timelineParagraph}>
                {data?.heading?.description}
              </Typography>
              <Button
                onClick={() => {
                  router.push(data?.buttonText?.link);
                }}>
                {data?.buttonText?.buttonText}
              </Button>
            </div>
          </div>
          <Timeline array={data?.timeline} />
        </div>
      </div>
      <style jsx>{`
        @import './styles/variables.scss';
        .timeline {
          padding-top: 184px;
          padding-bottom: 184px;
          background-color: #f9fafb;
        }
        .container-default {
          max-width: 1209px;
          margin-right: auto;
          margin-left: auto;
          padding-right: 24px;
          padding-left: 24px;
        }
        .timeline-wrapper {
          display: flex;
          justify-content: space-between;
        }
        .timeline-left {
          max-width: 495px;
          margin-right: 30px;
        }
        .timeline-main-content {
          position: sticky;
          top: 20px;
        }
        @media screen and (max-width: $breakpointLgForMw) {
          .timeline {
            padding-top: 147px;
            padding-bottom: 147px;
          }
          .timeline-left {
            max-width: 45%;
            margin-right: 20px;
          }
        }
        @media screen and (max-width: $breakpointMdForMw) {
          .timeline {
            padding-top: 118px;
            padding-bottom: 118px;
          }
          .timeline-wrapper {
            flex-direction: column;
          }
          .timeline-left {
            max-width: 580px;
            margin-right: 0px;
            margin-bottom: 50px;
          }
          .timeline-main-content {
            position: static;
          }
        }
        @media screen and (max-width: $breakpointSmForMw) {
          .timeline {
            padding-top: 94px;
            padding-bottom: 94px;
          }
          .container-default {
            padding-right: 16px;
            padding-left: 16px;
          }
          .timeline-left {
            margin-bottom: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default TimelineSection;
