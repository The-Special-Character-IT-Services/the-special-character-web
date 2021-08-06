import React from 'react';

interface Props {}

const navigation = (props: Props) => {
  return (
    <>
      <nav role="navigation" className="nav-menu">
        <ul role="list" className="header-navigation">
          <li className="nav-item-wrapper">
            <a
              href="index.html"
              aria-current="page"
              className="nav-link w--current">
              Home
            </a>
          </li>
          <li className="nav-item-wrapper">
            <a href="about.html" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item-wrapper">
            <a href="courses.html" className="nav-link">
              Courses
            </a>
          </li>
          <li className="nav-item-wrapper">
            <div className="nav-link-dropdown w-dropdown">
              <div className="nav-link dropdown w-dropdown-toggle">
                <div>
                  Pages  <span className="dropdown-arrow"></span>
                </div>
              </div>
              <nav className="dropdown-list w-dropdown-list">
                <div className="dropdown-nav-main-wrapper">
                  <div className="dropdown-nav-pages-wrapper">
                    <div className="title dropdown-nav-title">Menu</div>
                    <div className="dropdown-nav-content">
                      <ul role="list" className="dropdown-nav">
                        <li className="dropdown-nav-item">
                          <a
                            href="index.html"
                            aria-current="page"
                            className="dropdown-nav-link w--current">
                            Home
                          </a>
                        </li>
                        <li className="dropdown-nav-item">
                          <a href="about.html" className="dropdown-nav-link">
                            About
                          </a>
                        </li>
                        <li className="dropdown-nav-item">
                          <a href="courses.html" className="dropdown-nav-link">
                            Courses
                          </a>
                        </li>
                        <li className="dropdown-nav-item">
                          <a
                            href="product/brand-identity-design.html"
                            className="dropdown-nav-link">
                            Individual Course
                          </a>
                        </li>
                        <li className="dropdown-nav-item">
                          <a href="blog.html" className="dropdown-nav-link">
                            Blog
                          </a>
                        </li>
                        <li className="dropdown-nav-item">
                          <a
                            href="blog/how-to-design-a-simple-yet-unique-and-memorable-brand-identity.html"
                            className="dropdown-nav-link">
                            Blog Post
                          </a>
                        </li>
                      </ul>
                      <ul role="list" className="dropdown-nav last">
                        <li className="dropdown-nav-item">
                          <a href="events.html" className="dropdown-nav-link">
                            Events
                          </a>
                        </li>
                        <li className="dropdown-nav-item">
                          <a
                            href="event/social-media-marketing-masterclass.html"
                            className="dropdown-nav-link">
                            Individual Event
                          </a>
                        </li>
                        <li className="dropdown-nav-item">
                          <a
                            href="about.html#Teachers"
                            className="dropdown-nav-link">
                            Teachers
                          </a>
                        </li>
                        <li className="dropdown-nav-item">
                          <a
                            href="teacher/kathie-corl.html"
                            className="dropdown-nav-link">
                            Individual Teacher
                          </a>
                        </li>
                        <li className="dropdown-nav-item">
                          <a href="contact.html" className="dropdown-nav-link">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dropdown-nav-pages-wrapper last">
                    <div className="title dropdown-nav-title">
                      Utility Pages
                    </div>
                    <div className="dropdown-nav-content">
                      <ul role="list" className="dropdown-nav last">
                        <li className="dropdown-nav-item">
                          <a
                            href="utility-pages/start-here.html"
                            className="dropdown-nav-link">
                            Start Here
                          </a>
                        </li>
                        <li className="dropdown-nav-item">
                          <a
                            href="utility-pages/styleguide.html"
                            className="dropdown-nav-link">
                            Style Guide
                          </a>
                        </li>
                        <li className="dropdown-nav-item">
                          <a href="404.html" className="dropdown-nav-link">
                            404 Not Found
                          </a>
                        </li>
                        <li className="dropdown-nav-item">
                          <a href="401.html" className="dropdown-nav-link">
                            Password Protected
                          </a>
                        </li>
                        <li className="dropdown-nav-item">
                          <a
                            href="utility-pages/licenses.html"
                            className="dropdown-nav-link">
                            Licenses
                          </a>
                        </li>
                        <li className="dropdown-nav-item">
                          <a
                            href="utility-pages/changelog.html"
                            className="dropdown-nav-link">
                            Changelog
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </li>
          <li className="nav-item-wrapper">
            <a href="blog.html" className="nav-link">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        nav.nav-menu {
          position: relative;
          & > .header-navigation {
            display: flex;
            list-style-type: none;
            align-items: center;
            justify-content: flex-end;
            & .nav-item-wrapper {
              margin-right: 40px;
              margin-bottom: 0px;
              & .nav-link {
                transition: color 350ms ease;
                color: #1e3d60;
                line-height: 1.111em;
                font-weight: 700;
                text-decoration: none;
                &.dropdown {
                  padding: 0px;
                }
                &.dropdown:hover {
                  color: #f99d77;
                }
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default navigation;
