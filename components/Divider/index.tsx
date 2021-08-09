import React from 'react';

interface Props {}

const Divider = () => {
  return (
    <>
      <div className="divider" />
      <style jsx>
        {`
        {/* @import '' */}
          .divider {
            height: 1px;
            width: 100%;
            opacity: 0.15;
            background-color: #415977;
          }
          @media screen and (max-width: 991px) {
            .divider {
              margin-top: 3.12rem;
              margin-bottom: 5rem;
            }
          }
          @media screen and (max-width: 767px) {
            .divider {
              margin-top: 2.5rem;
              margin-bottom: 3.75rem;
            }
          }
          @media screen and (max-width: 479px) {
            .divider {
              margin-bottom: 3.12rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Divider;
