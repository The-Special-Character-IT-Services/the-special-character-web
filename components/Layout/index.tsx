import BackToTop from '@components/BackToTop';
import Footer from '@components/Footer';
import HeaderNav from '@components/HeaderNav';

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <HeaderNav />
      {children}
      <BackToTop />
      <Footer />
    </>
  );
};

export default Layout;
