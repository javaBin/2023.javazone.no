import { ReactNode } from 'react'
import '../styles/globals.css'
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
      <body className="pt-[3.25rem]">
        <Header />
        <div className="min-h-screen flex flex-col justify-between items-stretch">
          <div className="flex items-center grow shrink-0 py-12 !px-6 md:!px-12 ">
            <div className="relative grow shrink w-auto my-0 w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] mx-auto">
              <main>{children}</main>
            </div>
          </div>
          <div className="flex-grow-0 shrink">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
