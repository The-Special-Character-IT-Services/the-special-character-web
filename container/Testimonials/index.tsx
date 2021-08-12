interface Props {}

const Testimonials = (props: Props) => {
  return (
    <section className="testimonials">
        <div></div>
      <style jsx>
        {`
          @import './styles/variables.scss';
          .testimonials {
            overflow: hidden;
            padding-top: 184px;
            padding-bottom: 184px;
            background-color: #f9fafb;
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
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
