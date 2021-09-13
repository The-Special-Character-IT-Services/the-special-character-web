import React from 'react';
import { Formik, Form as FormikForm, FastField, FormikProps } from 'formik';
import classNames from 'classnames';
import Button from '@components/Button';

interface Props<ObjectType> {
  className?: string;
  fields: ObjectType[];
}

// declare type Props<ObjectType> = FormikProps &
//   FormikState<Values> &
//   FormikHelpers<Values> &
//   FormikHandlers &
//   FormikComputedProps<Values> &
//   FormikRegistration & {
//     submitForm: () => Promise<any>;
//   };

const Form = <ObjectType extends object>({
  fields,
  className,
  ...props
}: Props<ObjectType>) => {
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
