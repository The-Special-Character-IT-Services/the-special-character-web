import Image from 'next/image';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Images = ({ children, className, variant, alt, ...props }: Props) => {
  return (
    <>
      <div className={classNames(variant, className ? className : '')}>
        <Image alt={alt} {...props} />

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
    </>
  );
};
Images.propTypes = {
  variant: PropTypes.oneOf(['image', 'avtar']),
};
Images.defaultProps = {
  variant: 'image',
};
export default Images;
