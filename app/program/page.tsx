import styles from './page.module.css'
import { fetchProgram } from '@/app/program/fetchProgram'
import { Title } from '@/components/title/Title'
import dynamic from "next/dynamic";

const FilteredSessions = dynamic(() => import('./FilteredSessions'), { ssr: false })

export default async function ProgramPage() {
  const data = await fetchProgram()

  const sessions = data.sessions.filter(session => session.format !== "workshop")

  return (
    <article>
      <Title>JavaZone Program 2023</Title>
      <FilteredSessions sessions={sessions} />
    </article>
  )
}
