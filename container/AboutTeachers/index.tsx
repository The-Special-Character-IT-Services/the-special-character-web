import Button from '@components/Button';
import Card from '@components/Card';
import Typography from '@components/Typography';
import Image from 'next/image';
import Facebook from '../../public/svg/facebook.svg';
import Github from '../../public/svg/github.svg';
import Twitter from '../../public/svg/twitter.svg';
import Linkedin from '../../public/svg/linkedin.svg';
import styles from './aboutTeachers.module.scss';
import router from 'next/router';

interface Props {}

const AboutTeachers = () => {
  const goToContact = () => {
    router.push('/contact');
  };
  return (
    <section id="Teachers" className={styles.aboutTeachers}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.leftHead}>
            <Typography variant="h2" className={styles.title}>
              Our Teachers
            </Typography>
            <Typography className={styles.caption}>
              Presenting Academy, the tech school of the future. We teach you
              the right skills to be prepared for tomorrow.
            </Typography>
          </div>
          <Button onClick={goToContact}>Become a teacher</Button>
        </div>
        <div className={styles.cards}>
          <Card variant="cardHover" className={styles.singleCard}>
            <Image
              alt="John Carter"
              src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f20a1af14fe2620952c2a_image-6-profile-picture-teacher-education-x-template-p-500.jpeg"
              width={349}
              height={330}
            />
            <div className={styles.description}>
              <Typography variant="h3">John Carter</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </Typography>
              <div className={styles.socialIcons}>
                <Button className="socialIcon">
                  <Facebook height={21} width={21} />
                </Button>
                <Button className="socialIcon">
                  <Github height={21} width={21} />
                </Button>
                <Button className="socialIcon">
                  <Linkedin height={21} width={21} fill="#fff" />
                </Button>
                <Button className="socialIcon">
                  <Twitter height={21} width={21} fill="#fff" />
                </Button>
              </div>
            </div>
          </Card>
          <Card variant="cardHover" className={styles.singleCard}>
            <Image
              alt="Sophie Moore"
              src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f205f3ef6fbf524b7dcc3_image-5-profile-picture-teacher-education-x-template-p-500.jpeg"
              width={349}
              height={330}
            />
            <div className={styles.description}>
              <Typography variant="h3">Sophie Moore</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </Typography>
              <div className={styles.socialIcons}>
                <Button className="socialIcon">
                  <Facebook height={21} width={21} />
                </Button>
                <Button className="socialIcon">
                  <Github height={21} width={21} />
                </Button>
                <Button className="socialIcon">
                  <Linkedin height={21} width={21} fill="#fff" />
                </Button>
                <Button className="socialIcon">
                  <Twitter height={21} width={21} fill="#fff" />
                </Button>
              </div>
            </div>
          </Card>
          <Card variant="cardHover" className={styles.singleCard}>
            <Image
              alt="Matt Cannon"
              src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f201ef3141ee6222a3e89_image-4-profile-picture-teacher-education-x-template-p-500.jpeg"
              width={349}
              height={330}
            />
            <div className={styles.description}>
              <Typography variant="h3">Matt Cannon</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </Typography>
              <div className={styles.socialIcons}>
                <Button className="socialIcon">
                  <Facebook height={21} width={21} />
                </Button>
                <Button className="socialIcon">
                  <Github height={21} width={21} />
                </Button>
                <Button className="socialIcon">
                  <Linkedin height={21} width={21} fill="#fff" />
                </Button>
                <Button className="socialIcon">
                  <Twitter height={21} width={21} fill="#fff" />
                </Button>
              </div>
            </div>
          </Card>
          <Card variant="cardHover" className={styles.singleCard}>
            <Image
              alt="John Carter"
              src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f20a1af14fe2620952c2a_image-6-profile-picture-teacher-education-x-template-p-500.jpeg"
              width={349}
              height={330}
            />
            <div className={styles.description}>
              <Typography variant="h3">John Carter</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </Typography>
              <div className={styles.socialIcons}>
                <Button className="socialIcon">
                  <Facebook height={21} width={21} />
                </Button>
                <Button className="socialIcon">
                  <Github height={21} width={21} />
                </Button>
                <Button className="socialIcon">
                  <Linkedin height={21} width={21} fill="#fff" />
                </Button>
                <Button className="socialIcon">
                  <Twitter height={21} width={21} fill="#fff" />
                </Button>
              </div>
            </div>
          </Card>
          <Card variant="cardHover" className={styles.singleCard}>
            <Image
              alt="Sophie Moore"
              src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f205f3ef6fbf524b7dcc3_image-5-profile-picture-teacher-education-x-template-p-500.jpeg"
              width={349}
              height={330}
            />
            <div className={styles.description}>
              <Typography variant="h3">Sophie Moore</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </Typography>
              <div className={styles.socialIcons}>
                <Button className="socialIcon">
                  <Facebook height={21} width={21} />
                </Button>
                <Button className="socialIcon">
                  <Github height={21} width={21} />
                </Button>
                <Button className="socialIcon">
                  <Linkedin height={21} width={21} fill="#fff" />
                </Button>
                <Button className="socialIcon">
                  <Twitter height={21} width={21} fill="#fff" />
                </Button>
              </div>
            </div>
          </Card>
          <Card variant="cardHover" className={styles.singleCard}>
            <Image
              alt="Matt Cannon"
              src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f201ef3141ee6222a3e89_image-4-profile-picture-teacher-education-x-template-p-500.jpeg"
              width={349}
              height={330}
            />
            <div className={styles.description}>
              <Typography variant="h3">Matt Cannon</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </Typography>
              <div className={styles.socialIcons}>
                <Button className="socialIcon">
                  <Facebook height={21} width={21} />
                </Button>
                <Button className="socialIcon">
                  <Github height={21} width={21} />
                </Button>
                <Button className="socialIcon">
                  <Linkedin height={21} width={21} fill="#fff" />
                </Button>
                <Button className="socialIcon">
                  <Twitter height={21} width={21} fill="#fff" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutTeachers;
