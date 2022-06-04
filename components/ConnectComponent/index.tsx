import Image from 'next/image'
import React from 'react'
import styles from './connect.module.css'
import Facebook from '../../public/svg/facebook.svg';
import LinkedIn from '../../public/svg/linkedin.svg';
import Twitter from '../../public/svg/twitter.svg';
import Github from '../../public/svg/github.svg';
import Link from 'next/link';

const ConnectComponent = () => {
  return (
    <main className={styles['connect-page']}>
      <section className={styles['connect-component']}>
        <div role='banner' className={styles['tsc-logo']} >
        <Image src={'/tsc-logo.png'} width={100} height={100} layout='responsive' alt='TSC Logo' />
        </div>
        <h2 role='presentation' >The Special Character</h2>
        <h3 role='contentinfo'>Learn. Work. Grow.</h3>
        <h1>Program your own Freedom</h1>
        <Link href='/'>
        <div className={styles['tile']}>
          <p>Know us better</p>
        </div>
        </Link>
        <a href="https://twitter.com/TheSpecialChar">
        <div className={styles['tile']}>
          <p>Get daily updates</p>
        </div>
        </a>
        <a href="https://www.facebook.com/search/top?q=the%20special%20character%20it%20services">
        <div className={styles['tile']}>
          <p>Connect with us</p>
        </div>
        </a>
        <a href="https://www.linkedin.com/search/results/all/?keywords=the%20special%20character&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=9793e298-fd62-4f01-b5d7-d99ec97b2cea&sid=!Eh">
        <div className={styles['tile']}>
          <p>Build career with us</p>
        </div>
        </a>
        <a href="https://www.instagram.com/thespecialchar/">
        <div className={styles['tile']}>
          <p>Tech-info updates</p>
        </div>
        </a>
      </section>
      <section className={styles['social-media']}>
        <a href="https://www.facebook.com/search/top?q=the%20special%20character%20it%20services"><Facebook width={10} height={10} /></a>
        <a href="https://www.linkedin.com/search/results/all/?keywords=the%20special%20character&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=9793e298-fd62-4f01-b5d7-d99ec97b2cea&sid=!Eh"><LinkedIn width={10} height={10} /></a>
        <a href="https://twitter.com/TheSpecialChar"><Twitter width={10} height={10} /></a>
        <a href=""><Github width={10} height={10} /></a>
      </section>
    </main>
  )
}

export default ConnectComponent;