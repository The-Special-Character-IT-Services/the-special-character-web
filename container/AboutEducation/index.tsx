import Button from '@components/Button';
import Image from 'next/image';
import Link from 'next/link';
import Images from '@components/Images';
import Typography from '@components/Typography';
import React from 'react';

interface Props {}

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
                <Button className="buttonIcon">
                  <Image src="/about1.svg" height={60} width={60} alt="icon1" />
                </Button>
                <div>
                  <Typography
                    style={{ margin: 0, marginBottom: '0.5rem' }}
                    variant="h3">
                    Industry expert teachers
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsum, consectetur.
                  </Typography>
                </div>
              </div>
              <div className="abtContent">
                <Button className="buttonIcon">
                  <Image src="/about2.svg" height={60} width={60} alt="icon2" />
                </Button>
                <div>
                  <Typography
                    style={{ margin: 0, marginBottom: '0.5rem' }}
                    variant="h3">
                    Industry expert teachers
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsum, consectetur.
                  </Typography>
                </div>
              </div>
              <div className="abtContent">
                <Button className="buttonIcon">
                  <Image src="/about3.svg" height={60} width={60} alt="icon3" />
                </Button>
                <div>
                  <Typography
                    style={{ margin: 0, marginBottom: '0.5rem' }}
                    variant="h3">
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
          {/* <Link href="/about"> */}
          <Button className="secondary">About Education</Button>
          {/* </Link> */}
        </div>
      </section>
      <style jsx>{`
        @import '../../styles/variables.scss';

        .container {
          margin-top: 2rem;
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
            margin-bottom: 2rem;
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
            gap: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default AboutEducation;
