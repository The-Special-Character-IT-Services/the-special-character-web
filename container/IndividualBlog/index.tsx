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

interface Props {}

const IndividualBlog = ({ data }: Props) => {
  const { HTML } = useMarkdown(data?.content);
  console.log(HTML);
  return (
    <section className={styles.individualBlog}>
      <div className={styles.imgDiv}>
        <Images
          alt="blog Description"
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data?.bannerImage?.url}`}
          height={900}
          width={1600}
          className={styles.img}
        />
        <div className={styles.shape1} />
        <div className={styles.shape2} />
      </div>
      <div className={styles.blogSection}>
        <Typography variant="h1">{data?.title}</Typography>
        <div className={styles.author}>
          <div className={styles.avatar}>
            <Images
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data?.bannerImage?.formats?.thumbnail?.url}`}
              variant="avtar"
              alt="avtar"
              height={30}
              width={80}
            />
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
            {data.categories.map(item => {
              return (
                <Button key={item.id} className={styles.button}>
                  <Marketing className={styles.marketing} />
                  {item.title}
                </Button>
              );
            })}
          </div>
        </div>
        <Divider className={styles.divider} />
        <div className={styles.avatarCard}>
          <Card variant="cardHover">
            <Images
              variant="avtar"
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data?.bannerImage?.formats?.thumbnail?.url}`}
              alt="author img"
              height={200}
              width={200}
            />
            <div className={styles.authInfo}>
              <Typography
                variant="h3"
                className={
                  styles.name
                }>{`${data?.blog_author?.firstname} ${data?.blog_author?.lastname}`}</Typography>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maxime, repellendus.
              </Typography>
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
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IndividualBlog;
