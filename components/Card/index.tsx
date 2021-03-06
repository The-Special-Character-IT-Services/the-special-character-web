import styles from './card.module.scss';
var classNames = require('classnames');
import PropTypes from 'prop-types';

interface Props extends React.ButtonHTMLAttributes<HTMLDivElement> {
  children: JSX.Element | JSX.Element[];
  variant: string;
  className?: string | any;
}

const Card = ({ variant, children, className, ...props }: Props) => {
  return (
    <div
      className={classNames(styles[variant], { [className]: !!className })}
      {...props}>
      {children}
    </div>
  );
};
Card.propTypes = {
  variant: PropTypes.oneOf(['card', 'cardHover', 'perkCard']),
};

Card.defaultProps = {
  variant: 'card',
};
export default Card;
