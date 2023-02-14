import Link from 'next/link'

export default function Home() {
  return (
    <main className="has-text-centered">
      <h1 className="title">JavaZone 2023</h1>
      <h2 className="subtitle">Conference: September 6-7, 2023</h2>
      <h2>Workshop: September 5, 2023</h2>
      <h3>Location: Oslo Spektrum, Norway</h3>
      <p>
        Click <Link href="https://2022.javazone.no/#/program">here</Link> to view the program of
        JavaZone 2022
      </p>
      <p><Link href="/tickets">Ticket sale</Link> opens February 20th</p>
      <p className="has-text-weight-bold">
        NB! Want to be a partner? Click <Link href="/partners">here</Link>
      </p>
    </main>
  )
}
