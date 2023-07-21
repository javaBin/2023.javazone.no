import { prettyFormat } from './utils'
import { Session, SessionFormat } from '@/app/program/program'
import { SimpleTalk } from '@/app/program/SimpleTalk'
import { Title } from '@/components/title/Title'

export const SessionGroup = ({
  group,
  sessions,
}: {
  group: SessionFormat
  sessions: Session[]
}) => (
  <section id={group}>
    <ul className="py-4">
      <Title type="subtitle">{prettyFormat(group)}</Title>
      {sessions.map((session) => (
        <SimpleTalk session={session} key={session.id} />
      ))}
    </ul>
  </section>
)
