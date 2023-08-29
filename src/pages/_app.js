import '@/styles/globals.css'
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return <>
    <Script src="/global.js" strategy="beforeInteractive" />
    <Component {...pageProps} />
  </>
}
