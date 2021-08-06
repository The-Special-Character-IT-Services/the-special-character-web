interface Props {}
import Typography from '@components/Typography';
import styles from './timeline.module.scss';

const Timeline = ({ props, data }: Props) => {
  return (
    <div className="w-layout-grid timeline-grid">
      {data?.map(item => {
        if (typeof item === 'object') {
          return (
            <>
              <div className="timeline-year-wrapper">
                <div className={styles.timelineYearDot} />
                <div className={styles.timelineYearContent}>
                  <Typography className={styles.timelineYear}>
                    {item?.year}
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
        throw new Error('Please pass the data as object');
      })}
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
            grid-row-gap: 4.063rem;
            grid-template-columns: auto;
            grid-template-rows: auto;
            width: 100%;
            max-width: 597px;
          }
          .timeline-year-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            z-index: 1;
          }
          .timeline-line {
            position: absolute;
            left: 9px;
            top: 0px;
            bottom: 0px;
            width: 2px;
            background-color: #e7eaee;
          }
          @media screen and (max-width: $breakpointLg) {
            .timeline-grid {
              grid-row-gap: 3.125rem;
            }
          }
          @media screen and (max-width: $breakpointMd) {
            .timeline-grid {
              grid-row-gap: 2.5rem;
              max-width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Timeline;
