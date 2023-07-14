import styles from './page.module.css'
import { prettyFormat } from './utils'
import { SimpleTalk } from './SimpleTalk'
import { Session, SessionFormat } from '@/app/program/program'

export const SessionGroup = ({
  group,
  sessions,
}: {
  group: SessionFormat
  sessions: Session[]
}) => (
  <section id={group}>
    <ul className={styles.content}>
      <h2 className={styles.session_title}>{prettyFormat(group)}</h2>
      {sessions.map((session) => (
        <SimpleTalk session={session} key={session.id} />
      ))}
    </ul>
  </section>
)
