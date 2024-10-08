import Header from '@/components/Header'
import GlobalStyle from '@/styles/GlobalStyles'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { type ReactElement } from 'react'

export default function App ({ Component, pageProps }: AppProps): ReactElement {
  return <>
    <Head>
      <title>Écio Ferraz | Portfolio</title>
      <meta name="description" content="Écio Ferraz | Portfolio" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
      </style>
    </Head>

    <GlobalStyle />

    <Header />

    <Component {...pageProps} />
  </>
}
