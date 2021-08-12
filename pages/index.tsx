import Button from '@components/Button';
import Divider from '@components/Divider';
import Perk from '@container/Perk';
import Teachers from '@container/Teachers';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Perk />
      <Teachers />
    </>
  );
}
