import { Program, Session, SessionFormat } from './program'
import styles from './page.module.css'
import { SessionGroup } from './SessionGroup'

export default async function ProgramPage() {
  const data: Program = await fetch(
    'https://sleepingpill.javazone.no/public/allSessions/javazone_2023',
    {
      next: {
        revalidate: 60 * 10, // 10 minute cache
        tags: ['talks'],
      },
    },
  ).then((res) => res.json())

  const sessionsGroupedByType = data.sessions.reduce((groups, session) => {
    groups[session.format] = groups[session.format] ?? []
    groups[session.format].push(session)
    return groups
  }, {} as Record<SessionFormat, Session[]>)

  return (
    <article>
      <h1 className={styles.program_title}>JavaZone Program 2023</h1>
      <section key="talks">
        <SessionGroup group={'presentation'} sessions={sessionsGroupedByType['presentation']} />
        <SessionGroup group={'lightning-talk'} sessions={sessionsGroupedByType['lightning-talk']} />
        <SessionGroup group={'workshop'} sessions={sessionsGroupedByType['workshop']} />
      </section>
    </article>
  )
}
