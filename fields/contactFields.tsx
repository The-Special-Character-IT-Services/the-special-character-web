import TextInput, { TextInputProps } from '@components/TextInput';
import styles from '@container/ContactForm/contactForm.module.scss';
import { FieldAttributes, FieldProps, FormikValues } from 'formik';
import { ComponentType } from 'react';

export type ContactFieldType = {
  name: string;
  label: string;
  placeholder: string;
  component: JSX.Element;
  validate: (value: FormikValues) => string;
  type?: string;
};

export type ContactInitialType = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export type ContactFieldsTypes = {
  label: string;
} & FieldAttributes<ContactInitialType>;

export const contactFields: any = [
  {
    name: 'name',
    label: 'Name',
    placeholder: 'Ex. Elon Musk',
    component: TextInput as React.ComponentType,
    validate: (value: string) => {
      if (!value) {
        return 'Please Enter Name.';
      }
      return '';
    },
  },
  {
    name: 'email',
    label: 'Email Address',
    placeholder: 'Ex.elon.musk@tesla.com',
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
    name: 'phone',
    label: 'Phone Number',
    placeholder: '123-4567-890',
    component: TextInput,
    type: 'tel',
    validate: (value: string) => {
      if (!value) {
        return 'Please Enter Phone Number.';
      }
      return '';
    },
  },
  {
    name: 'subject',
    label: 'Subject',
    placeholder: 'Ex. Courses',
    component: TextInput,
    validate: (value: string) => {
      if (!value) {
        return 'Please Enter Name.';
      }
      return '';
    },
  },
  {
    name: 'message',
    divClassName: `${styles.textInputCol}`,
    label: 'Message',
    placeholder: 'Write your message here...',
    component: TextInput,
    isTextArea: true,
    validate: (value: string) => {
      if (!value) {
        return 'Please Enter Message.';
      }
      return '';
    },
  },
];

export const contactInitialValues = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};
