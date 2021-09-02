import styles from './contactForm.module.scss';
import Typography from '@components/Typography';
import TextInput from '@components/TextInput';
import Button from '@components/Button';
import Card from '@components/Card';
import classnames from 'classnames';
import Image from 'next/image';
import { ErrorMessage, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { ContactPageType } from 'types';
import Form from '@components/Form';
import { contactFields, initialValues } from '../../fields/contactFields';

const wait = time => new Promise(resolve => setTimeout(resolve, time));

interface Props {
  data?: ContactPageType;
}
export const router = useRouter();
const ContactForm = ({ data }: Props) => {
  return (
    <section className="form">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-title-wrapper">
            <Typography variant="h1" className="commonHeading">
              {data?.bannerHeading?.title}
            </Typography>
            <Typography className={styles.contactParagraph}>
              {data?.bannerHeading?.description}
            </Typography>
          </div>
          <div className="contact-content">
            <div className="card-contact">
              <div className="w-form">
                <Form
                  fields={contactFields}
                  className={styles.contactForm}
                  initialValues={initialValues}
                  onSubmit={async values => {
                    await wait(3000);
                    console.log(values);
                  }}></Form>
                {/* <form name="Contact-Form" className="contact-form">
                  <TextInput
                    label="Name"
                    name="name"
                    placeholder="Ex. Elon Musk"
                    type="text"
                  />
                  <TextInput
                    label="Email Address"
                    name="Email"
                    placeholder="Ex.elon.musk@tesla.com"
                    type="email"
                  />
                  <TextInput
                    label="Phone Number"
                    name="Phone"
                    placeholder="475-5448-1543"
                    type="tel"
                  />
                  <TextInput
                    label="Subject"
                    name="Subject"
                    placeholder="Ex. Courses"
                    type="text"
                  />
                  <TextInput
                    isTextArea
                    value={value}
                    label="Message"
                    name="Message"
                    placeholder="Write your message here..."
                  />
                 
                </form> */}
              </div>
            </div>
            <div className="contact-links-wrapper">
              {data?.contactDetails?.map(x => {
                return (
                  <Card
                    key={x.id}
                    variant="cardHover"
                    className={classnames(styles.contactLink)}>
                    <a className="contact-link">
                      <div className="image-wrapper">
                        <Image
                          alt="social Media Icon"
                          height={60}
                          width={60}
                          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${x?.icon?.url}`}
                        />
                      </div>
                      <Typography variant="label">{x?.contactType}</Typography>
                      <a href={x?.link} target="_blank" rel="noreferrer">
                        <Typography className={styles.linkText}>
                          {x?.displayText}
                        </Typography>
                      </a>
                    </a>
                  </Card>
                );
              })}
            </div>
          </div>
          <div className="bg contact-shape-1" />
          <div className="bg contact-shape-2" />
          <div className="bg contact-shape-3" />
        </div>
      </div>
      <style jsx>{`
        @import './styles/variables.scss';
        .form {
          overflow: hidden;
          padding-top: 7.25rem;
          padding-bottom: 11.5rem;
        }
        .container {
          max-width: 1257px;
          margin-right: auto;
          margin-left: auto;
          padding-right: 1.5rem;
          padding-left: 1.5rem;
        }
        .contact-wrapper {
          position: relative;
        }
        .contact-title-wrapper {
          max-width: 520px;
          margin-bottom: 2.4rem;
        }
        .contact-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .card-contact {
          border-radius: 1.25rem;
          background-color: $Neutral100;
          box-shadow: 0 5px 15px 0 rgb(30 61 96 / 3%);
          display: flex;
          width: 100%;
          max-width: 698px;
          min-height: 739px;
          margin-right: 1.75rem;
          padding: 3.75rem 2.5rem 3.75rem;
          align-items: center;
        }
        .w-form {
          margin-bottom: 1.3rem !important;
          width: 100%;
        }

        .contact-links-wrapper {
          display: flex;
          width: 100%;
          max-width: 423px;
          flex-direction: column;
          justify-content: space-between;
          align-self: stretch;
        }
        .image-wrapper {
          width: 3.75rem;
          min-height: 3.75rem;
          min-width: 3.75rem;
          margin-right: auto;
          margin-bottom: 0.5rem;
          margin-left: auto;
          border-radius: 1000px;
        }
        .bg {
          position: absolute;
        }
        .bg.contact-shape-1 {
          left: -269px;
          top: -299px;
          z-index: -1;
          width: 429px;
          min-height: 429px;
          min-width: 429px;
          border-radius: 1000px;
          background-color: $Secondary1;
        }
        .bg.contact-shape-2 {
          top: 38px;
          right: -308px;
          z-index: -1;
          width: 429px;
          min-height: 429px;
          min-width: 429px;
          border-radius: 1000px;
          background-color: $Secondary2;
        }
        .bg.contact-shape-3 {
          left: -263px;
          bottom: -90px;
          z-index: -1;
          width: 462px;
          min-height: 462px;
          min-width: 462px;
          border-radius: 1000px;
          background-color: $Secondary3;
        }

        @media screen and (max-width: $breakpointLgForMw) {
          .form {
            padding-top: 5.75rem;
            padding-bottom: 9rem;
          }
          .contact-title-wrapper {
            margin-right: auto;
            margin-left: auto;
            text-align: center;
          }
          .contact-content {
            flex-direction: column;
            align-items: center;
          }
          .card-contact {
            width: 100%;
            max-width: 720px;
            margin-right: 0;
            margin-bottom: 3.75rem;
            padding-top: 3.25rem;
            padding-bottom: 3rem;
          }
          .contact-links-wrapper {
            max-width: 720px;
            align-self: auto;
          }
          .bg.contact-shape-1 {
            left: -288px;
            top: -332px;
          }
          .bg.contact-shape-3 {
            bottom: 148px;
          }
        }
        @media screen and (max-width: $breakpointMdForMw) {
          .form {
            padding-top: 4.6rem;
            padding-bottom: 7.5rem;
          }
          .contact-title-wrapper {
            margin-bottom: 2rem;
          }
          .card-contact {
            min-height: 980px;
            margin-bottom: 3.25rem;
            padding: 2.75rem 2rem 2.75rem;
          }
          .bg.contact-shape-1 {
            left: -329px;
            top: -344px;
          }
          .bg.contact-shape-2 {
            top: 103px;
            right: -309px;
          }
          .bg.contact-shape-3 {
            left: -295px;
            bottom: 113px;
          }
        }
        @media screen and (max-width: $breakpointSmForMw) {
          .form {
            padding-top: 3.75rem;
            padding-bottom: 5.75rem;
          }
          .container {
            padding-right: 0.4rem;
            padding-left: 0.4rem;
          }
          .contact-title-wrapper {
            max-width: 358px;
          }
          .card-contact {
            padding: 2.25rem 1.5rem 2rem;
          }
          .bg.contact-shape-1 {
            left: -293px;
            top: -275px;
            width: 358px;
            min-height: 358px;
            min-width: 358px;
          }
          .bg.contact-shape-2 {
            top: 173px;
            right: -282px;
            width: 358px;
            min-height: 358px;
            min-width: 358px;
          }
          .bg.contact-shape-3 {
            bottom: 153px;
            width: 385px;
            min-height: 385px;
            min-width: 385px;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
