import styles from './form.module.scss';
import Typography from '@components/Typography';
import TextInput from '@components/TextInput';
import Button from '@components/Button';
import Card from '@components/Card';
import classnames from 'classnames';
import Image from 'next/image';
import { ErrorMessage, useFormik } from 'formik';
import { useRouter, withRouter } from 'next/router';

interface Props {}

const Form = (props: Props) => {
  const router = useRouter();
  const {
    query: { value },
  } = router;
  return (
    <section className="form">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-title-wrapper">
            <Typography variant="h1" className="commonHeading">
              Get in touch!
            </Typography>
            <Typography className={styles.contactParagraph}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </Typography>
          </div>
          <div className="contact-content">
            <div className="card-contact">
              <div className="w-form">
                <form
                  id="Contact-Form"
                  name="Contact-Form"
                  className="contact-form">
                  <TextInput
                    label="Name"
                    id="Name"
                    name="Name"
                    placeholder="Ex. Elon Musk"
                    type="text"
                  />
                  <TextInput
                    label="Email Address"
                    id="Email"
                    name="Email"
                    placeholder="Ex.elon.musk@tesla.com"
                    type="email"
                  />
                  <TextInput
                    label="Phone Number"
                    id="Phone"
                    name="Phone"
                    placeholder="475-5448-1543"
                    type="tel"
                  />
                  <TextInput
                    label="Subject"
                    id="Subject"
                    name="Subject"
                    placeholder="Ex. Courses"
                    type="text"
                  />
                  <div className="text-input-col">
                    <TextInput
                      isTextArea
                      value={value}
                      className={styles.mb}
                      label="Message"
                      id="Message"
                      name="Message"
                      placeholder="Write your message here..."
                    />
                    <Button>Submit</Button>
                  </div>
                </form>
              </div>
            </div>
            <div className="contact-links-wrapper">
              <Card
                variant="cardHover"
                className={classnames(styles.contactLink)}>
                <a
                  href="mailto:sanfrancisco@education.com"
                  className="contact-link">
                  <div className="image-wrapper">
                    <Image
                      height={60}
                      width={60}
                      src="https://assets.website-files.com/607de2d8e8911e32707a3efe/6082f9645a3f760c9e688d89_icon-1-contact-education-x-template.svg"
                    />
                  </div>
                  <Typography variant="label">Email</Typography>
                  <Typography className={styles.linkText}>
                    sanfrancisco@education.com
                  </Typography>
                </a>
              </Card>
              <Card
                variant="cardHover"
                className={classnames(styles.contactLink)}>
                <a href="tel:+475-5856-1237" className="contact-link">
                  <div className="image-wrapper">
                    <Image
                      height={60}
                      width={60}
                      src="https://assets.website-files.com/607de2d8e8911e32707a3efe/6082f9641320d136537b1c33_icon-2-contact-education-x-template.svg"
                    />
                  </div>
                  <Typography variant="label">Phone</Typography>
                  <Typography className={styles.linkText}>
                    475-5856-1237
                  </Typography>
                </a>
              </Card>
              <Card
                variant="cardHover"
                className={classnames(styles.contactLink, styles.address)}>
                <a href="/about/#Map" className="contact-link">
                  <div className="image-wrapper">
                    <Image
                      height={60}
                      width={60}
                      src="https://assets.website-files.com/607de2d8e8911e32707a3efe/6082f9644615865bb39ee06a_icon-3-contact-education-x-template.svg"
                    />
                  </div>
                  <Typography variant="label">Address</Typography>
                  <Typography className={styles.linkText}>
                    51 Osceola Ln, San Francisco, California(CA), 94124
                  </Typography>
                </a>
              </Card>
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
          margin-bottom: 0;
          width: 100%;
        }
        .contact-form {
          display: grid;
          grid-auto-columns: 1fr;
          grid-column-gap: 1.5rem;
          grid-row-gap: 2.5rem;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
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
        @media screen and (min-width: $breakpointMd) {
          .text-input-col {
            grid-column: 1/3;
          }
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
          .contact-form {
            grid-template-columns: 1fr;
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

export default withRouter(Form);
