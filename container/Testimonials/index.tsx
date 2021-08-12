interface Props {}
import courseStyle from '../Courses/courses.module.scss';

const Testimonials = (props: Props) => {
  const NextArrow = ({ onClick }) => (
    <div className={courseStyle.rightArrow} role="button" onClick={onClick}>
      <div className={courseStyle.rightIcon}>
        <RightArrow />
      </div>
    </div>
  );
  const PrevArrow = ({ onClick }) => (
    <div className={courseStyle.leftArrow} role="button" onClick={onClick}>
      <div className={courseStyle.leftIcon}>
        <LeftArrow />
      </div>
    </div>
  );
  return (
    <section className="testimonials">
      <div className="container-default">
          <div className="testimonials-wrapper"></div>
      </div>
      <style jsx>
        {`
          @import './styles/variables.scss';
          .testimonials {
            overflow: hidden;
            padding-top: 184px;
            padding-bottom: 184px;
            background-color: #f9fafb;
          }
          .container-default {
            max-width: 1209px;
            margin: 0 auto;
            padding: 0 24px;
          }
          .testimonials-wrapper {
            text-align: center;
          }
          @media screen and (max-width: $breakpointLgForMw) {
            .testimonials {
              padding-top: 147px;
              padding-bottom: 147px;
            }
          }
          @media screen and (max-width: $breakpointMdForMw) {
            .testimonials {
              padding-top: 118px;
              padding-bottom: 118px;
            }
          }
          @media screen and (max-width: $breakpointSmForMw) {
            .testimonials {
              padding-top: 110px;
              padding-bottom: 94px;
            }
            .container-default {
              padding: 0 16px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
