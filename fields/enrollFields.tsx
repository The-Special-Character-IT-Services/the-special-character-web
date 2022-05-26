import EnrollDropdown from '@components/EnrollDropdown';
import TextInput, { TextInputProps } from '@components/TextInput';
import styles from '@container/EnrollForm/enrollForm.module.scss';
import { FieldAttributes, FieldProps, FormikValues } from 'formik';
import { ComponentType } from 'react';

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
  homeAddress: string;
  guardianName: string;
  guardianPhoneNumber: string;
  currentResidentialAddress: string;
  bloodGroup: string;
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
    component: TextInput,
    type: '',
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
    name: 'homeAddress',
    divClassName: `${styles.textInputCol}`,
    label: 'Home Address',
    placeholder: 'Write your home address here...',
    component: TextInput,
    isTextArea: true,
    validate: (value: string) => {
      if (!value) {
        return 'Please Enter Home Address.';
      }
      return '';
    },
  },
  {
    name: 'currentResidentialAddress',
    divClassName: `${styles.textInputCol}`,
    label: 'Current Residential Address',
    placeholder: 'Write your current residential address here...',
    component: TextInput,
    isTextArea: true,
    validate: (value: string) => {
      if (!value) {
        return 'Please Enter Current Residential Address.';
      }
      return '';
    },
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
    name: 'bloodGroup',
    label: 'Blood Group',
    placeholder: 'Ex. O positive',
    divClassName: `${styles.textInput}`,
    component: TextInput as React.ComponentType,
    validate: (value: string) => {
      if (!value) {
        return 'Please Enter Your Blood Group.';
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
    name: 'technologyInterests',
    label: 'Technology Interests',
    component: EnrollDropdown,
    divClassName: `${styles.textInput}`,
  },
  {
    name: 'courseEnrollingfor',
    label: 'Course Enrolling for',
    component: EnrollDropdown,
    divClassName: `${styles.textInput}`,
  },
  {
    name: 'image-upload',
    label: 'Upload photo',
    type: 'file',
    placeholder: 'Enter your twitter ID ',
    divClassName: `${styles.textInput} ${styles.imageUpload}`,
    component: TextInput,
  },
];

export const enrollInitialValues = {
  name: '',
  dob: '',
  college: '',
  enrollmentNumber: '',
  homeAddress: '',
  guardianName: '',
  guardianPhoneNumber: '',
  currentResidentialAddress: '',
  bloodGroup: '',
  medicalNotes: '',
  email: '',
  fb: '',
  instagram: '',
  linkedin: '',
  twitter: '',
  technologyInterests: '',
  courseEnrollingfor: '',
};
