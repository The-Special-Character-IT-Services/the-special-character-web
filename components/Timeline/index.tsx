type TimeLine = {
  number: number;
  title: string;
  description: string;
};

interface Props {
  props?: Object;
  array: TimeLine[];
}
import Typography from '@components/Typography';
import styles from './timeline.module.scss';

const Timeline = ({ array, ...props }: Props) => {
  return (
    <>
      <div className="w-layout-grid timeline-grid">
        {array?.map(item => {
          if (typeof item === 'object') {
            return (
              <>
                <div className="timeline-year-wrapper">
                  <div className={styles.timelineYearDot} />
                  <div className={styles.timelineYearContent}>
                    <Typography className={styles.timelineYear}>
                      {item?.number}
                    </Typography>
                    <div>
                      <Typography
                        variant="h3"
                        className={styles.timelineYearTitle}>
                        {item?.title}
                      </Typography>
                      <Typography className={styles.timelineYearParagraph}>
                        {item?.description}
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="timeline-line"></div>
              </>
            );
          }
          throw new Error('Please pass the array as object');
        })}
      </div>
      <style jsx>
        {`
          @import './styles/variables.scss';

          .w-layout-grid {
            display: grid;
            grid-auto-columns: 1fr;
            grid-column-gap: 1rem;
          }
          .timeline-grid {
            position: relative;
            z-index: 1;
            grid-row-gap: 4rem;
            grid-template-columns: auto;
            grid-template-rows: auto;
            width: 100%;
            max-width: 597px;
          }
          .timeline-year-wrapper {
            display: flex;
            align-items: flex-start;
            z-index: 1;
          }
          .timeline-line {
            position: absolute;
            left: 9px;
            top: 0px;
            bottom: 0px;
            width: 2px;
            background-color: $Neutral300;
          }
          @media screen and (max-width: $breakpointLgForMw) {
            .timeline-grid {
              grid-row-gap: 3.125rem;
            }
          }
          @media screen and (max-width: $breakpointMdForMw) {
            .timeline-grid {
              grid-row-gap: 2.5rem;
              max-width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default Timeline;
