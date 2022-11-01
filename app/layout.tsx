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
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
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
      </head>
      <body>
        {children}
        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Laget av JavaBin
          </a>
        </footer>
      </body>
    </html>
  )
}
