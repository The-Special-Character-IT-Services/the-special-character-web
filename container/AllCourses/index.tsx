import Button from '@components/Button';
import Card from '@components/Card';
import FeaturedCategory from '@components/FeaturedCategory';
import Images from '@components/Images';
import Typography from '@components/Typography';
import Image from 'next/image';
import styles from './allCourses.module.scss';

export interface AllCourse {
  id: number;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  heading: AboutCourseOrResultOrHeading;
  categoryButtons?: CategoryButtonsEntityOrEnroll[] | null;
  courses?: CoursesEntity[] | null;
  localizations?: null[] | null;
}
export interface AboutCourseOrResultOrHeading {
  id: number;
  title: string;
  description?: null;
}
export interface CategoryButtonsEntityOrEnroll {
  id: number;
  buttonText: string;
  link?: null;
}
export interface CoursesEntity {
  id: number;
  title: string;
  titleDescription: string;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  price?: string | null;
  aboutCourse: AboutCourseOrResultOrHeading;
  result?: AboutCourseOrResultOrHeading1 | null;
  tags?: (TagsEntity | null)[] | null;
  enroll: CategoryButtonsEntityOrEnroll;
  courseMinimalDetails?: (CourseMinimalDetailsEntity | null)[] | null;
  curriculum?: (CurriculumEntity | null)[] | null;
  feedback?: (FeedbackEntity | null)[] | null;
  courseImage: CourseImage;
}
export interface AboutCourseOrResultOrHeading1 {
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
export interface CourseMinimalDetailsEntity {
  id: number;
  title: string;
  description: string;
  icon?: null;
}
export interface CurriculumEntity {
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
  data?: AllCourse;
}

const AllCourses = ({ data }: Props) => {
  return (
    <section className={styles.allCourses}>
      <div className={styles.container}>
        <FeaturedCategory title={data.heading.title}>
          {data.categoryButtons}
        </FeaturedCategory>
        <div className={styles.list}>
          {data.courses.map(x => (
            <Card key={x.id} variant="cardHover" className={styles.cardMain}>
              <a href="/courses/1">
                <Image
                  alt="Featured image"
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${x?.courseImage?.url}`}
                  height={319}
                  width={567}
                />
                <div className={styles.cardBox}>
                  <Typography variant="h3">{x.title}</Typography>
                  <Typography>{x.titleDescription}</Typography>
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCourses;
