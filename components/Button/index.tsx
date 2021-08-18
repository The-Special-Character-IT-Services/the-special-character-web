import Typography from '@components/Typography';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { MouseEventHandler } from 'react';

interface Props {
  className?:
    | 'primary'
    | 'secondary'
    | 'buttonIcon'
    | 'socialIcon'
    | string
    | any;
  isDisabled?: Boolean;
  style?: Object | any;
  children: JSX.Element | string | any;
  isLoading?: Boolean;
  isFooter?: Boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  rest?: Object;
}

const Button = ({
  className,
  isDisabled,
  isFooter,
  children,
  style,
  isLoading,
  onClick,
  ...rest
}: Props) => {
  return (
    <>
      <button
        type="button"
        className={classNames(!isDisabled && !isLoading, 'btn', 'primary', {
          disable: isDisabled || isLoading,
          isFooter: !!isFooter,
          [className]: !!className,
        })}
        onClick={isDisabled || isLoading ? () => {} : onClick}
        style={style}
        {...rest}>
        <Typography variant="btnText">{children}</Typography>
      </button>
      <style jsx>
        {`
          @import '../../styles/variables.scss';
          .btn {
            transition-duration: 300ms;
            border-radius: 6.25rem;
            border: none;
            align-items: center;
            cursor: pointer;
            padding: 1.5rem 2.5rem;
            &.primary {
              background-color: $Primary1;
              color: $Neutral200;
              &:hover {
                background-color: $Neutral700;
                transform: scale(0.97);
              }
            }
            &.secondary {
              background-color: $Neutral300;
              color: $Neutral700;
              &:hover {
                background-color: $Neutral400;
                transform: scale(0.97);
              }
            }
            &.buttonIcon {
              background-color: $icon;
              min-height: 0.5rem;
              min-width: 0.5rem;
              padding: 0.1rem 0.2rem 0rem 0.2rem;
              border: none;
              cursor: auto;
              overflow: hidden;

              &:hover {
                background-color: $icon;
                transform: scale(1);
              }
            }
            &.socialIcon {
              background-color: ${isFooter ? '#62778f' : '#becad7'};
              padding: 0.35rem 0.34rem 0.3rem 0.349rem;
              max-height: 2rem;
              max-width: 2rem;
              border-radius: 2rem;
              color: $Neutral100;
              cursor: pointer;
              overflow: hidden;
              &:hover {
                background-color: ${isFooter ? '#0f437f' : '#064ea4'};
                transform: scale(1);
              }
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

          @media screen and (max-width: $breakpointMd) {
            .btn {
              padding-right: 1.875rem;
              padding-left: 1.875rem;
            }
          }
          @media screen and (max-width: $breakpointSm) {
            .btn {
              display: block;
              padding: 1.25rem 1.125rem;
              width: 100%;
              &.buttonIcon {
                width: fit-content;
              }
            }
          }
        `}
      </style>
    </>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'buttonIcon',
    'disable',
    'btn',
  ]),
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
