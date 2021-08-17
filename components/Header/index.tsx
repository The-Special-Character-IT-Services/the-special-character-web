import Typography from '@components/Typography';
import classNames from 'classnames';
import DownArrow from '../../public/svg/downArrow.svg';
import PropTypes from 'prop-types';
import styles from './header.module.scss';
import Image from 'next/image';
interface Props {
  className: string;
  label: string;
  caption: string;
  props: object;
  position: any;
  bgColor1: any;
  bgColor2: any;
}

const Header = ({
  caption,
  className,
  label,
  position,
  bgColor1,
  bgColor2,
  ...props
}: Props) => {
  return (
    <section
      className={classNames(styles.common, {
        [className]: !!className,
      })}
      {...props}>
      <div className={styles.container}>
        <Typography variant="h1" className={styles.head}>
          {label}
        </Typography>
        <Typography>{caption}</Typography>
      </div>
      <div className={styles.circleDiv}>
        <div
          className="circle1"
          style={{
            [position.circle1[0]]: '-20rem',
            [position.circle1[1]]: '-20rem',
            backgroundColor: bgColor1,
          }}
        />
        <div
          className="circle2"
          style={{
            [position.circle2[0]]: '-20rem',
            [position.circle2[1]]: '-20rem',
            backgroundColor: bgColor2,
          }}
        />
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
          width: 572px;
          min-height: 572px;
          min-width: 572px;
          border-radius: 1000px;
        }
        .circle2 {
          width: 572px;
          min-height: 572px;
          min-width: 572px;
          border-radius: 1000px;
          position: absolute;
        }
        @media screen and (max-width: $breakpointLg) {
          .circle1 {
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

        @media screen and (max-width: $breakpointSm) {
          .circle1 {
            min-height: 377px;
          }
          .circle2 {
            min-height: 377px;
          }
        }
      `}</style>
    </section>
  );
};

export default Header;
