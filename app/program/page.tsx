import { Session, SessionFormat } from './program'
import styles from './page.module.css'
import { SessionGroup } from './SessionGroup'
import { fetchProgram } from '@/app/program/fetchProgram'

export default async function ProgramPage() {
  const data = await fetchProgram()

  const sessionsGroupedByType = data.sessions.reduce((groups, session) => {
    groups[session.format] = groups[session.format] ?? []
    groups[session.format].push(session)
    return groups
  }, {} as Record<SessionFormat, Session[]>)

  return (
    <article>
      <h1 className={styles.program_title}>JavaZone Program 2023</h1>
      <SessionGroup group={'presentation'} sessions={sessionsGroupedByType['presentation']} />
      <SessionGroup group={'lightning-talk'} sessions={sessionsGroupedByType['lightning-talk']} />
    </article>
  )
}
