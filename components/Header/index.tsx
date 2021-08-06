import Image from 'next/image';
import Navigation from './navigation';
import SideNav from './sideNav';
import styles from './header.module.scss';

interface Props {}

const index = (props: Props) => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-wrapper">
            <div className="split-content header-right">
              <a
                href="index.html"
                aria-current="page"
                className="brand w-nav-brand w--current">
                <Image
                  src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607e0932cd6425299653b78f_logo-education-x-template.svg"
                  alt=""
                  className="header-logo"
                  width={200}
                  height={36}
                />
              </a>
            </div>
            <Navigation />
            <SideNav />
          </div>
        </div>
      </header>
      <style jsx>{`
        header.header {
          background-color: #fff;
          padding: 28px 24px;

          & > .header-container {
            background-color: #fff;
            max-width: 1200px;
            margin: 0 auto;
            & > .header-wrapper {
              display: flex;
              justify-content: space-between;
            }
          }
        }
      `}</style>
    </>
  );
};

export default index;
