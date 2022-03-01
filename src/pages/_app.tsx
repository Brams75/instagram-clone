import type { AppProps } from 'next/app';
import Header from 'src/modules/common/components/Header';
import GlobalStyles from 'src/styles/GlobalStyles';
import 'sanitize.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
