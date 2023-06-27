import {Session, SessionFormat} from './program'
import styles from './page.module.css'
import {prettyFormat} from './utils'
import {Talk} from './Talk'

export const SessionGroup = ({
  group,
  sessions,
}: {
  group: SessionFormat
  sessions: Session[]
}) => (
  <ul className={styles.content}>
    <h2 className={styles.session_title}>{prettyFormat(group)}</h2>
    {sessions.map((session) => (
      <Talk session={session} key={session.id} />
    ))}
  </ul>
)
