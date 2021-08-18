import RightArrow from '../../public/svg/rightArrow.svg';
import React, { useEffect, useRef } from 'react';

interface Props {}

const BackToTop = () => {
  const ScrollTop = () => {
    document.documentElement.scrollTo({
      top: 0,
    });
  };
  const upBtnRef = useRef();
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        upBtnRef.current.classList.remove('hideBtn');
      } else {
        upBtnRef.current.classList.add('hideBtn');
      }
    };
    window.addEventListener('scroll', onScroll, false);
    return () => {
      window.removeEventListener('scroll', onScroll, false);
    };
  }, []);
  return (
    <>
      <div
        className="upIcon hideBtn"
        ref={upBtnRef}
        onClick={() => ScrollTop()}>
        <RightArrow height={32} width={32} fill="white" />
      </div>
      <style jsx>{`
        @import '../../styles/variables.scss';
        .upIcon {
          position: fixed;
          cursor: pointer;
          bottom: 3%;
          display: flex;
          z-index: 3;
          right: 3%;
          width: 3rem;
          justify-content: center;
          align-items: center;
          height: 3rem;
          border-radius: 100%;
          background-color: $Neutral800;
          transform: rotate(270deg);
          margin: auto 0;
          overflow: hidden;
          transition-duration: 300ms;
          &:hover {
            background-color: $Neutral700;
          }
        }
        .hideBtn {
          display: none;
        }
      `}</style>
    </>
  );
};

export default BackToTop;
