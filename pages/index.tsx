import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('components/Header'), {
  // eslint-disable-next-line react/display-name
  loading: () => <h1>hello</h1>,
});

export default function Home() {
  return (
    <main>
      <Header />
      <div>hello</div>
    </main>
  );
}
