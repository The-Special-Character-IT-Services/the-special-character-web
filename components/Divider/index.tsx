import React from 'react';

interface Props {}

const Divider = () => {
  return (
    <>
      <div />
      <style jsx>
        {`
          div {
            display: flex;
            justify-content: center;
            height: 1px;
            background-color: #415977;
            width: 90%;
          }
        `}
      </style>
    </>
  );
};

export default Divider;
