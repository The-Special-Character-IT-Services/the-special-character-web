import React from 'react';

interface Props {}

const Teachers = (props: Props) => {
  return (
    <section className="featured-teacher">
      <style jsx>
        {`
          .featured-teacher {
            padding-bottom: 216px;
            padding-top: 184px;
          }
          @media screen and (max-width: $breakpointLg) {
            .featured-teacher {
              padding-bottom: 173px;
              padding-top: 147px;
            }
          }
          @media screen and (max-width: $breakpointMd) {
            .featured-teacher {
              padding-bottom: 173px;
              padding-top: 147px;
            }
          }
          @media screen and (max-width: $breakpointSm) {
            .featured-teacher {
              padding-bottom: 173px;
              padding-top: 147px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Teachers;
