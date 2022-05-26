import styles from './enrollForm.module.scss';
import Typography from '@components/Typography';
import Button from '@components/Button';
import Card from '@components/Card';
import classnames from 'classnames';
import Image from 'next/image';
import { ErrorMessage, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { EnrollPageType } from 'types';
import Form from '@components/Form';
import {
  enrollFields,
  enrollInitialValues,
  EnrollInitialType,
} from '../../fields/enrollFields';

const EnrollFrom = () => {
  const router = useRouter();

  return (
    <section className="form">
      <div className="container">
        <div className="enroll-wrapper">
          <div className="enroll-title-wrapper">
            <Typography variant="h1" className="commonHeading">
              Student Entry Form
            </Typography>
          </div>
          <div className="enroll-content">
            <div className="card-enroll">
              <div className="w-form">
                <Form<EnrollInitialType>
                  fields={enrollFields}
                  className={styles.enrollForm}
                  initialValues={{
                    ...enrollInitialValues,
                    message: `${router?.query?.value}`,
                  }}
                  onSubmit={async values => {
                    console.log(values);
                  }}></Form>
              </div>
            </div>
          </div>
          <div className="bg enroll-shape-1" />
          <div className="bg enroll-shape-2" />
          <div className="bg enroll-shape-3" />
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
          display: 'flex';
        }
        .enroll-wrapper {
          position: relative;
        }
        .enroll-title-wrapper {
          margin-bottom: 2.4rem;
          align-self: center;
          display: flex;
          justify-content: center;
        }
        .enroll-content {
          display: flex;
          justify-content: center;
        }
        .w-form {
          margin-bottom: 1.3rem !important;
          width: 100%;
        }

        .enroll-links-wrapper {
          display: flex;
          width: 100%;
          max-width: 423px;
          flex-direction: column;
          justify-content: space-between;
          align-self: stretch;
        }
        .bg {
          position: absolute;
        }
        .bg.enroll-shape-1 {
          left: -269px;
          top: -299px;
          z-index: -1;
          width: 429px;
          min-height: 429px;
          min-width: 429px;
          border-radius: 1000px;
          background-color: $Secondary1;
        }
        .bg.enroll-shape-2 {
          top: 38px;
          right: -308px;
          z-index: -1;
          width: 429px;
          min-height: 429px;
          min-width: 429px;
          border-radius: 1000px;
          background-color: $Secondary2;
        }
        .bg.enroll-shape-3 {
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
          .enroll-title-wrapper {
            margin-right: auto;
            margin-left: auto;
            text-align: center;
          }
          .enroll-content {
            flex-direction: column;
            align-items: center;
          }
          .enroll-links-wrapper {
            max-width: 720px;
            align-self: auto;
          }
          .bg.enroll-shape-1 {
            left: -288px;
            top: -332px;
          }
          .bg.enroll-shape-3 {
            bottom: 148px;
          }
        }
        @media screen and (max-width: $breakpointMdForMw) {
          .form {
            padding-top: 4.6rem;
            padding-bottom: 7.5rem;
          }
          .enroll-title-wrapper {
            margin-bottom: 2rem;
          }
          .card-enroll {
            min-height: 980px;
            margin-bottom: 3.25rem;
            padding: 2.75rem 2rem 2.75rem;
          }
          .bg.enroll-shape-1 {
            left: -329px;
            top: -344px;
          }
          .bg.enroll-shape-2 {
            top: 103px;
            right: -309px;
          }
          .bg.enroll-shape-3 {
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
          .enroll-title-wrapper {
            max-width: 358px;
          }
          .card-enroll {
            padding: 2.25rem 1.5rem 2rem;
          }
          .bg.enroll-shape-1 {
            left: -293px;
            top: -275px;
            width: 358px;
            min-height: 358px;
            min-width: 358px;
          }
          .bg.enroll-shape-2 {
            top: 173px;
            right: -282px;
            width: 358px;
            min-height: 358px;
            min-width: 358px;
          }
          .bg.enroll-shape-3 {
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

export default EnrollFrom;
