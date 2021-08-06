import React from 'react';

interface Props {}

const Divider = () => {
  return (
    <>
      <div />
      <style jsx>
        {`
          div {
            height: 1px;
            width: 100%;
            opacity: 0.15;
            background-color: #415977;
          }
        `}
      </style>
    </>
  );
};

export default Divider;
