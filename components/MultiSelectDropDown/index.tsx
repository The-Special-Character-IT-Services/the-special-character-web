import Typography from '@components/Typography';
import classNames from 'classnames';
import { FieldProps } from 'formik';
import React, { useState } from 'react';
import RightArrow from '../../public/svg/rightArrow.svg';

export interface MultiSelectDropDownProps {
  options: any;
  name?: string;
  label?: string;
  divClassName?: string | any;
  placeholder: string;
}

const MultiSelectDropDown = ({
  divClassName,
  label,
  name,
  options,
  placeholder,
  field,
  ...rest
}: MultiSelectDropDownProps & FieldProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className={classNames(divClassName, 'form-control')}>
      <Typography variant="label">{label}</Typography>
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className="dropdownDiv container"
        style={{
          borderBottomRightRadius: showDropdown ? '0rem' : '6.25rem',
          borderBottomLeftRadius: showDropdown ? '0rem' : '6.25rem',
          borderTopLeftRadius: showDropdown ? '2rem' : '6.25rem',
          borderTopRightRadius: showDropdown ? '2rem' : '6.25rem',
        }}>
        <p style={{ margin: 0, color: '#62778f' }}>{placeholder}</p>
        <RightArrow
          height={24}
          width={24}
          fill="#62778f"
          style={{ transform: 'rotate(90deg)' }}
        />
      </div>
      {showDropdown && (
        <div className="showDropdown">
          {options.map(({ ...option }) => {
            return (
              <div className="listDiv" key={option.id}>
                <input
                  placeholder={placeholder}
                  type="checkbox"
                  id={option.name}
                  {...field}
                  value={option.name}
                  defaultChecked={field.name === option.name}
                />
                <label htmlFor={option.name}>{option.name}</label>
              </div>
            );
          })}
        </div>
      )}
      <style jsx>{`
        @import './styles/variables.scss';
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
        .showDropdown {
          border: solid;
          border-color: #f9fafb;
          border-top-width: 0px;
          border-end-start-radius: 2rem;
          border-end-end-radius: 2rem;
          padding: 2rem 1.7rem;
          width: 400px;
          max-height: 300px;
          overflow-y: scroll;
          box-shadow: 0 5px 5px #62778f;
          position: absolute;
          background-color: #fff;
          gap: 0.5rem;
          display: flex;
          flex-direction: column;
        }
        .showDropdown::-webkit-scrollbar {
          width: 10px;
        }
        .listDiv {
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
        }
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
        }
        @media screen and (max-width: $breakpointLgForMw) {
          .showDropdown {
            width: 300px;
          }
        }
        @media screen and (max-width: $breakpointMdForMw) {
          .showDropdown {
            width: 500px;
          }
        }
        @media screen and (max-width: $breakpointSmForMw) {
          .showDropdown {
            width: 290px;
          }
        }
      `}</style>
    </div>
  );
};

export default MultiSelectDropDown;
