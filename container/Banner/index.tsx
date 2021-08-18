import Button from '@components/Button';
import Images from '@components/Images';
import Typography from '@components/Typography';
import { useRef } from 'react';
import styles from './banner.module.scss';

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="leftDiv">
          <Typography variant="h1" style={{ marginTop: 0, fontFamily: 'auto' }}>
            Grow your skills, define your future
          </Typography>
          <Typography>
            Presenting Academy, the tech school of the future. We teach you the
            right skills to be prepared for tomorrow.
          </Typography>
          <div className="btnDiv">
            <Button>Explore Courses</Button>
            <Button className="secondary">Learn More</Button>
          </div>
        </div>
        <Images
          src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607e15d7c0c9f4037bde6f44_image-home-hero-education-x-template-p-800.jpeg"
          height={692}
          width={546}
          alt="Banner"
        />
      </div>
      <div className="circle" />
      <div className="circle2" />
      <div className="bgBlue" />
      <style jsx>{`
        @import '../../styles/variables.scss';
        .banner {
          position: relative;
          overflow: hidden;
          padding-top: 7.938rem;
          padding-bottom: 7.938rem;
          & > .circle {
            left: -550px;
            top: -300px;
            z-index: -1;
            width: 640px;
            min-height: 640px;
            min-width: 640px;
            border-radius: 1000px;
            background-color: $Secondary2;
            position: absolute;
          }
          & > .circle2 {
            right: -400px;
            bottom: -400px;
            z-index: -1;
            width: 645px;
            min-height: 645px;
            min-width: 645px;
            border-radius: 1000px;
            background-color: $Secondary3;
            position: absolute;
          }
          & > .container {
            max-width: 1209px;
            margin-right: auto;
            margin-left: auto;
            padding-right: 1.5rem;
            padding-left: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex: 1;

            & > .leftDiv {
              max-width: 46%;
              min-width: 483px;
              margin-right: 1.875rem;
              & > .btnDiv {
                display: flex;
                gap: 0.75rem;
                flex-wrap: wrap;
              }
            }
          }
          & > .bgBlue {
            position: absolute;
          }
        }
        @media screen and (max-width: $breakpointXl) {
          .banner {
            & > .bgBlue {
              top: 0;
              right: 0;
              bottom: 0;
              z-index: -2;
              width: 39%;
              background-color: $Primary1;
            }
          }
        }
        @media screen and (max-width: $breakpointLg) {
          .banner {
            padding-top: 6rem;
            padding-bottom: 6rem;
            & > .container {
              justify-content: center;
              max-width: 100%;
              flex-direction: column;
              & > .leftDiv {
                text-align: center;
                margin-right: 0;
                margin-bottom: 2.5rem;
              }
            }
            & > .bgBlue {
              left: 0;
              top: auto;
              width: 100%;
              min-height: 550px;
            }
          }
        }
        @media screen and (max-width: $breakpointMd) {
          .leftDiv {
            margin-bottom: 1.875rem;
          }
        }
        @media screen and (max-width: $breakpointSm) {
          .banner {
            align-items: stretch;
            & > .circle {
              left: -550px;
              top: -464px;
            }
            & > .container {
              max-width: 100%;
              & > .leftDiv {
                max-width: 535px;
                min-width: auto;
                margin-right: 0;
                margin-bottom: 2.5rem;
              }
            }
            & > .bgBlue {
              min-height: 279px;
            }
          }
        }
      `}</style>
    </section>
  );
};

export default Banner;
