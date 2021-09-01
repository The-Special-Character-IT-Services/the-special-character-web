import React from 'react';
import { Formik, Form as FormikForm, FastField } from 'formik';
import classNames from 'classnames';

interface Props {}

const Form = ({ fields, children, className, ...props }: Props) => {
  return (
    <Formik {...props}>
      {() => {
        return (
          <FormikForm
            className={classNames({
              [className]: !!className,
            })}>
            {fields.map(x => (
              <FastField key={x.name} {...x} />
            ))}
            {children}
          </FormikForm>
        );
      }}
    </Formik>
  );
};

export default Form;
