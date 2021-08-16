import Button from '@components/Button';
import Typography from '@components/Typography';
import React from 'react';

interface Props {}

const ErrorContainer = (props: Props) => {
  return (
    <>
      <section className="container">
        <div className="main">
          <div className="side">
            <div className="errorTxt">
              <Typography variant="largeP">Page not found</Typography>
              <Typography variant="h2">
                The page you are looking for doesnt exist or has been moved.
              </Typography>
              <div className="btn">
                <div className="exBtn">
                  <Button>explore courses</Button>
                </div>
                <div className="exBtn">
                  <Button className="secondary">go home</Button>
                </div>
              </div>
            </div>
            <div className="er">
              <Typography variant="h1">404</Typography>
            </div>
          </div>
          <div className="circle1" />
          <div className="circle2" />
        </div>
      </section>
      <style jsx>{`
        @import '../../styles/variables.scss';
        .container {
          & .main {
            position: relative;
            overflow: hidden;
            display: flex;
            min-height: 700px;
            overflow: hidden;
            & .side {
              display: flex;
              align-items: center;
              margin: auto;
              justify-content: center;
              & .errorTxt {
                margin-right: 1rem;
                max-width: 583px;
                & .btn {
                  display: flex;
                  & .exBtn {
                    margin-right: 1rem;
                  }
                }
              }
              & .er {
                font-family: Newsreader, sans-serif;
                color: #0f437f;
                font-size: 240px;
                line-height: 1em;
                font-weight: 600;
                text-align: right;
              }
            }
            & .circle1 {
              position: absolute;
              top: -19%;
              z-index: -1;
              right: -18rem;
              min-height: 460px;
              min-width: 460px;
              border-radius: 100%;
              background-color: #fcdf69;
            }
            & .circle2 {
              position: absolute;
              left: -14%;
              z-index: -1;
              bottom: -26%;
              min-height: 430px;
              min-width: 430px;
              border-radius: 100%;
              background-color: #f99d77;
            }
          }
        }
        @media screen and (min-width: $breakpointXl) {
          .main {
          }
        }
        @media screen and (max-width: $breakpointLg) {
          .main {
            & .side {
              flex-direction: column-reverse;
              padding: 0rem 3rem;
              text-align: center;
              align-items: center;
            }
          }
        }
        @media screen and (max-width: $breakpointSm) {
          .main {
            & .side {
              padding: 0rem 2rem;
              & .errorTxt {
                & .btn {
                  flex-direction: column;
                  & .exBtn {
                    margin-bottom: 1rem;
                  }
                }
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default ErrorContainer;
