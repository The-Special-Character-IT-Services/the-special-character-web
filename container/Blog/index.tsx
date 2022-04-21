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
  if (!data) {
    return null;
  }
  return (
    <>
      <section className={styles.container}>
        {!isBlog && (
          <div className={styles.main}>
            <Typography variant="h2">Resources & News</Typography>
            <Button
              className="secondary"
              onClick={() => {
                router.push(data?.blogSection?.browseBlog?.link);
              }}>
              {data?.blogSection?.browseBlog?.buttonText}
            </Button>
          </div>
        )}
        <div className="cards">
          <div className={styles.cards}>
            <Card variant="cardHover">
              <a href={`blogs/${data?.id}`} className={styles.cardDiv}>
                {data?.blogSection?.featuredBlog?.bannerImage?.url && (
                  <Image
                    src={data.blogSection.featuredBlog.bannerImage.url}
                    height={500}
                    width={500}
                    alt="blog post"
                  />
                )}
                <div className={styles.designbtn}>
                  <Image
                    src="/design.svg"
                    height={18}
                    width={18}
                    alt="design"
                  />
                  Design
                </div>
                <div className={styles.blogCard}>
                  <Typography>
                    {/* {format(new Date(data.updated_at), 'MMM dd YYY')} */}
                  </Typography>
                  <Typography variant="h3">
                    {data?.courseBanner?.heading?.title}
                  </Typography>
                </div>
              </a>
            </Card>

            <div className={styles.sideDiv}>
              {data?.blogSection?.blogs?.map((x, i) => {
                return (
                  <a
                    key={x?.id}
                    // className={
                    //   data.blogs.length <= 2 && i === 0 && styles.anchor
                    // }
                    href={`blogs/${x?.id}`}>
                    <Card variant="cardHover" className={styles.sideCardDiv}>
                      <Image
                        src={x.bannerImage.url}
                        height={152}
                        width={270}
                        alt="blog post"
                      />
                      <div className={styles.blogCard}>
                        <Typography variant="h3">{x?.title}</Typography>
                      </div>
                    </Card>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {isBlog && (
        <style jsx>{`
          .cards {
            padding: 10rem 0rem 0rem;
          }
        `}</style>
      )}
    </>
  );
};

export default BlogContainer;
