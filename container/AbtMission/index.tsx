import Images from '@components/Images';
import Typography from '@components/Typography';
import React from 'react';

interface Props {}

const AbtMission = (props: Props) => {
  return (
    <>
      <section className="container">
        <div className="main">
          <Images
            src="/mission.jpeg"
            height={600}
            width={580}
            alt="Our mission"
          />
          <aside className="mission">
            <Typography variant="h2">
              The mission behind Education platform
            </Typography>
            <Typography variant="largeP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              viverra praesent felis consequat pellentesque turpis et quisque
              platea. Eu, elit ut nunc ac mauris bibendum nulla placerat.
              Sagittis sit eu sit massa sapien, risus diam. In lorem eu sed
              euismod laoreet urna, feugiat et. Euismod sem purus rutrum in.
              Tortor varius a bibendum nisl et tellus. Aliquet elit senectus
              iaculis netus gravida.
            </Typography>
          </aside>
          <div className="circle" />
        </div>
        <div className="main reverse">
          <aside className="mission">
            <Typography variant="h2">The story of our founders</Typography>
            <Typography variant="largeP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              viverra praesent felis consequat pellentesque turpis et quisque
              platea. Eu, elit ut nunc ac mauris bibendum nulla placerat.
              Sagittis sit eu sit massa sapien, risus diam. In lorem eu sed
              euismod laoreet urna, feugiat et. Euismod sem purus rutrum in.
              Tortor varius a bibendum nisl et tellus. Aliquet elit senectus
              iaculis netus gravida.
            </Typography>
          </aside>
          <Images src="/mission2.jpeg" height={600} width={580} alt="Our mission" />
        </div>
      </section>
      <style jsx>{`
        @import '../../styles/variables.scss';
        .container {
          max-width: 1440px;
          margin: auto;
          padding: 6rem;
          & .main {
            display: flex;
            position: relative;
            &.reverse {
              display: flex;
            }
            & .circle {
              position: absolute;
              min-width: 450px;
              min-height: 450px;
              background-color: $Secondary2;
              border-radius: 100%;
              z-index: -1;
              right: 35%;
              top: 70%;
            }
            & .mission {
              padding: 0rem 2rem 2rem 2rem;
              max-width: 650px;
              margin-top: 4rem;
            }
          }
        }
        @media screen and (max-width: $breakpointXl) {
          .container {
            padding: 2rem;
            & .main {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              &.reverse {
                flex-direction: column-reverse;
              }
              & .circle {
                display: none;
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
