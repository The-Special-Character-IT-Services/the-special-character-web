import React from 'react';
import { Formik, Form as FormikForm, FastField } from 'formik';
import classNames from 'classnames';
import Button from '@components/Button';

interface Props {}

const Form = ({ fields, children, className, ...props }: Props) => {
  return (
    <Formik {...props}>
      {({ isSubmitting }) => {
        return (
          <FormikForm
            className={classNames({
              [className]: !!className,
            })}>
            {fields.map(x => (
              <FastField key={x.name} {...x} />
            ))}
            <Button type="submit" isDisabled={isSubmitting}>
              {isSubmitting ? 'Please Wait...' : 'Submit'}
            </Button>
          </FormikForm>
        );
      }}
    </Formik>
  );
};

export default Form;
