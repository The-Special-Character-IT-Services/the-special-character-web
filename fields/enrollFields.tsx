import DatePickerField from '@components/DatePickerComponent';
import EnrollDropdown from '@components/EnrollDropdown';
import TextInput from '@components/TextInput';
import UploadeImage from '@components/UploadImage';
import styles from '@container/EnrollForm/enrollForm.module.scss';
import { FieldAttributes, FormikValues } from 'formik';
import { useState } from 'react';

const CheckBox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div className="gridColumn">
        <input
          type="checkbox"
          value="Use different address"
          onClick={() => setChecked(!checked)}
        />
        <label>Use different address</label>
      </div>
      {checked && (
        <>
          <div className={`${styles.textInput} input-wrapper`}>
            <label className="label">Street Address 1</label>
            <input
              className="contactInput"
              type="text"
              placeholder="Ex. 206, The Special Character"
            />
          </div>
          <div className={`${styles.textInput} input-wrapper`}>
            <label className="label">Street Address 2</label>
            <input
              className="contactInput"
              type="text"
              placeholder="Ex. Jagatpur Road"
            />
          </div>
          <div className={`${styles.textInput} input-wrapper`}>
            <label className="label">City</label>
            <input
              className="contactInput"
              type="text"
              placeholder="Ex. Ahmedabad"
            />
          </div>
          <div className={`${styles.textInput} input-wrapper`}>
            <label className="label">State</label>
            <input
              className="contactInput"
              type="text"
              placeholder="Ex. Gujarat"
            />
          </div>
          <div className={`${styles.textInput} input-wrapper gridColumn`}>
            <label className="label">Country</label>
            <input
              className="contactInput"
              type="text"
              placeholder="Ex. India"
            />
          </div>
        </>
      )}
      <style jsx>
        {`
          @import './../styles/variables.scss';
          .input-wrapper {
            & > label {
              display: block;
              margin-bottom: 1rem;
              color: $Neutral700;
              line-height: 1.111em;
              font-weight: 700;
            }
            & > .contactInput {
              min-height: 4rem;
              max-width: 100%;
              min-width: 100%;
              margin-bottom: 0px;
              padding-right: 1.875rem;
              padding-left: 1.875rem;
              border: 1px solid transparent;
              border-radius: 6.25rem;
              background-color: $Neutral200;
              color: $Neutral800;
              font-size: 18px;
              line-height: 1.111em;
              &:hover,
              &:focus {
                border-color: $Neutral400;
                transition-duration: 300ms;
                outline: 0;
              }
              &.error {
                border-color: $danger;
              }
            }
          }
          .gridColumn {
            grid-column: 1/3;
          }
          @media screen and (max-width: $breakpointMd) {
            .gridColumn {
              grid-column: 1/2;
            }
          }
          @media screen and (max-width: $breakpointSm) {
            .input-wrapper {
              & > .contactInput {
                padding-right: 0.9rem;
                padding-left: 0.9rem;
              }
            }
          }
        `}
      </style>
    </>
  );
};

export type EnrollFieldType = {
  name: string;
  label: string;
  placeholder: string;
  component: JSX.Element;
  validate: (value: FormikValues) => string;
  type?: string;
};

export type EnrollInitialType = {
  name: string;
  dob: string;
  college: string;
  enrollmentNumber: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  state: string;
  country: string;
  guardianName: string;
  guardianPhoneNumber: string;
  currentResidentialAddress: string;
  medicalNotes: string;
  email: string;
  fb: string;
  instagram: string;
  linkedin: string;
  twitter: string;
};

export type EnrollFieldsTypes = {
  label: string;
} & FieldAttributes<EnrollInitialType>;

export const enrollFields: any = [
  {
    name: 'name',
    label: 'Name',
    placeholder: 'Ex. Elon Musk',
    divClassName: `${styles.textInput}`,
    component: TextInput as React.ComponentType,
    validate: (value: string) => {
      if (!value) {
        return 'Please Enter Name.';
      }
      return '';
    },
  },
  {
    name: 'dob',
    label: 'Date of Birth',
    placeholder: 'Ex.DD/MM/YYYY',
    divClassName: `${styles.textInput}`,
    component: DatePickerField,
    validate: (value: string) => {
      if (!value) {
        return 'Please Enter Date of Birth.';
      }
      return '';
    },
  },
  {
    name: 'college',
    label: 'College',
    placeholder: 'Ex. Nirma University',
    divClassName: `${styles.textInput}`,
    component: TextInput,
    validate: (value: string) => {
      if (!value) {
        return 'Please Enter Your College Name.';
      }
      return '';
    },
  },
  {
    name: 'enrollmentNumber',
    label: 'Enrollment Number',
    placeholder: 'Ex. 180770107001',
    divClassName: `${styles.textInput}`,
    component: TextInput,
    validate: (value: string) => {
      if (!value) {
        return 'Please Enter Enrollment Number.';
      }
      return '';
    },
  },
  {
    name: 'streetAddress1',
    divClassName: `${styles.textInput}`,
    label: 'Street Address 1',
    placeholder: 'Ex. B-206,The Special Character',
    component: TextInput,
    validate: (value: string) => {
      if (!value) {
        return 'Please Enter Street Address.';
      }
      return '';
    },
  },
  {
    name: 'streetAddress2',
    divClassName: `${styles.textInput}`,
    label: 'Street Address 2',
    placeholder: 'Ex. Jagatpur Road',
    component: TextInput,
    validate: (value: string) => {
      if (!value) {
        return 'Please Enter Street Address.';
      }
      return '';
    },
  },
  {
    name: 'city',
    divClassName: `${styles.textInput}`,
    label: 'City',
    placeholder: 'Ex. Ahmedabad',
    component: TextInput,
    validate: (value: string) => {
      if (!value) {
        return 'Please Enter City.';
      }
      return '';
    },
  },
  {
    name: 'state',
    divClassName: `${styles.textInput}`,
    label: 'State',
    placeholder: 'Ex. Gujarat',
    component: TextInput,
    validate: (value: string) => {
      if (!value) {
        return 'Please Enter State.';
      }
      return '';
    },
  },
  {
    name: 'country',
    divClassName: `${styles.textInput}`,
    label: 'Country',
    placeholder: 'Ex. India',
    component: TextInput,
    validate: (value: string) => {
      if (!value) {
        return 'Please Enter Country.';
      }
      return '';
    },
  },
  {
    name: 'currentResidentialAddress',
    component: CheckBox,
  },
  {
    name: 'guardianName',
    label: 'Guardian Name',
    placeholder: 'Ex. Elon Musk',
    divClassName: `${styles.textInput}`,
    component: TextInput as React.ComponentType,
    validate: (value: string) => {
      if (!value) {
        return 'Please Enter Guardian Name.';
      }
      return '';
    },
  },
  {
    name: 'guardianPhoneNumber',
    label: 'Guardian Phone Number',
    placeholder: '123-4567-890',
    divClassName: `${styles.textInput}`,
    component: TextInput,
    type: 'tel',
    validate: (value: string) => {
      if (!value) {
        return 'Please Enter Guardian Phone Number.';
      }
      return '';
    },
  },
  {
    name: 'medicalNotes',
    divClassName: `${styles.textInputCol}`,
    label: 'Medical Notes(if any)',
    placeholder: 'Write medical notes here(if any)...',
    component: TextInput,
    isTextArea: true,
  },
  {
    name: 'email',
    label: 'Email Address',
    placeholder: 'Ex.elon.musk@tesla.com',
    divClassName: `${styles.textInput}`,
    component: TextInput,
    type: 'email',
    validate: (value: string) => {
      if (!value) {
        return 'Please Enter Email Address.';
      }
      return '';
    },
  },
  {
    name: 'fb',
    label: 'Facebook(optional)',
    placeholder: 'Enter your facebook ID ',
    divClassName: `${styles.textInput}`,
    component: TextInput,
  },
  {
    name: 'instagram',
    label: 'Instagram(optional)',
    placeholder: 'Enter your instagram ID ',
    divClassName: `${styles.textInput}`,
    component: TextInput,
  },
  {
    name: 'linkedin',
    label: 'LinkedIn(optional)',
    placeholder: 'Enter your linkedin ID ',
    divClassName: `${styles.textInput}`,
    component: TextInput,
  },
  {
    name: 'twitter',
    label: 'Twitter(optional)',
    placeholder: 'Enter your twitter ID ',
    divClassName: `${styles.textInput}`,
    component: TextInput,
  },
  {
    name: 'Choose Options',
    placeholder: 'Choose Options',
    label: 'Technology Interests',
    component: EnrollDropdown,
    divClassName: `${styles.textInput}`,
  },
  {
    name: 'Choose Options',
    placeholder: 'Choose Options',
    label: 'Course Enrolling for',
    component: EnrollDropdown,
    divClassName: `${styles.textInput}`,
  },
  {
    name: 'image-upload',
    label: 'Upload photo',
    divClassName: `${styles.textInput} ${styles.imageUpload}`,
    component: UploadeImage,
  },
  {
    name: 'image-upload',
    label: 'Upload Aadhar',
    divClassName: `${styles.textInput} ${styles.imageUpload}`,
    component: UploadeImage,
  },
];

export const enrollInitialValues = {
  name: '',
  dob: '',
  college: '',
  enrollmentNumber: '',
  streetAddress1: '',
  streetAddress2: '',
  city: '',
  state: '',
  country: '',
  guardianName: '',
  guardianPhoneNumber: '',
  currentResidentialAddress: '',
  medicalNotes: '',
  email: '',
  fb: '',
  instagram: '',
  linkedin: '',
  twitter: '',
  technologyInterests: '',
  courseEnrollingfor: '',
};
