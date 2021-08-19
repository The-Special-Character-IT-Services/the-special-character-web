import Typography from '@components/Typography';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import styles from './header.module.scss';
import classnames from 'classnames';
import Image from 'next/image';

interface Props {
  props?: Object;
}
const HeaderNav = (props: Props) => {
  const burgerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const { pathname } = useRouter();
  const burgerClicked = () => {
    if (burgerRef && burgerRef.current && menuRef && menuRef.current) {
      burgerRef.current.classList.toggle('open');
      menuRef.current.classList.toggle('right0');
    }
  };
  //   useEffect(() => {
  //     const onScroll = () => {
  //       if (window.scrollY >= 60) {
  //         headerRef.current.classList.add('fixedHeader');
  //       } else {
  //         headerRef.current.classList.remove('fixedHeader');
  //       }
  //     };
  //     window.addEventListener('scroll', onScroll, false);
  //     return () => {
  //       window.removeEventListener('scroll', onScroll, false);
  //     };
  //   }, []);
  return (
    <header className="container-default">
      <nav role="navigation" className="nav-menu">
        <Link href="/">
          <Typography variant="a" className={classnames(styles.headerRight)}>
            The Special Character
          </Typography>
        </Link>
        <button ref={burgerRef} onClick={burgerClicked} className="hamburger">
          <span className="span1" />
          <span className="span2" />
        </button>
        <aside ref={menuRef} className="menu">
          <a href="#!" onClick={burgerClicked}></a>
          <ul role="list" className="header-navigation">
            <li className={classnames('nav-item-wrapper', styles.navLink)}>
              <Typography
                variant="a"
                href="/"
                className={pathname === '/' ? styles.active : undefined}
                aria-current="page">
                Home
              </Typography>
            </li>
            <li className={classnames('nav-item-wrapper', styles.navLink)}>
              <Typography
                variant="a"
                href="/about"
                className={pathname === '/about' ? styles.active : undefined}
                aria-current="page">
                About
              </Typography>
            </li>
            <li className={classnames('nav-item-wrapper', styles.navLink)}>
              <Typography
                variant="a"
                href="/courses"
                className={pathname === '/courses' ? styles.active : undefined}
                aria-current="page">
                Courses
              </Typography>
            </li>
            <li className={classnames('nav-item-wrapper', styles.navLink)}>
              <Typography
                variant="a"
                href="/blog"
                className={pathname === '/blog' ? styles.active : undefined}
                aria-current="page">
                Blog
              </Typography>
            </li>
            <li className={classnames('nav-item-wrapper', styles.navLink)}>
              <Typography
                variant="a"
                href="/events"
                className={pathname === '/events' ? styles.active : undefined}
                aria-current="page">
                Events
              </Typography>
            </li>
            <li className={classnames('nav-item-wrapper', styles.navLink)}>
              <Typography
                variant="a"
                href="/contact"
                className={pathname === '/contact' ? styles.active : undefined}
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
            transition: all ease 0.3s;
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
              & .hamburger {
                display: none;
              }
              & .menu {
                width: auto;
                display: block;
                & .header-navigation {
                  gap: 2.5rem;
                  display: flex;
                  margin: 0;
                  padding-left: 0;
                  justify-content: flex-end;
                  list-style-type: none;
                  & .nav-item-wrapper {
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
          @media screen and (max-width: $breakpointLgForMw) {
            .right0 {
              display: flex !important;
            }
            @mixin all-transition($time) {
              transition: all $time;
            }
            .container-default {
              & .nav-menu {
                & .menu {
                  width: 100%;
                  transform: translate3d(-8rem, 0, 0);
                  animation-timing-function: 1s ease-in;
                  box-shadow: -3px 0px 5px 0px rgba(0, 0, 0, 0.2);
                  display: none;
                  font-weight: 100;
                  height: 100%;
                  z-index: 40;
                  position: absolute;
                  right: -8rem;
                  top: 5.75rem;
                  @include all-transition(0.3s);
                  & > a {
                    width: 60%;
                    background-color: transparent;
                    color: transparent;
                  }
                  & .header-navigation {
                    gap: 0;
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
          @media screen and (max-width: $breakpointMdForMw) {
            .nav-item-wrapper {
              padding: 13px 0;
            }
          }
          @media screen and (max-width: $breakpointSmForMw) {
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
                    padding-left: 3.5rem;
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
export default HeaderNav;
