import Typography from '@components/Typography';
import classNames from 'classnames';
import PropTypes from 'prop-types';

interface Props {
  className: 'primary' | 'secondary' | 'buttonIcon' | String;
  isDisabled?: Boolean;
  children: JSX.Element;
  isLoading?: Boolean;
  onClick: Function;
  rest?: Object;
}

const Button = ({
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
        className={classNames(!isDisabled && !isLoading, 'btn', 'primary', {
          disable: isDisabled || isLoading,
          [className]: !!className,
        })}
        onClick={isDisabled || isLoading ? () => {} : onClick}
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
              min-height: 60px;
              min-width: 60px;
              padding: 0;
              border-radius: 60px;
              border: none;
              cursor: auto;

              &:hover {
                background-color: $icon;
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
