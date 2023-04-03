import Link from 'next/link'
import styles from './page.module.css'
import AnimatedDivider from "../components/AnimatedDivider";
import AnimatedHero from "../components/AnimatedHero";
import AnimatedFireworks from "../components/AnimatedFireworks";


export default function Home() {
  return (
    <section className={`has-text-centered`}>

      <div className="mb-4">
        <AnimatedHero/>
      </div>

      <div>
        <AnimatedDivider/>
        <AnimatedFireworks/>
      </div>

      <strong>
        <Link className="button is-dark-blue mt-4" href="/speakers">
          Submit your talk!
        </Link>
      </strong>

      <h1 className={`title ${styles.fontAndColor} mt-4`}>
        Welcome to the The Amazing JavaZone 6-7 September in Oslo Spektrum
      </h1>
      <div className={'mb-4'}>
        <p>Conference: September 6-7, 2023</p>
        <p>Workshop: September 5, 2023</p>
        <p>Location: Oslo Spektrum, Norway</p>
      </div>
      <div>
        <div>
          Click <Link href="https://2022.javazone.no/#/program">here</Link> to view the program of
          JavaZone 2022
        </div>
        <div>
          <Link href="/tickets">Ticket sale</Link> opens February 20th
        </div>
        <div className="has-text-weight-bold">
          NB! Want to be a partner? Click <Link href="/partners">here</Link>
        </div>
      </div>
      <div className="mt-6">
        <AnimatedDivider/>
      </div>
    </section>
  )
}
