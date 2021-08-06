import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

interface Props {
  size: 'small' | 'default' | 'large';
  className: 'primary' | 'secondary' | String;
  isDisabled?: Boolean;
  children: JSX.Element;
  isLoading?: Boolean;
  onClick: Function;
  rest?: Object;
}

const Button = ({
  size,
  className,
  isDisabled,
  children,
  isLoading,
  onClick,
  ...rest
}: Props) => {
  return (
    <>
      <button
        type="button"
        className={classNames(
          !isDisabled && !isLoading && [size],
          'btn',
          'primary',
          {
            disable: isDisabled || isLoading,
            [className]: !!className,
          }
        )}
        onClick={isDisabled || isLoading ? () => {} : onClick}
        {...rest}>
        {children}
      </button>
      <style jsx>
        {`
          .btn {
            transition-duration: 300ms;
            border-radius: 100px;
            text-transform: uppercase;
            font-family: sans-serif;
            font-weight: 500;
            border: none;
            align-items: center;
            line-height: 1.175rem;
            cursor: pointer;
            font-size: 16px;

            &.primary {
              background-color: #064ea4;
              color: #f9fafb;
              &:hover {
                background-color: #1e3d60;
                transform: scale(0.97);
              }
            }
            &.secondary {
              background-color: #e7eaee;
              color: #1e3d60;
              &:hover {
                background-color: #becad7;
                transform: scale(0.97);
              }
            }
            &.small {
              padding: 16px 30px;
            }
            &.default {
              padding: 20px 36px;
            }
            &.large {
              padding: 23px 48px;
            }
            &.buttonIcon {
              background-color: #e0edfb;
              min-height: 80px;
              min-width: 80px;
              border-radius: 80px;
              border: none;
            }
            &.disable {
              cursor: not-allowed;
              background-color: gray;
              opacity: 0.5;
              font-size: 13px;
              color: black;
              padding: 10px 20px;
            }
          }
        `}
      </style>
    </>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'default', 'large']),
  // variant: PropTypes.oneOf([
  //   'primary',
  //   'secondary',
  //   'buttonIcon',
  //   'disable',
  //   'btn',
  // ]),
};

Button.defaultProps = {
  // variant: 'primary',
  size: 'small',
};

export default Button;
