import Button from '@components/Button';
import Card from '@components/Card';
import Typography from '@components/Typography';
import classNames from 'classnames';
import React, { useRef } from 'react';
import styles from './accordian.module.scss';

interface Props {}

const Accordian = ({
  variant,
  children,
  className,
  label,
  ...props
}: Props) => {
  const toggleRef = useRef();
  const childRef = useRef();
  const toggleAcc = () => {
    toggleRef.current.classList.toggle(styles.active);
    childRef.current.classList.toggle(styles.active);
  };
  return (
    <Card
      className={classNames(styles.accordian, {
        [className]: !!className,
      })}
      role="button"
      onClick={toggleAcc}
      {...props}>
      <div className={styles.showDiv}>
        <button className={styles.acBtn} id="toggle" ref={toggleRef} />
        <Typography variant="h3">{label}</Typography>
      </div>
      <div className={styles.hideDiv} ref={childRef}>
        {children}
      </div>
    </Card>
  );
};

export default Accordian;
