import Accordian from '@components/Accordian';
import Typography from '@components/Typography';
import { ContactPageType } from 'types';
import styles from './faqs.module.scss';

interface Props {
  data?: ContactPageType;
}

const FAQs = ({ data }: Props) => {
  console.log(data?.contactPage?.faqsAccordian);

  return (
    <section className="faqs">
      <div className="container-small">
        <Typography variant="h2" className="commonHeading">
          {data?.contactPage?.faqsHeading?.title}
        </Typography>
        <Typography className={styles.paragraph}>
          {data?.contactPage?.faqsHeading?.description}
        </Typography>
      </div>
      <div className="container-medium">
        {data?.contactPage?.faqsAccordian?.map(x => {
          return (
            <Accordian key={x.id} className={styles.mr0} label={x?.title}>
              {x?.description}
            </Accordian>
          );
        })}
      </div>
      <style jsx>{`
        @import './styles/variables.scss';

        .faqs {
          padding-top: 11.5rem;
          padding-bottom: 11.5rem;
          background-color: $Neutral200;
        }
        .container-small {
          margin-bottom: 60px;
          text-align: center;
          max-width: 585px;
          margin-right: auto;
          margin-left: auto;
          padding-right: 1.5rem;
          padding-left: 1.5rem;
        }
        .container-medium {
          max-width: 813px;
          margin-right: auto;
          margin-left: auto;
          padding-right: 1.5rem;
          padding-left: 1.5rem;
        }
        @media screen and (max-width: $breakpointLgForMw) {
          .faqs {
            padding-top: 9rem;
            padding-bottom: 9rem;
          }
        }
        @media screen and (max-width: $breakpointMdForMw) {
          .faqs {
            padding-top: 7.5rem;
            padding-bottom: 7.5rem;
          }
          .container-small {
            margin-bottom: 3.25rem;
          }
        }
        @media screen and (max-width: $breakpointSmForMw) {
          .faqs {
            padding-top: 6rem;
            padding-bottom: 6rem;
          }
          .container-small {
            margin-bottom: 2.5rem;
            padding-right: 1rem;
            padding-left: 1rem;
          }
          .container-medium {
            padding-right: 1rem;
            padding-left: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQs;
