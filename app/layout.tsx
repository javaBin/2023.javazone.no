import { ReactNode } from 'react'
import '../styles/globals.scss'
import { Footer } from './footer'
import { Header } from './header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JavaZone 2023',
  description: 'The biggest community-driven Java conference.',
  creator: 'JavaBin',
  authors: {
    url: 'https://java.no',
    name: 'JavaBin',
  },
  themeColor: '#fff',
  icons: '/images/javazone2023-fav.png',
  twitter: {
    card: 'summary',
    title: 'JavaZone',
    site: '@javazone',
    creator: 'JavaZone',
    images: 'https://pbs.twimg.com/profile_images/1635386828239912960/Wrrd1NMU_400x400.png',
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
      <body className="has-navbar-fixed-top">
        <Header />
        <div className={`hero is-fullheight`}>
          <div className={`hero-body`}>
            <div className="container is-max-desktop">
              <main>{children}</main>
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
