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
export interface LargeOrSmallOrMediumOrThumbnail1 {
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
export interface LargeOrSmallOrMediumOrThumbnail2 {
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
export interface Heading {
  id: number;
  title: string;
  description: string;
}
export interface ButtonText {
  id: number;
  buttonText?: string;
  link?: string | any;
}
export interface TimelineEntity {
  id: number;
  title: string;
  description: string;
  number: number;
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

export interface Header {
  id: number;
  title: string;
  description: string;
}

export interface AboutTeacherType {
  id: number;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  heading: Heading;
  buttonText: ButtonText;
  teachers?: TeachersEntity[] | null;
  localizations?: null[] | null;
}

export interface TeachersEntity {
  id: number;
  firstName: string;
  lastName: string;
  description: string;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  jobTitle: string;
  socialMedia?: SocialMediaEntity[] | null;
  image: Image;
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
  contactType: string;
  displayText: string;
  icon: Icon;
  link: string;
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
  teacher: Teacher;
  heading: Heading;
  browse: BrowseOrBecomeTeacher;
  becomeTeacher: BrowseOrBecomeTeacher;
  localizations?: null[] | null;
}
export interface Teacher {
  id: number;
  firstName: string;
  lastName: string;
  description: string;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  jobTitle: string;
  socialMedia?: SocialMediaEntity[] | null;
  image: Image;
}
export interface SocialMediaEntity {
  id: number;
  title: string;
  description?: null;
  link: string;
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
export interface BrowseOrBecomeTeacher {
  id: number;
  buttonText: string;
  link?: string | any;
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
  link?: string | any;
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
  link?: string | any;
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
  feedback?: (FeedbacksEntity | null)[] | null;
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
  icon?: Icon;
  link?: string | any;
}
export interface Enroll {
  id: number;
  buttonText: string;
  link?: string | any;
}
export interface CourseMinimalDetailsEntity {
  id: number;
  title: string;
  description: string;
  icon?: Icon;
}
export interface FeedbacksEntity {
  id: number;
  starRating: number;
  name: string;
  jobTitle: string;
  description: string;
  avatar?: Avatar;
  created_at: string;
  updated_at: string;
  published_at: string;
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
  feedbacks?: FeedbacksEntity[] | null;
  courseImage: CourseImage;
  localizations?: null[] | null;
}
export interface AboutMissionType {
  id: number;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  mission?: MissionEntity[] | null;
  localizations?: null[] | null;
}
export interface MissionEntity {
  id: number;
  title: string;
  description: string;
  image: Image;
}
export interface CourseBannerTypes {
  id: number;
  course: Course;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  heading: CurriculumEntityOrAboutCourseOrResultOrHeading;
  featuredCourse: FeaturedCourse;
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
  aboutCourse: CurriculumEntityOrAboutCourseOrResultOrHeading;
  result: CurriculumEntityOrAboutCourseOrResultOrHeading;
  tags?: TagsEntity[] | null;
  enroll: Enroll;
  courseMinimalDetails?: CourseMinimalDetailsEntity[] | null;
  curriculum?: CurriculumEntityOrAboutCourseOrResultOrHeading[] | null;
  feedback?: null[] | null;
  courseImage: CourseImage;
}
export interface CurriculumEntityOrAboutCourseOrResultOrHeading {
  id: number;
  title: string;
  description: string;
}

export interface Enroll {
  id: number;
  buttonText: string;
  link?: null | any;
}

export interface FeaturedCourse {
  id: number;
  title?: null;
  description: string;
}

export interface AboutCourseOrResultOrHeading1 {
  id: number;
  title: string;
  description?: null;
}

export interface CurriculumEntity {
  id: number;
  title: string;
  description: string;
}
export interface IndividualEventTypes {
  id: number;
  dateOfEvent: string;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  location: string;
  minimalDetails?: MinimalDetailsEntity[] | null;
  category?: CategoryEntityOrRegister[] | null;
  eventDetails: EventDetailsOrEventAgenda;
  eventAgenda: EventDetailsOrEventAgenda;
  register: CategoryEntityOrRegister;
  eventImage: EventImage;
  localizations?: null[] | null;
}
export interface EventDetailsOrEventAgenda {
  id: number;
  title: string;
  description: string;
}
export interface CategoryEntityOrRegister {
  id: number;
  buttonText: string;
  link?: null;
}

export interface AllEventsType {
  id: number;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  heading: EventDetailsOrEventAgendaOrHeading;
  allEventHeading: AllEventHeading;
  categoryButton?: CategoryButtonEntityOrCategoryEntityOrRegister[] | null;
  events?: EventsEntity[] | null;
  localizations?: null[] | null;
}
export interface EventDetailsOrEventAgendaOrHeading {
  id: number;
  title: string;
  description: string;
}
export interface AllEventHeading {
  id: number;
  title: string;
  description?: null;
}
export interface CategoryButtonEntityOrCategoryEntityOrRegister {
  id: number;
  buttonText: string;
  link?: string | any;
}
export interface EventsEntity {
  id: number;
  dateOfEvent: string;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  location: string;
  minimalDetails?: MinimalDetailsEntity[] | null;
  category?: CategoryButtonEntityOrCategoryEntityOrRegister[] | null;
  eventDetails: EventDetailsOrEventAgendaOrHeading;
  eventAgenda: EventDetailsOrEventAgendaOrHeading;
  register: CategoryButtonEntityOrCategoryEntityOrRegister;
  eventImage: EventImage;
}
export interface MinimalDetailsEntity {
  id: number;
  title: string;
  description: string;
  icon?: null;
}
export interface EventImage {
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

export interface EducationType {
  id: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  heading: Heading;
  aboutEducation: AboutEducation;
  educationList?: EducationListEntity[] | null;
  aboutImage: AboutImage;
}

export interface AboutEducation {
  id: number;
  buttonText?: string;
  link?: string | any;
}
export interface EducationListEntity {
  id: number;
  title: string;
  description: string;
  image: Image;
}

export interface AboutImage {
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
export interface CourseCategoryType {
  id: number;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  heading: Heading;
  cardComponent?: CardComponentEntity[] | null;
  localizations?: null[] | null;
}

export interface CardComponentEntity {
  id: number;
  title: string;
  description: string;
  image: Image;
}
export interface SubscriptionType {
  id: number;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  heading: Heading;
  buttonText: ButtonText;
  localizations?: null[] | null;
}
export interface SuccessTypes {
  id: number;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  successHeading: LeftCardsEntityOrRightCardsEntityOrSuccessHeading;
  exploreCourse: ExploreCourse;
  leftCards?: LeftCardsEntityOrRightCardsEntityOrSuccessHeading[] | null;
  rightCards?: LeftCardsEntityOrRightCardsEntityOrSuccessHeading[] | null;
  localizations?: null[] | null;
}
export interface LeftCardsEntityOrRightCardsEntityOrSuccessHeading {
  id: number;
  title: string;
  description: string;
}
export interface ExploreCourse {
  id: number;
  buttonText: string;
  link: string;
}
export interface TestimonialTypes {
  id: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  heading: Heading;
  testimonials?: TestimonialsEntity[] | null;
}

export interface TestimonialsEntity {
  id: number;
  starRating: number;
  description: string;
  name: string;
  jobTitle: string;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  course?: null;
  avatar: Avatar;
}
export interface Avatar {
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

export interface SmallOrThumbnail {
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
export interface BlogBannerTypes {
  id: number;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  heading: Heading;
  localizations?: null[] | null;
}
export interface AllCourseTypes {
  id: number;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  heading: Heading;
  categoryButtons?: CategoryButtonsEntityOrEnroll[] | null;
  courses?: CoursesEntity[] | null;
  localizations?: null[] | null;
}

export interface CategoryButtonsEntityOrEnroll {
  id: number;
  buttonText: string;
  link?: null;
}
export interface AllBlogsType {
  id: number;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  heading: Heading;
  categoryButton?: CategoryButtonEntity[] | null;
  blogs?: BlogsEntity[] | null;
  localizations?: null[] | null;
}

export interface CategoryButtonEntity {
  id: number;
  buttonText: string;
  link?: null;
}
export interface BlogsEntity {
  id: number;
  title: string;
  blog_author: number;
  content: string;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  categories?: (CategoriesEntity | null)[] | null;
  bannerImage: BannerImage;
}
export interface CategoriesEntity {
  id: number;
  title: string;
  description?: null;
  link?: null;
  icon: Icon;
}
