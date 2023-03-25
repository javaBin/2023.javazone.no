import { ReactNode } from 'react'
import '../styles/globals.scss'
import { Footer } from './footer'
import { Header } from './header'
import Head from "next/head";
import {Metadata} from "next";

export const metadata: Metadata = {
  themeColor: '#fff',
  icons: "/images/javazone2023-fav.png",
  twitter: {
    card: 'summary',
    title: "JavaZone",
    site: '@javazone',
    creator: 'JavaZone',
    images: "https://pbs.twimg.com/profile_images/1635386828239912960/Wrrd1NMU_400x400.png",
    description: 'JavaZone - The biggest community-driven Java conference.',
  },
  openGraph: {
    title: 'JavaZone 2023',
    type: 'website',
    url: 'https://2023.javazone.no',
    description: 'The biggest community-driven Java conference.',
    siteName: 'javazone.no',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
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
          <div className={`hero-body`}>
            <div className="container is-max-desktop">
              <main>
                {children}
              </main>
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
