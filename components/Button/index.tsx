import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

interface Props {}

const Button = ({
  variant,
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
        className={classNames(!isDisabled && !isLoading && [variant], {
          disable: isDisabled || isLoading,
          [className]: !!className,
        })}
        onClick={isDisabled || isLoading ? () => {} : onClick}
        {...rest}>
        {children}
      </button>
      <style jsx>
        {`
          .primarySmall {
            background-color: #064ea4;
            transition-duration: 300ms;
            font-size: 16px;
            color: #f9fafb;
            line-height: 1.75rem;
            padding: 20px 32px;
            border-radius: 100px;
            text-transform: uppercase;
            font-family: sans-serif;
            font-weight: 500;
            border: none;
            align-items: center;
            cursor: pointer;
          }
          .primarySmall:hover {
            background-color: #1e3d60;
            transform: scale(0.97);
          }
          .primaryDefault {
            background-color: #064ea4;
            transition-duration: 300ms;
            font-size: 16px;
            color: #f9fafb;
            line-height: 1.75rem;
            padding: 24px 40px;
            border-radius: 100px;
            text-transform: uppercase;
            font-family: sans-serif;
            font-weight: 500;
            border: none;
            align-items: center;
            cursor: pointer;
          }
          .primaryDefault:hover {
            background-color: #1e3d60;
            transform: scale(0.97);
          }
          .primaryLarge {
            background-color: #064ea4;
            transition-duration: 300ms;
            font-size: 16px;
            color: #f9fafb;
            line-height: 1.75rem;
            padding: 24px 68px;
            border-radius: 100px;
            text-transform: uppercase;
            font-family: sans-serif;
            font-weight: 500;
            border: none;
            align-items: center;
            cursor: pointer;
          }
          .primaryLarge:hover {
            background-color: #1e3d60;
            transform: scale(0.97);
          }
          .secondarySmall {
            background-color: #e7eaee;
            transition-duration: 300ms;
            font-size: 16px;
            color: #1e3d60;
            line-height: 1.75rem;
            padding: 20px 32px;
            border-radius: 100px;
            text-transform: uppercase;
            font-family: sans-serif;
            font-weight: 500;
            border: none;
            align-items: center;
            cursor: pointer;
          }
          .secondarySmall:hover {
            background-color: #becad7;
            transform: scale(0.97);
          }
          .secondaryDefault {
            background-color: #e7eaee;
            transition-duration: 300ms;
            font-size: 16px;
            color: #1e3d60;
            line-height: 1.75rem;
            padding: 24px 40px;
            border-radius: 100px;
            text-transform: uppercase;
            font-family: sans-serif;
            font-weight: 500;
            border: none;
            align-items: center;
            cursor: pointer;
          }
          .secondaryDefault:hover {
            background-color: #becad7;
            transform: scale(0.97);
          }
          .secondaryLarge {
            background-color: #e7eaee;
            transition-duration: 300ms;
            font-size: 16px;
            color: #1e3d60;
            line-height: 1.75rem;
            padding: 24px 68px;
            border-radius: 100px;
            text-transform: uppercase;
            font-family: sans-serif;
            font-weight: 500;
            border: none;
            align-items: center;
            cursor: pointer;
          }
          .secondaryLarge:hover {
            background-color: #becad7;
            transform: scale(0.97);
          }
          .buttonIcon {
            background-color: #e0edfb;
            min-height: 80px;
            min-width: 80px;
            border-radius: 80px;
            border: none;
          }
          .disable {
            cursor: not-allowed;
            background-color: gray;
            opacity: 0.5;
            font-size: 13px;
            color: black;
            padding: 10px 20px;
            text-transform: uppercase;
            font-weight: 600;
            border-width: 2px;
            border-color: gray;
            border: solid;
          }
        `}
      </style>
    </>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    'primarySmall',
    'primaryDefault',
    'primaryLarge',
    'secondarySmall',
    'secondaryDefault',
    'secondaryLarge',
    'buttonIcon',
    'disable',
  ]),
};

Button.defaultProps = {
  variant: 'primarySmall',
};

export default Button;
