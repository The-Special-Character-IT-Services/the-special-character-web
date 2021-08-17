import Card from '@components/Card';
import Typography from '@components/Typography';
import Image from 'next/image';
import React from 'react';
import styles from './blogFeatured.module.scss';

interface Props {}

const BlogFeatured = (props: Props) => {
  return (
    <section className="blog-featured">
      <div className="container">
        <div className={styles.cards}>
          <Card variant="cardHover" className={styles.cardDiv}>
            <Image
              src="/abouteducation.jpeg"
              height={500}
              width={500}
              alt="blog post"
            />
            <div className={styles.designbtn}>
              <Image src="/design.svg" height={18} width={18} alt="design" />
              Design
            </div>
            <div className={styles.blogCard}>
              <Typography>April 20,2021</Typography>
              <Typography variant="h3">
                How to design a simple, yet unique and memorable brand identity
              </Typography>
            </div>
          </Card>
          <div className={styles.sideDiv}>
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
          </div>
        </div>
      </div>
      <style jsx>{`
        @import './styles/variables.scss';
        .blog-featured {
          padding-top: 190px;
          padding-bottom: 126px;
        }
        .container {
          max-width: 1209px;
          margin-right: auto;
          margin-left: auto;
          padding-right: 24px;
          padding-left: 24px;
        }
        @media screen and (max-width: $breakpointLgForMw) {
          .blog-featured {
            padding-top: 152px;
            padding-bottom: 101px;
          }
        }
        @media screen and (max-width: $breakpointMdForMw) {
          .blog-featured {
            padding-top: 122px;
            padding-bottom: 81px;
          }
        }
        @media screen and (max-width: $breakpointSmForMw) {
          .blog-featured {
            padding-top: 98px;
            padding-bottom: 65px;
          }
          .container {
            padding-right: 16px;
            padding-left: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default BlogFeatured;
