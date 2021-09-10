import '../styles/globals.scss';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { IKContext } from 'imagekitio-react';
import Layout from '@components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const urlEndpoint = 'https://ik.imagekit.io/mdzi40eohii/production/images';
  return (
    <Layout>
      <IKContext urlEndpoint={urlEndpoint}>
        <Component {...pageProps} />
      </IKContext>
    </Layout>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

export default MyApp;
