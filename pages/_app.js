import React from 'react'
import '../styles/globals.css'
import SiteHeader from '../components/SiteHeader'

export default function MyApp({ Component, pageProps }) {
  return(
    <>
      <SiteHeader />
      <Component {...pageProps} />
    </>
  ) 
}
