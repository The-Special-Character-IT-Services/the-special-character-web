import Button from '@components/Button';
import Card from '@components/Card';
import Typography from '@components/Typography';
import Image from 'next/image';
import React, { Fragment } from 'react';

interface Props {}

const Values = (props: Props) => {
  return (
    <section className="container">
      <div className="window">
        <div className="head">
          <Typography style={{ color: '#fff' }} variant="h2">
            Our work values
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </Typography>
        </div>
        <div className="main">
          <Card>
            <div className="cardSection">
              <div className="cardBtn">
                <Button className="buttonIcon">
                  <Image src="/bulb.svg" height={60} width={60} alt="none" />
                </Button>
                <button className="but">01</button>
              </div>
              <div>
                <Typography variant="h3">FirstDiv</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
                  egestas non consequat pellentesque iaculis nunc, est, mollis.
                  Nulla.
                </Typography>
              </div>
            </div>
          </Card>
          <Card>
            <div className="cardSection">
              <div className="cardBtn">
                <Button className="buttonIcon">
                  <Image src="/correct.svg" height={60} width={60} alt="none" />
                </Button>
                <button className="but">02</button>
              </div>
              <div>
                <Typography variant="h3">SecondDiv</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
                  egestas non consequat pellentesque iaculis nunc, est, mollis.
                  Nulla.
                </Typography>
              </div>
            </div>
          </Card>
          <Card>
            <div className="cardSection">
              <div className="cardBtn">
                <Button className="buttonIcon">
                  <Image src="/world.svg" height={60} width={60} alt="none" />
                </Button>
                <button className="but">03</button>
              </div>
              <div>
                <Typography variant="h3">ThirdDiv</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
                  egestas non consequat pellentesque iaculis nunc, est, mollis.
                  Nulla.
                </Typography>
              </div>
            </div>
          </Card>
          <Card>
            <div className="cardSection">
              <div className="cardBtn">
                <Button className="buttonIcon">
                  <Image src="/search.svg" height={60} width={60} alt="none" />
                </Button>
                <button className="but">04</button>
              </div>
              <div>
                <Typography variant="h3">FourthDiv</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
                  egestas non consequat pellentesque iaculis nunc, est, mollis.
                  Nulla.
                </Typography>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <style jsx>{`
        @import '../../styles/variables.scss';
        .container {
          background-color: $Neutral700;
          & .window {
            padding: 3rem 7rem;
            max-width: 1260px;
            margin: auto;
            & .head {
              text-align: center;
              color: $Neutral100;
              & h2 {
                color: $Neutral100;
              }
            }
            & .main {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
              grid-gap: 3rem;
              & .cardBtn {
                display: flex;
                justify-content: space-between;
              }
              & .but {
                background: transparent;
                height: 4rem;
                width: 5rem;
                border-radius: 100px;
                border: solid 1px $Neutral300;
                font-size: large;
              }
              & .cardSection {
                padding: 2rem;
              }
            }
          }
        }
        @media screen and (max-width: $breakpointSm) {
          .container {
            & .window {
              padding: 1rem;
              & .main {
                grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
              }
            }
          }
        }
      `}</style>
    </section>
  );
};

export default Values;
