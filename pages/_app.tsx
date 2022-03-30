import '../styles/globals.scss';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import Layout from '@components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout component={'span'}>
      <Component {...pageProps} />
    </Layout>
  );
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric);
// }

export default MyApp;
