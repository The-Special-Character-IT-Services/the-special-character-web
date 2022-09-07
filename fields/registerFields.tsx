import MultiSelectDropDown from '@components/MultiSelectDropDown';
import RadioButtons from '@components/RadioButtons';
import TextInput from '@components/TextInput';
import styles from '@container/EnrollForm/enrollForm.module.scss';
import { FieldAttributes, FormikValues } from 'formik';
import React from 'react';

const options = [
  { key: 'Online', value: 'online' },
  { key: 'Offline', value: 'offline' },
];

export const dropDown = [
  { id: 1, name: 'Advanced Javascript' },
  { id: 2, name: 'React JS' },
  { id: 3, name: 'React Native' },
];

export type RegisterFieldType = {
  name: string;
  label: string;
  placeholder: string;
  component: JSX.Element;
  validate: (value: FormikValues) => string;
  type?: string;
};

export type RegisterInitialType = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  interestedFor: string;
  technologyInterests: Array<Object>;
};

export type RegisterFieldsTypes = {
  label: string;
} & FieldAttributes<RegisterInitialType>;

export const registerFields: any = [
  {
    name: 'firstName',
    label: 'First Name',
    placeholder: 'Ex. Elon',
    divClassName: `${styles.textInput}`,
    component: TextInput as React.ComponentType,
    validate: (value: string) => {
      if (!value) {
        return 'Please Enter Your First Name.';
      }
      return '';
    },
  },
  {
    name: 'lastName',
    label: 'Last Name',
    placeholder: 'Ex. Musk',
    divClassName: `${styles.textInput}`,
    component: TextInput as React.ComponentType,
    validate: (value: string) => {
      if (!value) {
        return 'Please Enter Your Last Name.';
      }
      return '';
    },
  },
  {
    name: 'phoneNumber',
    label: 'Phone Number',
    placeholder: '123-4567-890',
    component: TextInput as React.ComponentType,
    type: 'tel',
    validate: (value: string) => {
      if (!value) {
        return 'Please Enter Phone Number.';
      }
      return '';
    },
  },
  {
    name: 'email',
    label: 'Email Address',
    placeholder: 'Ex.elon.musk@tesla.com',
    divClassName: `${styles.textInput}`,
    component: TextInput as React.ComponentType,
    type: 'email',
    validate: (value: string) => {
      if (!value) {
        return 'Please Enter Email Address.';
      }
      return '';
    },
  },
  {
    name: 'interestedFor',
    label: 'Interested For',
    options: options,
    component: RadioButtons as React.ComponentType,
    divClassName: `${styles.textInput}`,
    validate: (value: string) => {
      if (!value) {
        return 'Please Enter Your Preference.';
      }
      return '';
    },
  },
  {
    name: 'technologyInterests',
    placeholder: 'Choose Options',
    label: 'Technology Interests',
    options: dropDown,
    component: MultiSelectDropDown as React.ComponentType,
    divClassName: `${styles.textInput}`,
  },
];

export const registerInitialValues = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  interestedFor: '',
  technologyInterests: [],
};
