import Link from 'next/link'
import styles from './layout.module.css'

export function Header() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles['navigation-links']}>
        <li>
          <Link href="/">JavaZone 2023 - JavaBin</Link>
        </li>
        <li>
          <Link href="/partners">Partners</Link>
        </li>
        <li>
          <Link href="/speakers">Speakers</Link>
        </li>
      </ul>
    </nav>
  )
}
