import styles from './page.module.css'
import { formatter, prettyFormat, prettyLanguage } from './utils'
import { Session } from '@/app/program/program'
import Link from 'next/link'
import { ReactNode } from 'react'

export const SimpleTalk = ({
  session: { endTime, format, language, room, speakers, startTime, title, id, length },
  children,
}: {
  session: Session
  children?: ReactNode
}) => (
  <div className={styles.session}>
    <Link href={`/program/${id}`} className={styles.session_link}>
      <li className={styles.session_item}>
        <h3 className={styles.session_title}>{title}</h3>
        <p>Speakers: {speakers.map((speaker) => speaker.name).join(', ')}</p>
        <p>Type: {prettyFormat(format)}</p>
        <p>Language: {prettyLanguage(language)}</p>
        <p>Length: {length} minutes</p>
        {startTime && <p>{formatter.format(new Date(startTime))}</p>}
        {endTime && <p>{formatter.format(new Date(endTime))}</p>}
        {room && <p>{room}</p>}
      </li>
    </Link>
    {children}
  </div>
)
