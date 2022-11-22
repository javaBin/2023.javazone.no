import styles from "./page.module.css"
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>JavaZone 2023</h1>
      <h2>Conference: 6-7 september, 2023</h2>
      <h2>Workshop: 5 september, 2023</h2>
      <h3>Location: Oslo Spektrum, Norway</h3>
      <aside>
        <p>Click <Link href="https://2022.javazone.no/#/program">here</Link> to view the program of JavaZone 2022</p>
      </aside>
    </main>
  )
}
