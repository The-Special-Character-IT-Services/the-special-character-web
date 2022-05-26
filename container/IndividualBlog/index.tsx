import Button from '@components/Button';
import Divider from '@components/Divider';
import Images from '@components/Images';
import Typography from '@components/Typography';
import React from 'react';
import styles from './individualBlog.module.scss';
import Marketing from '../../public/svg/Marketing.svg';
import Card from '@components/Card';
import Image from 'next/image';
import useMarkdown from 'hooks/useMarkdown';
import { IndividualBlogTypes } from 'types';

interface Props {
  data: IndividualBlogTypes;
}

const IndividualBlog = ({ data }: Props) => {
  const { HTML } = useMarkdown(data?.content);
  return (
    <section className={styles.individualBlog}>
      <div className={styles.imgDiv}>
        {data?.bannerImage?.url && (
          <Images
            alt="blog Description"
            src={`${data?.bannerImage?.url}`}
            height={900}
            width={1600}
            className={styles.img}
          />
        )}
        <div className={styles.shape1} />
        <div className={styles.shape2} />
      </div>
      <div className={styles.blogSection}>
        <Typography variant="h1">{data?.title}</Typography>
        <div className={styles.author}>
          <div className={styles.avatar}>
            {data?.bannerImage?.formats?.thumbnail?.url && (
              <Images
                src={`${data?.bannerImage?.formats?.thumbnail?.url}`}
                variant="avtar"
                alt="avtar"
                height={80}
                width={80}
                className={styles.avtrImg}
              />
            )}
            <div className={styles.info}>
              <Typography
                variant="h4"
                className={
                  styles.name
                }>{`${data?.blog_author?.firstname}  ${data?.blog_author?.lastname}`}</Typography>
              <Typography>{data.updated_at}</Typography>
            </div>
          </div>
          <div>
            {data?.categories?.map(item => {
              return (
                <Button key={item?.id} className={styles.button}>
                  <Marketing className={styles.marketing} />
                  {item?.title}
                </Button>
              );
            })}
          </div>
        </div>
        <Divider className={styles.divider} />
        {/* edit here */}
        <div className={styles.blogContentWrapper}>
          {/* {' '}
          problem is in the div */}
          <div dangerouslySetInnerHTML={{ __html: HTML }} />
        </div>
        <Card variant="cardHover" className={styles.avatarCard}>
          <Images
            variant="avtar"
            src={`${data?.bannerImage?.formats?.thumbnail?.url}`}
            alt="author img"
            height={200}
            width={200}
            className={styles.avtrImg}
          />
          <div className={styles.authInfo}>
            <Typography
              component={'span'}
              variant="h3"
              className={
                styles.name
              }>{`${data?.blog_author?.firstname} ${data?.blog_author?.lastname}`}</Typography>
            <Typography component={'span'}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
              repellendus.
            </Typography>
            <div className={styles.buttonDiv}>
              <Button className={`${styles.mr} socialIcon`}>
                <Image
                  src="/svg/facebook.svg"
                  height={30}
                  width={30}
                  alt="social icon"
                />
              </Button>
              <Button className={`${styles.mr} socialIcon`}>
                <Image
                  src="/svg/facebook.svg"
                  height={30}
                  width={30}
                  alt="social icon"
                />
              </Button>
              <Button className={`${styles.mr} socialIcon`}>
                <Image
                  src="/svg/facebook.svg"
                  height={30}
                  width={30}
                  alt="social icon"
                />
              </Button>
              <Button className={`${styles.mr} socialIcon`}>
                <Image
                  src="/svg/facebook.svg"
                  height={30}
                  width={30}
                  alt="social icon"
                />
              </Button>
            </div>
          </div>
        </Card>
      </div>
      <div className={styles.middleRound} />
    </section>
  );
};

export default IndividualBlog;
