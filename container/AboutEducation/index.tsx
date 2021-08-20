import Button from '@components/Button';
import Image from 'next/image';
import Link from 'next/link';
import Images from '@components/Images';
import Typography from '@components/Typography';
import React from 'react';
import router from 'next/router';

interface Props {
  data?: Object;
}

const AboutEducation = ({ data }: Props) => {
  const goToAbout = () => {
    router.push('/about');
  };
  return (
    <>
      <section className="container">
        <div className="main">
          <div className="header">
            <Typography variant="h2" style={{ fontFamily: 'auto' }}>
              {data?.heading?.title}
            </Typography>
            <Typography className="subtitle" style={{ textAlign: 'center' }}>
              {data?.heading?.description}
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
              {data.educationList.map(x => (
                <div key={x.id} className="abtContent">
                  <Button className="buttonIcon">
                    <Image
                      src="/about1.svg"
                      height={60}
                      width={60}
                      alt="icon1"
                    />
                  </Button>
                  <div>
                    <Typography
                      style={{ margin: 0, marginBottom: '0.5rem' }}
                      variant="h3">
                      {x.title}
                    </Typography>
                    <Typography>{x.description}</Typography>
                  </div>
                </div>
              ))}
            </aside>
          </div>
          <Button className="secondary" onClick={goToAbout}>
            {data.aboutEducation.buttonText}
          </Button>
        </div>
      </section>
      <style jsx>{`
        @import '../../styles/variables.scss';

        .container {
          padding: 5rem 0rem;
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
          }
          & .sideDiv {
            max-width: 519px;
          }
        }
        @media screen and (min-width: $breakpointXl) {
          .container {
            & .content {
              margin-bottom: 3rem;
            }
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
              margin-top: 3rem;
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
            margin-bottom: 1rem;
            gap: 1rem;
          }
        }
        @media screen and (max-width: $breakpointSm) {
          .container {
            & .abtContent {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              margin-bottom: 2.5rem;
              gap: 1rem;
            }
            & .content {
            }
          }
        }
      `}</style>
    </>
  );
};

export default AboutEducation;
