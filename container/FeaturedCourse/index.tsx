import Card from '@components/Card';
import Typography from '@components/Typography';
import styles from './featuredCourse.module.scss';
import Image from 'next/image';
import Images from '@components/Images';
import Button from '@components/Button';

export interface FeaturedCourse {
  id: number;
  course: Course;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  heading: CurriculumEntityOrHeading;
  featuredCourse: AboutCourseOrResultOrFeaturedCourse;
  localizations?: null[] | null;
}
export interface Course {
  id: number;
  title: string;
  titleDescription: string;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  price: string;
  aboutCourse: AboutCourseOrResultOrFeaturedCourse;
  result: AboutCourseOrResultOrFeaturedCourse;
  tags?: TagsEntity[] | null;
  enroll: Enroll;
  courseMinimalDetails?: CourseMinimalDetailsEntity[] | null;
  curriculum?: CurriculumEntityOrHeading[] | null;
  feedback?: FeedbackEntity[] | null;
  courseImage: CourseImage;
}
export interface AboutCourseOrResultOrFeaturedCourse {
  id: number;
  title: string;
  description?: null;
}
export interface TagsEntity {
  id: number;
  title: string;
  description?: null;
  icon?: null;
}
export interface Enroll {
  id: number;
  buttonText: string;
  link?: null;
}
export interface CourseMinimalDetailsEntity {
  id: number;
  title: string;
  description: string;
  icon?: null;
}
export interface CurriculumEntityOrHeading {
  id: number;
  title: string;
  description: string;
}
export interface FeedbackEntity {
  id: number;
  ratings: number;
  name: string;
  jobTitle: string;
  description?: string | null;
  avatar?: null;
}
export interface CourseImage {
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
  large: LargeOrSmallOrMediumOrThumbnail;
  small: LargeOrSmallOrMediumOrThumbnail;
  medium: LargeOrSmallOrMediumOrThumbnail;
  thumbnail: LargeOrSmallOrMediumOrThumbnail;
}
export interface LargeOrSmallOrMediumOrThumbnail {
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

interface Props {
  data?: FeaturedCourse;
}

const FeaturedCourse = ({ data }) => {
  return (
    <section className={styles.featuredCourse}>
      <div className={styles.container}>
        <Typography variant="h2" className={styles.head}>
          {data.featuredCourse.title}
        </Typography>
        {}
        <Card variant="cardHover">
          <a href="/courses/1" className={styles.cardMain}>
            <div className={styles.imageDiv}>
              <Image
                alt="Featured image"
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data?.course?.courseImage?.url}`}
                height={608}
                width={1080}
              />
            </div>
            <div className={styles.cardBox}>
              <Typography variant="h3" className={styles.cardTitle}>
                {data.course.title}
              </Typography>
              <Typography>{data.course.titleDescription}</Typography>
            </div>
          </a>
        </Card>
      </div>
    </section>
  );
};

export default FeaturedCourse;
