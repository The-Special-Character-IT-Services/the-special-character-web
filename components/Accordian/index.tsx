import Button from '@components/Button';
import Card from '@components/Card';
import Typography from '@components/Typography';
import classNames from 'classnames';
import { useRef } from 'react';
import styles from './accordian.module.scss';

interface Props {
  children: JSX.Element;
  className?: string | any;
  label: string;
}

const Accordian = ({ children, className, label, ...props }: Props) => {
  const toggleRef = useRef<HTMLButtonElement>(null);
  const childRef = useRef<HTMLInputElement>(null);
  const headTxtRef = useRef<HTMLInputElement>(null);

  const toggleAcc = () => {
    toggleRef?.current?.classList?.toggle(styles.active);
    childRef?.current?.classList?.toggle(styles.active);
    headTxtRef?.current?.classList.toggle(styles.headTxt);
  };
  return (
    <Card
      className={classNames(styles.accordian, {
        [className]: !!className,
      })}
      role="button"
      onClick={toggleAcc}
      {...props}>
      <div className={styles.buttonDiv}>
        <button className={styles.acBtn} id="toggle" ref={toggleRef} />
        <Typography variant="h3" ref={headTxtRef}>
          {label}
        </Typography>
      </div>
      <div className={styles.showDiv}>
        <div className={styles.dummyDiv}></div>
        <div className={styles.hideDiv} ref={childRef}>
          {children}
        </div>
      </div>
    </Card>
  );
};

export default Accordian;
