import Button from '@components/Button';
import classNames from 'classnames';
import Images from '@components/Images';
import Typography from '@components/Typography';
import { AboutMissionType } from 'types';

interface Props {
  data?: AboutMissionType;
}

const AbtMission = ({ data }: Props) => {
  return (
    <>
      <section className="container">
        {data?.mission?.map((x, i) => {
          return (
            <div
              className={classNames('main', { reverse: i % 2 !== 0 })}
              key={i}>
              <Images
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${x?.image?.url}`}
                height={600}
                width={580}
                alt="Our mission"
              />
              <aside className="mission right">
                <Typography variant="h2">{x?.title}</Typography>
                <Typography>{x?.description}</Typography>
              </aside>
            </div>
          );
        })}
        <div className="circle" />
      </section>
      <style jsx>{`
        @import '../../styles/variables.scss';
        .container {
          margin: auto;
          padding: 6rem;
          position: relative;
          & .circle {
            position: absolute;
            min-width: 450px;
            min-height: 450px;
            background-color: $Secondary2;
            border-radius: 100%;
            z-index: -1;
            right: 35%;
            top: 35%;
          }

          & .main {
            display: flex;
            position: relative;

            & .mission {
              padding: 0rem 2rem 2rem 2rem;
              max-width: 640px;

              &.right {
                max-width: 610px;
              }
              &.left {
                max-width: 610px;
              }
            }
            &.reverse {
              flex-direction: row-reverse;
            }
          }
        }
        @media screen and (min-width: $breakpointXl) {
          .container {
            max-width: 1440px;

            & .mission {
              padding: 0rem 2rem 2rem 2rem;
              max-width: 640px;
              line-height: 1.8;
              &.right {
                margin-left: 2rem;
                margin-top: 5rem;
              }
              &.left {
                margin-right: 2rem;
                margin-top: 5rem;
              }
            }
          }
        }
        @media screen and (max-width: $breakpointXl) {
          .container {
            padding: 2rem;
            & .circle {
              display: none;
            }
            & .main {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              &.reverse {
                flex-direction: column-reverse;
              }

              & .mission {
                margin-top: 0rem;
                margin-bottom: 3rem;
              }
            }
          }
        }
        @media screen and (max-width: $breakpointSm) {
          .container {
            padding: 1rem;
            & .main {
              text-align: left;
              & .mission {
                padding: 0.25rem;
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default AbtMission;
