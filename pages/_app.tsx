import { GoogleOAuthProvider } from '@react-oauth/google';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { ...pageProps } }: any) {
  return (
    <GoogleOAuthProvider
      clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}
    >
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}

export default MyApp;
