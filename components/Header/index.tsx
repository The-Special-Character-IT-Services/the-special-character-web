import Typography from '@components/Typography';
import { useEffect, useRef } from 'react';
import styles from './header.module.scss';

interface Props {}
const Header = (props: Props) => {
  const burgerRef = useRef(null);
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const burgerClicked = () => {
    burgerRef.current.classList.toggle('open');
    menuRef.current.classList.toggle('right0');
  };
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 60) {
        headerRef.current.classList.add('fixedHeader');
      } else {
        headerRef.current.classList.remove('fixedHeader');
      }
    };
    window.addEventListener('scroll', onScroll, false);
    return () => {
      window.removeEventListener('scroll', onScroll, false);
    };
  }, []);
  return (
    <header ref={headerRef} className="container-default">
      <nav role="navigation" className="nav-menu">
        <a href="/" className="header-right">
          <img
            src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607e0932cd6425299653b78f_logo-education-x-template.svg"
            alt=""
            className="header-logo"
          />
        </a>
        <button ref={burgerRef} onClick={burgerClicked} className="hamburger">
          <span className="span1" />
          <span className="span2" />
        </button>
        <aside ref={menuRef} className="menu">
          <a href="#!" onClick={burgerClicked} className=""></a>
          <ul role="list" className="header-navigation">
            <li className="nav-item-wrapper">
              <Typography
                variant="a"
                href="/"
                className={styles.navLink}
                aria-current="page">
                Home
              </Typography>
            </li>
            <li className="nav-item-wrapper">
              <Typography
                variant="a"
                href="/"
                className={styles.navLink}
                aria-current="page">
                About
              </Typography>
            </li>
            <li className="nav-item-wrapper">
              <Typography
                variant="a"
                href="/"
                className={styles.navLink}
                aria-current="page">
                Courses
              </Typography>
            </li>
            <li className="nav-item-wrapper">
              <Typography
                variant="a"
                href="/"
                className={styles.navLink}
                aria-current="page">
                Contact
              </Typography>
            </li>
          </ul>
        </aside>
      </nav>
      <style jsx>
        {`
          @import './styles/variables.scss';
          .container-default {
            width: 100%;
            z-index: 50;
            padding: 1.75rem 1.5rem;
            background-color: $Neutral100;
            & .nav-menu {
              max-width: 1209px;
              margin: 0 auto;
              display: flex;
              align-items: center;
              background-color: $Neutral100;
              justify-content: space-between;
              & .header-right {
                display: flex;
              }
              & .hamburger {
                display: none;
              }
              & .menu {
                width: auto;
                display: block;
                & .header-navigation {
                  display: flex;
                  margin: 0;
                  padding-left: 0;
                  justify-content: flex-end;
                  list-style-type: none;
                  & .nav-item-wrapper {
                    margin-right: 2.5rem;
                    margin-bottom: 0;
                  }
                }
              }
            }
          }
          .fixedHeader {
            position: fixed;
            box-shadow: 0px 1px 27px -3px rgb(0 0 0 / 20%);
          }
          @media screen and (max-width: 991px) {
            .right0 {
              width: 100% !important;
            }
            @mixin all-transition($time) {
              transition: all $time;
              -webkit-transition: all $time;
            }
            .container-default {
              & .nav-menu {
                & .menu {
                  width: 0;
                  transform: translate3d(-8rem, 0, 0);
                  animation-timing-function: 1s ease-in;
                  box-shadow: -3px 0px 5px 0px rgba(0, 0, 0, 0.2);
                  display: flex;
                  font-weight: 100;
                  height: 100%;
                  z-index: 40;
                  position: fixed;
                  right: -8rem;
                  top: 5.8rem;
                  @include all-transition(0.3s);
                  & > a {
                    width: 60%;
                    background-color: transparent;
                    color: transparent;
                  }
                  & .header-navigation {
                    box-shadow: 0px 1px 27px -3px rgb(0 0 0 / 20%);
                    background-color: $Neutral200;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    width: 100%;
                    padding-left: 4rem;
                    margin: 0;
                    width: 40%;
                    & .nav-item-wrapper {
                      display: flex;
                      margin-right: 0;
                      padding: 1.25rem 0;
                    }
                  }
                }
                & .hamburger {
                  display: block;
                  float: right;
                  width: 1.5rem;
                  top: -5px;
                  height: 1.5rem;
                  position: relative;
                  border: 0;
                  cursor: pointer;
                  background-color: transparent;
                  & span {
                    transition: all ease 0.3s;
                    background-color: $Neutral800;
                    width: 100%;
                    height: 0.125rem;
                    position: absolute;
                    left: 0;
                  }
                  & .span1 {
                    bottom: 0.25rem;
                    width: 66.666667%;
                  }
                }
                & .open {
                  & span {
                    transform: matrix(0.7071, 0.7071, -0.7071, 0.7071, 0, 0);
                    width: 100%;
                    background-color: $Neutral800;
                    height: 0.125rem;
                    position: absolute;
                    left: 0;
                  }
                  & .span1 {
                    transform: matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, -5);
                    width: 100% !important;
                  }
                }
              }
            }
          }
          @media screen and (max-width: 767px) {
            .nav-item-wrapper {
              padding: 13px 0;
            }
          }
          @media screen and (max-width: 479px) {
            .container-default {
              padding-right: 1rem;
              padding-left: 1rem;
              & .nav-menu {
                & .menu {
                  > a {
                    width: 50%;
                  }
                  & .header-navigation {
                    width: 100%;
                    padding-left: 3.45rem;
                  }
                }
              }
            }
          }
        `}
      </style>
    </header>
  );
};
export default Header;
