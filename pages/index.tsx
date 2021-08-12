<<<<<<< HEAD
import Button from '@components/Button';
import Divider from '@components/Divider';
import Perk from '@container/Perk';
import Teachers from '@container/Teachers';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
=======
import Banner from 'container/Banner';
import Courses from 'container/Courses';
import Ratings from 'container/Ratings';
>>>>>>> main

export default function Home() {
  return (
    <>
      <Banner />
      <Courses />
      <Perk />
      <Teachers />
      <Ratings />
    </>
  );
}
