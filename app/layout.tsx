import { ReactNode } from 'react'

import '../styles/globals.css'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="no">
      <head>
        <title>JavaZone 2023</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
