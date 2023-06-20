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
  twitter: {
    card: 'summary_large_image',
    title: 'JavaZone',
    site: '@javazone',
    creator: 'JavaZone',
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
