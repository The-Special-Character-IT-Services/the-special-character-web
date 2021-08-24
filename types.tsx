export interface AboutHistoryType {
  id: number;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  heading: Heading;
  buttonText: ButtonText;
  timeline?: TimelineEntity[] | null;
  localizations?: null[] | null;
}
export interface Heading {
  id: number;
  title: string;
  description: string;
}
export interface ButtonText {
  id: number;
  buttonText?: string;
  link?: string;
}
export interface TimelineEntity {
  id: number;
  numberOfSuccess?: null;
  title: string;
  description: string;
  number: string;
}
export interface AboutBannerType {
  id: number;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  header: Header;
  buttonText: ButtonText;
  localizations?: null[] | null;
}
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
  large: LargeOrSmallOrMediumOrThumbnail;
  small: LargeOrSmallOrMediumOrThumbnail;
  medium: LargeOrSmallOrMediumOrThumbnail;
  thumbnail: LargeOrSmallOrMediumOrThumbnail;
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
export interface AboutOfficesType {
  id: number;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  heading: Heading;
  officeCard?: OfficeCardEntity[] | null;
  mapImage: MapImage;
  localizations?: null[] | null;
}
export interface OfficeCardEntity {
  id: number;
  title?: null;
  mail: string;
  mailLink: string;
  phone: string;
  phoneLink: string;
  address: string;
  addressLink: string;
  country: string;
  icon: Icon;
}
export interface Icon {
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
export interface MapImage {
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
export interface AboutSuccessType {
  id: number;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  heading: Heading;
  success?: SuccessEntity[] | null;
  localizations?: null[] | null;
}
export interface SuccessEntity {
  id: number;
  numberOfSuccess?: null;
  title: string;
  description: string;
  number: string;
}
export interface AboutValuesType {
  id: number;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  heading: Heading;
  card?: CardEntity[] | null;
  localizations?: null[] | null;
}

export interface CardEntity {
  id: number;
  title: string;
  description: string;
  icon: Icon;
}
export interface ContactPageType {
  id: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  bannerHeading: FaqsAccordianEntityOrBannerHeadingOrFaqsHeading;
  faqsHeading: FaqsAccordianEntityOrBannerHeadingOrFaqsHeading;
  faqsAccordian?: FaqsAccordianEntityOrBannerHeadingOrFaqsHeading[] | null;
  contactDetails?: ContactDetailsEntity[] | null;
}
export interface FaqsAccordianEntityOrBannerHeadingOrFaqsHeading {
  id: number;
  title: string;
  description: string;
}
export interface ContactDetailsEntity {
  id: number;
  title: string;
  description: string;
  image: Image;
}
export interface FeaturedTeacherType {
  id: number;
  teacherQuote: string;
  featuredTeacherName: string;
  teacherJobTitle: string;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  heading: Heading;
  browse: BrowseOrBecomeTeacher;
  becomeTeacher: BrowseOrBecomeTeacher;
  teacherImage: TeacherImage;
  localizations?: null[] | null;
}
export interface Heading {
  id: number;
  title: string;
  description: string;
}
export interface BrowseOrBecomeTeacher {
  id: number;
  buttonText: string;
  link: string;
}
export interface TeacherImage {
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
export interface HomeBannerType {
  id: number;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  bannerDetails: BannerDetails;
  explore: ExploreOrLearn;
  learn: ExploreOrLearn;
  bannerImage: BannerImage;
  localizations?: null[] | null;
}
export interface BannerDetails {
  id: number;
  title: string;
  description: string;
}
export interface ExploreOrLearn {
  id: number;
  buttonText: string;
  link: string;
}
export interface BannerImage {
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
export interface PopularCoursesType {
  id: number;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  courseSectionDetails: CourseSectionDetails;
  explore: Explore;
  courses?: CoursesEntity[] | null;
  localizations?: null[] | null;
}
export interface CourseSectionDetails {
  id: number;
  title: string;
  description?: null;
}
export interface Explore {
  id: number;
  buttonText: string;
  link: string;
}
export interface CoursesEntity {
  id: number;
  title: string;
  titleDescription: string;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  price: string;
  aboutCourse: CurriculumEntityOrAboutCourseOrResult;
  result: CurriculumEntityOrAboutCourseOrResult;
  tags?: TagsEntity[] | null;
  enroll: Enroll;
  courseMinimalDetails?: CourseMinimalDetailsEntity[] | null;
  curriculum?: CurriculumEntityOrAboutCourseOrResult[] | null;
  feedback?: (FeedbackEntity | null)[] | null;
  courseImage: CourseImage;
}
export interface CurriculumEntityOrAboutCourseOrResult {
  id: number;
  title: string;
  description: string;
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
export interface FeedbackEntity {
  id: number;
  ratings: number;
  name: string;
  jobTitle: string;
  description: string;
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
export interface CardsEntity {
  id: number;
  title: string;
  description: string;
  image: Image;
}
export interface ReasonType {
  id: number;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  heading: Heading;
  cards?: CardsEntity[] | null;
  localizations?: null[] | null;
}
export interface CourseType {
  id: number;
  title: string;
  titleDescription: string;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  price: string;
  aboutCourse: CurriculumEntityOrAboutCourseOrResult;
  result: CurriculumEntityOrAboutCourseOrResult;
  tags?: TagsEntity[] | null;
  enroll: Enroll;
  courseMinimalDetails?: CourseMinimalDetailsEntity[] | null;
  curriculum?: CurriculumEntityOrAboutCourseOrResult[] | null;
  feedback?: FeedbackEntity[] | null;
  courseImage: CourseImage;
  localizations?: null[] | null;
}
