import Image from 'next/image';
import PropTypes from 'prop-types';
import classNames from 'classnames';
interface Props {
  children?: JSX.Element | any;
  className?: string;
  variant?: 'image' | 'avtar';
  alt?: string;
  props?: Object;
  src: string | any;
  height?: any;
  width?: any;
}

const Images = ({
  children,
  src,
  className,
  variant,
  alt,
  ...props
}: Props) => {
  return (
    <div className={classNames(variant, className ? className : '')}>
      <Image alt={alt} src={src} {...props} />
      {children}
      <style jsx>
        {`
          .image {
            display: flex;
            justify-content: center;
            border-radius: 2rem;
            overflow: hidden;
            width: fit-content;
          }
          .avtar {
            display: flex;
            justify-content: center;
            border-radius: 50%;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
};
Images.propTypes = {
  variant: PropTypes.oneOf(['image', 'avtar']),
};
Images.defaultProps = {
  variant: 'image',
};
export default Images;
