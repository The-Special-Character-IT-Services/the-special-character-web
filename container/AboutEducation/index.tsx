import Button from '@components/Button';
import Image from 'next/image';
import Images from '@components/Images';
import Typography from '@components/Typography';
import React from 'react';

interface Props {}

const data = [
  {
    id: 1,
    icon: '/vercel.svg',
    heading: 'Industry expert teachers',
    text: 'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor .',
  },
  {
    id: 2,
    icon: '/vercel.svg',
    heading: 'Students community',
    text: 'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor .',
  },
  {
    id: 3,
    icon: '/vercel.svg',
    heading: 'Up-to-date course content',
    text: 'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor .',
  },
];

const AboutEducation = (props: Props) => {
  return (
    <>
      <section className="container">
        <div className="main">
          <div className="header">
            <Typography variant="h2" style={{ fontFamily: 'auto' }}>
              About Education
            </Typography>
            <Typography className="subtitle" style={{ textAlign: 'center' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab
              dolores ratione ex dignissimos?
            </Typography>
          </div>
          <div className="content">
            <Images
              src="/abouteducation.jpeg"
              width={600}
              height={600}
              alt="education"
            />
            <aside className="sideDiv">
              <div className="abtContent">
                <Button className="buttonIcon" style={{ padding: 0 }}>
                  <Image src="/vercel.svg" height={32} width={32} alt="icon1" />
                </Button>
                <div>
                  <Typography style={{ margin: 0 }} variant="h3">
                    Industry expert teachers
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsum, consectetur.
                  </Typography>
                </div>
              </div>
              <div className="abtContent">
                <Button className="buttonIcon" style={{ padding: 0 }}>
                  <Image src="/vercel.svg" height={32} width={32} alt="icon2" />
                </Button>
                <div>
                  <Typography style={{ margin: 0 }} variant="h3">
                    Industry expert teachers
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsum, consectetur.
                  </Typography>
                </div>
              </div>
              <div className="abtContent">
                <Button className="buttonIcon" style={{ padding: 0 }}>
                  <Image src="/vercel.svg" height={32} width={32} alt="icon3" />
                </Button>
                <div>
                  <Typography style={{ margin: 0 }} variant="h3">
                    Industry expert teachers
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsum, consectetur.
                  </Typography>
                </div>
              </div>
            </aside>
          </div>
          <Button className="secondary" size="small">
            About Education
          </Button>
        </div>
      </section>
      <style jsx>{`
        @import '../../styles/variables.scss';

        .container {
          & > .main {
            display: flex;
            align-items: center;
            flex-direction: column;
            & .header {
              text-align: center;
              & .subtitle {
                line-clamp: 2;
              }
            }
          }
          & .content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
          }
          & .sideDiv {
            max-width: 519px;
          }
        }
        @media screen and (max-width: $breakpointXl) {
          .container {
            padding: 1rem;
            & .content {
              display: flex;
              flex-direction: column;
            }
            & .sideDiv {
              margin-top: 1rem;
              max-width: 700px;
              & .abtContent {
                margin-left: 0;
              }
            }
          }
        }
        @media screen and (min-width: $breakpointSm) {
          .abtContent {
            display: flex;
            align-items: start;
            margin-left: 3rem;
            margin-bottom: 3rem;
            gap: 1rem;
          }
        }
        @media screen and (max-width: $breakpointSm) {
          .abtContent {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default AboutEducation;
