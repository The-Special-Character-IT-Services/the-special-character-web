import Button from '@components/Button';
import Divider from '@components/Divider';
import List from '@components/List';
import SubscriptionEmail from '@components/SubscriptionEmail';
import Typography from '@components/Typography';
import Image from 'next/image';
import Link from 'next/link';
import Facebook from '../../public/svg/facebook.svg';
import Github from '../../public/svg/github.svg';
import Twitter from '../../public/svg/twitter.svg';
import Linkedin from '../../public/svg/linkedin.svg';
import styles from './footer.module.scss';

interface Props {}

const Footer = (props: Props) => {
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contentTop}>
          <Link href="/">
            <Typography variant="a" className={styles.logo}>
              The Special Character
            </Typography>
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
            Copyright © The Special Character | Designed by{' '}
            <a href="">The Special Character</a> - Powered by{' '}
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              NextJS
            </a>
          </div>
          <div className={styles.socialIcons}>
            <Button isFooter className="socialIcon">
              <Facebook height={21} width={21} />
            </Button>
            <Button isFooter className="socialIcon">
              <Github height={21} width={21} />
            </Button>
            <Button isFooter className="socialIcon">
              <Linkedin height={21} width={21} fill="#fff" />
            </Button>
            <Button isFooter className="socialIcon">
              <Twitter height={21} width={21} fill="#fff" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
