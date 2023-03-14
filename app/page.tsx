import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <section className={`has-text-centered`}>
      <div className="mb-4">
        <Image src="/JZ2023-Hero.svg" height={600} width={600} alt="hero" />
      </div>
      <div>
        <Image src="/JZ2023-Divider.svg" height={60} width={60} alt="divider" />
      </div>

      <strong>
        <Link className="button is-dark-blue mt-4" href="/speakers">
          Submit your talk!
        </Link>
      </strong>

      <h1 className={`title ${styles.fontAndColor} mt-4`}>
        Welcome to the The Amazing JavaZone 6-7 September in Oslo Spektrum
      </h1>
      <h2 className={`subtitle ${styles.fontAndColor}`}>Conference: September 6-7, 2023</h2>
      <div className={'mb-4'}>
        <h2 style={{ color: '#F6DA98' }}>Workshop: September 5, 2023</h2>
        <h3>Location: Oslo Spektrum, Norway</h3>
      </div>
      <div>
        <p>
          Click <Link href="https://2022.javazone.no/#/program">here</Link> to view the program of
          JavaZone 2023
        </p>
        <p>
          <Link href="/tickets">Ticket sale</Link> opens February 20th
        </p>
        <p className="has-text-weight-bold">
          NB! Want to be a partner? Click <Link href="/partners">here</Link>
        </p>
      </div>
      <div className="mt-6">
        <Image src="/JZ2023-Divider.svg" height={60} width={60} alt="divider" />
      </div>
    </section>
  )
}
