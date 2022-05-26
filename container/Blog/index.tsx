import Button from '@components/Button';
import Card from '@components/Card';
import Images from '@components/Images';
import Typography from '@components/Typography';
import Image from 'next/image';
import router from 'next/router';
import styles from './blog.module.scss';
import format from 'date-fns/format';
import { BlogTypes } from 'types';

interface Props {
  data?: BlogTypes;
  isBlog?: Boolean;
}

const BlogContainer = ({ data, isBlog }: Props) => {
  console.log('data', data);

  const [blogSection, blogs] = data;
  console.log('blogs', blogs);
  console.log('blogSection', blogSection);

  if (!data) {
    return null;
  }
  return (
    <>
      <section className={styles.container}>
        {!isBlog && (
          <div className={styles.main}>
            <Typography variant="h2" style={{ fontFamily: 'auto !important' }}>
              Resources & News
            </Typography>
            <Button
              className="secondary"
              onClick={() => {
                router.push(blogSection?.browseBlog?.link);
              }}>
              {blogSection?.browseBlog?.buttonText}
            </Button>
          </div>
        )}
        <div className={styles.cards}>
          <Card variant="cardHover" className={styles.fullCard}>
            <a
              href={`blogs/${blogSection?.featuredBlog?.id}`}
              className={styles.cardDiv}>
              {blogSection?.featuredBlog?.bannerImage?.url && (
                <Image
                  src={blogSection.featuredBlog.bannerImage.url}
                  height={500}
                  width={500}
                  alt="blog post"
                />
              )}
              <div className={styles.designbtn}>
                <Image src="/design.svg" height={18} width={18} alt="design" />
                Design
              </div>
              <div className={styles.blogCard}>
                <Typography>
                  {/* {format(new Date(data.updated_at), 'MMM dd YYY')} */}
                </Typography>
                <Typography variant="h3">
                  {blogSection?.featuredBlog?.title}
                </Typography>
              </div>
            </a>
          </Card>
          <div className={styles.sideDiv}>
            {blogSection?.blogs?.map(x => {
              console.log('x.title', x.title);
              return (
                <Card
                  key={x?.id}
                  variant="cardHover"
                  className={styles.sideCardDiv}>
                  <a href={`blogs/${x?.id}`} className={styles.sideCardDiv}>
                    <Image
                      src={x.bannerImage.url}
                      height={200}
                      width={250}
                      alt="blog post"
                    />
                    <div className={styles.blogCard}>
                      <Typography variant="h3">{x.title}</Typography>
                    </div>
                  </a>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogContainer;
