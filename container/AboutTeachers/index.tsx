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

export interface AboutTeacherType {
  id: number;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  heading: Heading;
  buttonText: ButtonText;
  teacherCard?: TeacherCardEntity[] | null;
  localizations?: null[] | null;
}
export interface Heading {
  id: number;
  title: string;
  description: string;
}
export interface ButtonText {
  id: number;
  buttonText: string;
  link?: null;
}
export interface TeacherCardEntity {
  id: number;
  title: string;
  description: string;
  image: Image;
  socialIcon?: SocialIconEntity[] | null;
}
export interface Image {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: null;
  provider: string;
  provider_metadata?: null;
  created_at: string;
  updated_at: string;
}
export interface Formats {
  thumbnail: ThumbnailOrSmall;
  small?: ThumbnailOrSmall1 | null;
}
export interface ThumbnailOrSmall {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: null;
  size: number;
  width: number;
  height: number;
}
export interface ThumbnailOrSmall1 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: null;
  size: number;
  width: number;
  height: number;
}
export interface SocialIconEntity {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats?: null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: null;
  provider: string;
  provider_metadata?: null;
  created_at: string;
  updated_at: string;
}

interface Props {
  data?: AboutTeacherType;
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
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${x.image.url}`}
                  width={349}
                  height={330}
                />
                <div className={styles.description}>
                  <Typography variant="h3">{x.title}</Typography>
                  <Typography>{x.description}</Typography>
                  <div className={styles.socialIcons}>
                    {x.socialIcon.map(icon => {
                      return (
                        <Button className="socialIcon">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${icon.url}`}
                            height={21}
                            width={21}
                          />
                        </Button>
                      );
                    })}
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
