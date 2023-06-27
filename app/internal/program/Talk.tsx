import {Session} from './program'
import styles from './page.module.css'
import {formatter, prettyFormat, prettyLanguage} from './utils'
import {ReadMore} from "@/components/ReadMore"

export const Talk = ({
  session: { endTime, format, language, room, speakers, startTime, title, abstract },
}: {
  session: Session
}) => (
  <li className={styles.session}>
    <h3 className={styles.session_title}>{title}</h3>
    <p>Speakers: {speakers.map((speaker) => speaker.name).join(', ')}</p>
    <p>Type: {prettyFormat(format)}</p>
    <p>Language: {prettyLanguage(language)}</p>
    {startTime && <p>{formatter.format(new Date(startTime))}</p>}
    {endTime && <p>{formatter.format(new Date(endTime))}</p>}
    {room && <p>{room}</p>}
    <ReadMore>{abstract}</ReadMore>
  </li>
)

