import Link from 'next/link'
import Image from "next/image";
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={`has-text-centered`}>

      <div className="mb-6">
        <Image src="/JZ2023-Hero.svg" height={600} width={600} alt="hero"/>
      </div>
      <div>
        <Image src="/JZ2023-Divider.svg" height={200} width={200} alt="divider"/>
      </div>

      <h1 className={`title ${styles.test} mt-6`} style={{color: "#FED12D"}}>Welcome to the The Amazing JavaZone 6-7 September in Oslo Spektrum</h1>
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
