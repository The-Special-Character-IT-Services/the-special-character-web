import React from 'react';
import PropTypes from 'prop-types';

interface Props {}

const TextInput = ({ variant, className, component, ...rest }: Props) => {
  return (
    <div>
      {component === 'textarea' ? (
        <textarea
          className={(variant, { className: !!className })}
          component={component}
          {...rest}
        />
      ) : (
        <input
          className={(variant, { className: !!className })}
          component={component}
          {...rest}
        />
      )}
      <style jsx>
        {`
          .contactInput {
            outline: none;
            border: solid 1px transparent;
            background-color: #f9fafb;
            min-height: 65px;
            padding: 16px 36px;
            font-size: 24px;
            color: #0f437f;
            font-size: 18px;
            line-height: 1.111em;
            border-radius: 30px;
            transition: ease-in-out 0.3s;
            transition-duration: 300ms;
            &:hover {
              border: solid 1px #becad7;
              transition-duration: 300ms;
            }
            &:focus {
              border: solid 1px #becad7;
            }
          }

          .contactTextArea {
            outline: none;
            resize: vertical;
            color: #0f437f;
            min-width: 160%;
            min-height: 10rem;
            font-size: 20px;
            line-height: 1.111em;
            padding: 32px 30px;
            border: solid 1px transparent;
            border-radius: 25px;
            background-color: #f9fafb;
            transition-duration: 300ms;
            &:hover {
              border: solid 1px #becad7;
              transition-duration: 300ms;
            }
            &:focus {
              border: solid 1px #becad7;
              transition-duration: 300ms;
            }
          }
        `}
      </style>
    </div>
  );
};

TextInput.propTypes = {
  variant: PropTypes.oneOf(['contactInput', 'contactTextArea']),
  component: PropTypes.string,
};

TextInput.defaultProps = {
  variant: 'contactInput',
  component: 'input',
};

export default TextInput;
