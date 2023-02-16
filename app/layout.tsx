import { ReactNode } from 'react'
import '../styles/globals.scss'
import { Footer } from './footer'
import { Header } from './header'
import styles from './layout.module.css'
import Head from "next/head";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
        <meta name="theme-color" content="#fff" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@JavaZone" />
        <meta name="twitter:image:alt" content="JavaZone logo" />
        <meta
          name="description"
          content="JavaZone - The biggest community-driven Java conference."
        />
        <meta property="og:title" content="JavaZone 2023" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://2023.javazone.no" />
        <meta property="og:description" content="The biggest community-driven Java conference." />
        <meta property="og:site_name" content="javazone.no" />
        <title>JavaZone 2023</title>
      </Head>
      <body className="has-navbar-fixed-top">

      <Header />
        <div className={`hero is-fullheight`}>
          <div className={`hero-body ${styles.mainBackGround}`}>
            <div className="container is-max-desktop">
              {children}
            </div>
          </div>
          <div className="hero-foot">
            <Footer />
          </div>
        </div>

      </body>
    </html>
  )
}
