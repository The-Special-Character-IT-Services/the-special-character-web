import Button from '@components/Button';
import Card from '@components/Card';
import Images from '@components/Images';
import Typography from '@components/Typography';
import Image from 'next/image';
import router from 'next/router';
import React from 'react';
import styles from './blog.module.scss';

interface Props {
  data?: string[] | Object;
}

const BlogContainer = ({ data }: Props) => {
  const goToBlog = () => {
    router.push('/blog');
  };
  return (
    <>
      <section className={styles.container}>
        {!isBlog && (
          <div className={styles.main}>
            <Typography variant="h2">Resources & News</Typography>
            <Button className="secondary" onClick={goToBlog}>
              {data.browseBlog.buttonText}
            </Button>
          </div>
        )}
        <div className="cards">
          <div className={styles.cards}>
            <Card variant="cardHover">
              <a href="/blog/1" className={styles.cardDiv}>
                <Image
                  src="/abouteducation.jpeg"
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
                    How to design a simple, yet unique and memorable brand
                    identity
                  </Typography>
                </div>
              </a>
            </Card>
            <div className={styles.sideDiv}>
              <a href="/blog/1">
                <Card variant="cardHover" className={styles.sideCardDiv}>
                  <Image
                    src="/abouteducation.jpeg"
                    height={152}
                    width={270}
                    alt="blog post"
                  />
                  <div className={styles.blogCard}>
                    <Typography variant="h3">
                      5 marketing trends that you should be prepared for in 2022
                    </Typography>
                  </div>
                </Card>
              </a>
              <a href="/blog/1">
                <Card variant="cardHover" className={styles.sideCardDiv}>
                  <Image
                    src="/abouteducation.jpeg"
                    height={152}
                    width={270}
                    alt="blog post"
                  />
                  <div className={styles.blogCard}>
                    <Typography variant="h3">
                      5 marketing trends that you should be prepared for in 2022
                    </Typography>
                  </div>
                </Card>
              </a>
              <a href="/blog/1">
                <Card variant="cardHover" className={styles.sideCardDiv}>
                  <Image
                    src="/abouteducation.jpeg"
                    height={152}
                    width={270}
                    alt="blog post"
                  />
                  <div className={styles.blogCard}>
                    <Typography variant="h3">
                      5 marketing trends that you should be prepared for in 2022
                    </Typography>
                  </div>
                </Card>
              </a>
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
