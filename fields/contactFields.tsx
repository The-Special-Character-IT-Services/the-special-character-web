import TextInput from '@components/TextInput';
import styles from '@container/ContactForm/contactForm.module.scss';

export const contactFields = [
  {
    name: 'name',
    label: 'Name',
    placeholder: 'Ex. Elon Musk',
    component: TextInput,
    validate: value => {
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
    validate: value => {
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
    validate: value => {
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
    validate: value => {
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
    validate: value => {
      if (!value) {
        return 'Please Enter Message.';
      }
      return '';
    },
  },
];

export const initialValues = contactFields.reduce((p, c) => {
  return { ...p, [c.name]: '' };
}, {});
