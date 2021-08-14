import Typography from '@components/Typography';
import classNames from 'classnames';
import DownArrow from '../../public/svg/downArrow.svg';
import PropTypes from 'prop-types';
import styles from './header.module.scss';
import Image from 'next/image';
interface Props {
  className: string;
  label: string;
  children: JSX.Element;
  props: object;
  isBlog: Boolean;
  isEvent: Boolean;
  isCourse: Boolean;
}

const Header = ({
  isCourse,
  isEvent,
  isBlog,
  variant,
  children,
  className,
  label,
  ...props
}: Props) => {
  return (
    <div
      className={classNames(styles.common, {
        [className]: !!className,
        isBlog: !!isBlog,
        isEvent: !!isEvent,
      })}
      {...props}>
      <div className={styles.container}>
        <Typography variant="h1" className={styles.head}>
          {label}
        </Typography>
        {children}
      </div>
      <div className={styles.circleDiv}>
        <div className="circle1" />
        <div className="circle2" />
      </div>
      <div className={styles.arrow}>
        <Image
          src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607f6baa56bb661a7bbbf5eb_arrow-3-education-x-template.svg"
          height={206}
          width={77}
          alt="Down Arrow"
        />
      </div>
      <style jsx>{`
        @import '../../styles/variables.scss';
        .circle1 {
          position: absolute;
          top: ${isEvent && '-20rem'};
          left: -20rem;
          bottom: ${(isCourse || isBlog) && '-18.75rem'};
          width: 572px;
          min-height: 572px;
          min-width: 572px;
          border-radius: 1000px;
          background-color: ${isBlog ? '#f99d77' : '#fcdf69'};
        }
        .circle2 {
          bottom: ${isEvent && '-22rem'};
          right: ${isEvent ? '-17.75rem' : '-17rem'};
          top: ${(isCourse || isBlog) && '-21.25rem'};
          width: 572px;
          min-height: 572px;
          min-width: 572px;
          border-radius: 1000px;
          background-color: ${isBlog ? '#064ea4' : '#f99d77'};
          position: absolute;
        }
        @media screen and (max-width: $breakpointLg) {
          .circle1 {
            left: ${isEvent ? '-17rem' : '-22rem'};
            bottom: ${(isCourse || isBlog) && '-15rem'};
            width: 477px;
            min-height: 477px;
            min-width: 477px;
          }
          .circle2 {
            width: 477px;
            min-height: 477px;
            min-width: 477px;
          }
        }
        @media screen and (max-width: $breakpointMd) {
          .circle1 {
            left: ${isEvent ? '-18.5rem' : '-22rem'};
            top: ${isEvent && '-21.5rem'};
            bottom: ${(isCourse || isBlog) && '-21.5rem'};
          }
          .circle2 {
            bottom: ${isEvent && '-21.5rem'};
            right: ${isEvent ? '-21rem' : '-20rem'};
            top: ${(isCourse || isBlog) && '-21rem'};
          }
        }
        @media screen and (max-width: $breakpointSm) {
          .circle1 {
            left: ${isEvent ? '-23rem' : '-22.5rem'};
            top: ${isEvent && '-22rem'};
          }
          .circle2 {
            bottom: ${isEvent && '-24rem'};
            top: ${(isCourse || isBlog) && '-22rem'};
            right: ${isEvent ? '-20rem' : '-20rem'};
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
