import Button from '@components/Button';
import Images from '@components/Images';
import Typography from '@components/Typography';
import Link from 'next/link';
import { useRef } from 'react';
import styles from './banner.module.scss';
import router from 'next/router';
import { HomeBannerType } from 'types';
import CustomImage from '@components/CustomImage';
interface Props {
  data: HomeBannerType;
}

const Banner = ({ data }) => {
  return (
    <section className="banner">
      <div className="container">
        <div className="leftDiv">
          <Typography variant="h1" style={{ marginTop: 0, fontFamily: 'auto' }}>
            {data?.bannerDetails?.title}
          </Typography>
          <Typography>{data?.bannerDetails?.description}</Typography>
          <div className="btnDiv">
            <Button
              onClick={() => {
                router.push(data?.explore?.link);
              }}>
              {data?.explore?.buttonText}
            </Button>
            <Button
              className="secondary"
              onClick={() => {
                router.push(data?.learn?.link);
              }}>
              {data?.learn?.buttonText}
            </Button>
          </div>
        </div>
        <div
          style={{ borderRadius: '2rem', overflow: 'hidden', display: 'flex' }}>
          <CustomImage
            src={`${data.bannerImage?.name}`}
            height={692}
            width={546}
            alt="Image"
          />
        </div>
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
            left: -370px;
            top: -370px;
            z-index: -1;
            width: 640px;
            min-height: 640px;
            min-width: 640px;
            border-radius: 1000px;
            background-color: $Secondary2;
            position: absolute;
          }
          & > .circle2 {
            right: -300px;
            bottom: -350px;
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
            & > .circle {
              left: -530px;
              top: -370px;
            }
            & > .circle2 {
              right: -450px;
              bottom: -370px;
            }
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
            & > .circle {
              left: -530px;
              top: -400px;
            }
            & > .circle2 {
              right: -470px;
              bottom: -400px;
            }
          }
        }
        @media screen and (max-width: $breakpointMd) {
          .banner {
            & > .circle2 {
              right: -450px;
              bottom: -400px;
            }
          }
          .leftDiv {
            margin-bottom: 1.875rem;
          }
        }
        @media screen and (max-width: $breakpointSm) {
          .banner {
            padding-top: 4rem;
            padding-bottom: 4rem;
            align-items: stretch;
            & > .circle {
              left: -550px;
              top: -464px;
            }
            & > .circle2 {
              right: -450px;
              bottom: -430px;
            }
            & > .container {
              max-width: 100%;
              padding-right: 1rem;
              padding-left: 1rem;
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
