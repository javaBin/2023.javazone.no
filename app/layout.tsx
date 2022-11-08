import { ReactNode } from 'react'

import '../styles/globals.css'
import styles from './layout.module.css'
import { Footer } from './footer'
import { Header } from './header'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
