import styles from './page.module.css'
import { fetchProgram } from '@/app/program/fetchProgram'
import dynamic from "next/dynamic";

const FilteredSessions = dynamic(() => import('./FilteredSessions'), { ssr: false })

export default async function ProgramPage() {
  const data = await fetchProgram()

  const sessions = data.sessions.filter(session => session.format !== "workshop")

  return (
    <article>
      <h1 className={styles.program_title}>JavaZone Program 2023</h1>
      <FilteredSessions sessions={sessions} />
    </article>
  )
}
