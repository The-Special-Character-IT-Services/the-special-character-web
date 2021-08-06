import { Props } from 'react';
import styles from './card.module.scss';
import classNames from 'classnames';

const Card = ({ children, className, ...props }: Props) => {
  return (
    <>
      <div
        className={classNames(styles.card, { [className]: !!className })}
        {...props}>
        {children}
      </div>
    </>
  );
};

export default Card;
