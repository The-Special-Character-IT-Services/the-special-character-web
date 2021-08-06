import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Typography from '@components/Typography';

interface Props {
  name: string;
  label: string;
  className?: string;
  isTextArea?: boolean;
}

const TextInput = ({ name, label, className, isTextArea, ...rest }: Props) => {
  const Component = isTextArea ? 'textarea' : 'input';

  return (
    <div className="input-wrapper">
      <label htmlFor={name}>
        <Typography>{label}</Typography>
      </label>
      <Component
        id={name}
        className={cn('contactInput', {
          textArea: isTextArea,
          [className]: !!className,
        })}
        placeholder="input"
        {...rest}
      />
      <style jsx>
        {`
          .input-wrapper {
            display: flex;
            flex-direction: column;
            > label {
              margin: auto 0.25rem;
            }
            & > .contactInput {
              outline: none;
              border: solid 1px transparent;
              background-color: #f9fafb;
              min-height: 65px;
              padding: 16px 30px;
              font-size: 24px;
              color: #0f437f;
              font-size: 18px;
              line-height: 1.111em;
              border-radius: 30px;
              transition-duration: 300ms;
              transition-timing-function: ease-in-out;
              &.textArea {
                resize: vertical;
                min-height: 10rem;
                padding: 32px 30px;
              }
              &:hover,
              &:focus {
                border-color: #becad7;
                transition-duration: 300ms;
              }
            }
          }
        `}
      </style>
    </div>
  );
};

export default TextInput;
