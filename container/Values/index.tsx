import Button from '@components/Button';
import Card from '@components/Card';
import Typography from '@components/Typography';
import Image from 'next/image';
import { Fragment } from 'react';
import { AboutValuesType } from 'types';

interface Props {
  data?: AboutValuesType;
}

const Values = ({ data }: Props) => {
  if (!data) {
    return null;
  }
  return (
    <section className="container">
      <div className="window">
        <div className="head">
          <Typography style={{ color: '#fff' }} variant="h2">
            {data.heading.title}
          </Typography>
          <Typography>{data.heading.description}</Typography>
        </div>
        <div className="main">
          {data?.card?.map((x, i) => {
            return (
              <Card key={x.id}>
                <div className="cardSection">
                  <div className="cardBtn">
                    <Button className="buttonIcon">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${x.icon.url}`}
                        height={60}
                        width={60}
                        alt="none"
                      />
                    </Button>
                    <button className="but">{i + 1}</button>
                  </div>
                  <div>
                    <Typography variant="h3">{x.title}</Typography>
                    <Typography>{x.description}</Typography>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        @import '../../styles/variables.scss';
        .container {
          background-color: $Neutral700;
          & .window {
            padding: 4rem 7rem;
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
                flex: 1;
              }
            }
          }
        }
        @media screen and (max-width: $breakpointSm) {
          .container {
            & .window {
              padding: 3rem 1rem;
              & .main {
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              }
            }
          }
        }
      `}</style>
    </section>
  );
};

export default Values;
