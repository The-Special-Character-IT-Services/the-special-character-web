import React from 'react';
import { FieldProps } from 'formik';
import classNames from 'classnames';
import Typography from '@components/Typography';

export interface RadioButtonsProps {
  options: any;
  name?: string;
  label?: string;
  divClassName?: string | any;
}

const RadioButtons = ({
  divClassName,
  label,
  name,
  options,
  field,
  ...rest
}: RadioButtonsProps & FieldProps) => {
  return (
    <div className={classNames(divClassName, 'form-control')}>
      <Typography variant="label">{label}</Typography>
      <div className="dropdownDiv">
        {options.map(({ ...option }) => {
          return (
            <div key={option.key}>
              <input
                type="radio"
                id={option.value}
                {...field}
                value={option.value}
                defaultChecked={field.value === option.value}
              />
              <label htmlFor={option.value}>{option.key}</label>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .dropdownDiv {
          min-height: 4rem;
          max-width: 100%;
          min-width: 100%;
          margin-bottom: 0px;
          padding-right: 1.875rem;
          padding-left: 1.875rem;
          border: 1px solid transparent;
          border-radius: 6.25rem;
          background-color: #f9fafb;
          color: #0f437f;
          font-size: 18px;
          line-height: 1.111em;
          appearance: none;
          display: flex;
          gap: 3rem;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default RadioButtons;
