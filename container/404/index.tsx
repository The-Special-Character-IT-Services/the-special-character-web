import Button from '@components/Button';
import Typography from '@components/Typography';

interface Props {}

const ErrorContainer = (props: Props) => {
  return (
    <>
      <section className="container">
        <div className="main">
          <div className="side">
            <div className="errorTxt">
              <Typography variant="largeP">Page not found</Typography>
              <Typography
                variant="h2"
                className="commonHeading"
                style={{ marginTop: 0 }}>
                The page you are looking for doesnt exist or has been moved.
              </Typography>
              <div className="btn">
                <Button style={{ marginRight: '1rem', marginBottom: '1rem' }}>
                  explore courses
                </Button>
                <Button className="secondary">go home</Button>
              </div>
            </div>
            <div className="er">
              <Typography variant="title404">404</Typography>
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
            min-height: 37.5rem;
            overflow: hidden;
            & .side {
              display: flex;
              flex: 1;
              align-items: center;
              & .errorTxt {
                max-width: 600px;

                & .btn {
                  align-items: flex-start;
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
              z-index: -1;
              min-height: 460px;
              min-width: 460px;
              border-radius: 100%;
              background-color: #fcdf69;
            }
            & .circle2 {
              position: absolute;
              z-index: -1;
              min-height: 430px;
              min-width: 430px;
              border-radius: 100%;
              background-color: #f99d77;
            }
          }
        }
        @media screen and (min-width: $breakpointXl) {
          .side {
            max-width: 1209px;
            margin: 0px auto;
            justify-content: space-between;
          }
        }
        @media screen and (max-width: $breakpointXl) {
          .side {
            justify-content: space-between;
            margin: 0px 2rem;
          }
        }
        @media screen and (min-width: $breakpointLg) {
          .main {
            & .circle1 {
              top: -20%;
              right: -16%;
            }
            & .circle2 {
              left: -14%;
              bottom: -40%;
            }
          }
        }
        @media screen and (max-width: $breakpointLg) {
          .main {
            & .side {
              margin: 0rem 9.3rem 0rem 7.1rem;
              justify-content: space-between;
            }
            & .circle1 {
              top: -30%;
              right: -30%;
            }
            & .circle2 {
              left: -30%;
              bottom: -30%;
            }

            & .side {
              flex-direction: column-reverse;
              margin: auto;
              padding: 0rem 3rem;
              text-align: center;
              align-items: center;
              & .errorTxt {
                & .btn {
                  display: block;
                }
              }
            }
          }
        }
        @media screen and (max-width: $breakpointSm) {
          .main {
            & .circle1 {
              top: -20rem;
              right: -20rem;
            }
            & .circle2 {
              left: -20rem;
              bottom: -20rem;
            }
            & .side {
              padding: 0rem 2rem;
              & .errorTxt {
                & .btn {
                  flex-direction: column;
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
