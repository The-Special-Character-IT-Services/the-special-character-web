interface Props {
  isFooterTop: boolean;
  isFooterBottom: boolean;
}
import classNames from 'classnames';
import cn from 'classnames';

const Divider = ({ isFooterTop, isFooterBottom, className }: Props) => {
  return (
    <>
      <div
        className={cn('divider', {
          ['footer-top']: !!isFooterTop,
          ['footer-bottom']: !!isFooterBottom,
          [className]: !!className,
        })}
      />
      <style jsx>
        {`
          @import '../../styles/variables.scss';
          .divider {
            height: 1px;
            width: 100%;
            opacity: 0.15;
            background-color: $Neutral300;
          }
          .footer-top {
            margin-top: 3.4rem;
            margin-bottom: 7.5rem;
            background-color: $Neutral100;
            opacity: 0.15;
          }
          .footer-bottom {
            margin-top: 7.5rem;
            margin-bottom: 1.5rem;
            background-color: $Neutral100;
            opacity: 0.15;
          }
          @media screen and (max-width: $breakpointLg) {
            .footer-top {
              margin-top: 3.25rem;
              margin-bottom: 5rem;
            }
            .footer-bottom {
              margin-top: 6rem;
            }
          }
          @media screen and (max-width: $breakpointMd) {
            .footer-top {
              margin-top: 2.5rem;
              margin-bottom: 3.75rem;
            }
            .footer-bottom {
              margin-top: 4.8rem;
            }
          }
          @media screen and (max-width: $breakpointSm) {
            .footer-top {
              margin-bottom: 3.25rem;
            }
            .footer-bottom {
              margin-top: 4rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Divider;
