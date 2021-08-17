import Star from '../../public/svg/star.svg';
import EmptyStar from '../../public/svg/emptyStar.svg';
import classnames from 'classnames';
import classNames from 'classnames';

interface Props {
  props?: Object;
  number: Number;
  className?: string | any;
}
const StarRating = ({ props, number, className }: Props) => {
  return (
    <div
      className={classnames('flex', {
        [className]: !!className,
      })}>
      {[...Array(5).keys()].map(x => {
        if (x + 1 <= number) {
          return <Star key={x} index={x} />;
        }
        return <EmptyStar key={x} className="empty-star" />;
      })}
      <style jsx>{`
        @import './styles/variables.scss';
        .flex {
          display: flex;
          gap: 0.25rem;
        }
        .empty-star {
          svg {
            height: 2rem;
            width: 2rem;
          }
        }
        @media screen and (max-width: $breakpointSmForMw) {
          .flex {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default StarRating;
