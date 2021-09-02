import Button from '@components/Button';
import Card from '@components/Card';
import Images from '@components/Images';
import Typography from '@components/Typography';
import Image from 'next/image';
import router from 'next/router';
import styles from './blog.module.scss';

interface Props {
  data?: string[] | Object;
  isBlog?: Boolean;
}

const BlogContainer = ({ data, isBlog }: Props) => {
  return (
    <>
      <section className={styles.container}>
        {!isBlog && (
          <div className={styles.main}>
            <Typography variant="h2">Resources & News</Typography>
            <Button
              className="secondary"
              onClick={() => {
                router.push(data?.browseBlog?.link);
              }}>
              {data?.browseBlog?.buttonText}
            </Button>
          </div>
        )}
        <div className="cards">
          <div className={styles.cards}>
            <Card variant="cardHover">
              <a href={`blogs/${data.id}`} className={styles.cardDiv}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data?.featuredBlog?.bannerImage?.url}`}
                  height={500}
                  width={500}
                  alt="blog post"
                />
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
                  <Typography>April 20,2021</Typography>
                  <Typography variant="h3">
                    {data?.featuredBlog?.title}
                  </Typography>
                </div>
              </a>
            </Card>

            <div className={styles.sideDiv}>
              {data.blogs.map(x => {
                return (
                  <a key={x?.id} href={`blogs/${x?.id}`}>
                    <Card variant="cardHover" className={styles.sideCardDiv}>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${x?.bannerImage?.url}`}
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
            padding: 10rem 1rem;
          }
        `}</style>
      )}
    </>
  );
};

export default BlogContainer;
