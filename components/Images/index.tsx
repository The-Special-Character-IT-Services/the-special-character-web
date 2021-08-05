import Image from 'next/image';
import classNames from 'classnames';

const Images = ({ children, className, alt, ...props }: Props) => {
  return (
    <>
      <div className={classNames('image', className ? className : '')}>
        <Image alt={alt} {...props} />

        <style jsx>
          {`
            .image {
              display: flex;
              justify-content: center;
              border-radius: 2rem;
              overflow: hidden;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Images;
