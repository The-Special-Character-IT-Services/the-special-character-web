import Button from '@components/Button';
import Divider from '@components/Divider';
import List from '@components/List';
import SubscriptionEmail from '@components/SubscriptionEmail';
import Typography from '@components/Typography';
import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.scss';

interface Props {
  props: JSX.Element;
}

const Footer = (props: Props) => {
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contentTop}>
          <Link href="/">
            <a>
              <Image
                alt="logo"
                src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607e14090c79b1d9ca3d08f8_logo-footer-education-x-template.svg"
                width={226}
                height={40}
              />
            </a>
          </Link>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt aliqua.
          </Typography>
        </div>
        <Divider isFooterTop />
        <div className={styles.contentMiddle}>
          <div className={styles.divLeft}>
            <div className={styles.upDiv}>
              <Button
                className="buttonIcon"
                style={{ padding: '0', overflow: 'hidden' }}>
                <Image
                  alt="Message Icon"
                  src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607f5ea5d227324cf40fa52d_icon-newsletter-footer-education-x-template.svg"
                  width={72}
                  height={72}
                />
              </Button>
              <Typography variant="h2">Subscribe to our newsletter</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmo.
              </Typography>
            </div>
          </div>
          <div className={styles.divRight}>
            <SubscriptionEmail />
          </div>
        </div>
        <Divider isFooterBottom />
        <div className={styles.contentBottom}>
          <div className={styles.footerTxt}>
            Copyright © Education X | Designed by{' '}
            <a href="">The Special Character</a> - Powered by{' '}
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              NextJS
            </a>
          </div>
          <div className={styles.socialIcons}></div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
