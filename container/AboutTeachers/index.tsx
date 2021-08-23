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

interface Props {
  data?: string[] | Object;
}

const AboutTeachers = ({ data }: Props) => {
  const goToContact = () => {
    router.push('/contact');
  };
  return (
    <section id="Teachers" className={styles.aboutTeachers}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.leftHead}>
            <Typography variant="h2" className={styles.title}>
              {data.heading.title}
            </Typography>
            <Typography className={styles.caption}>
              {data.heading.description}
            </Typography>
          </div>
          <Button onClick={goToContact}>{data.buttonText.buttonText}</Button>
        </div>
        <div className={styles.cards}>
          {data.teacherCard.map(x => {
            return (
              <Card variant="cardHover" className={styles.singleCard}>
                <Image
                  alt="John Carter"
                  src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f20a1af14fe2620952c2a_image-6-profile-picture-teacher-education-x-template-p-500.jpeg"
                  width={349}
                  height={330}
                />
                <div className={styles.description}>
                  <Typography variant="h3">{x.title}</Typography>
                  <Typography>{x.description}</Typography>
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutTeachers;
