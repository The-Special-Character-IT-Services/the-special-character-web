import Button from '@components/Button';
import Divider from '@components/Divider';
import TextInput from '@components/TextInput';
import AboutEducation from 'container/AboutEducation';
import Banner from 'container/Banner';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <AboutEducation />
    </div>
  );
}
