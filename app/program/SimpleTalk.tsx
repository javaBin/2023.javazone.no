import React, { ReactNode } from 'react'
import styles from './page.module.css'
import { formatter, prettyFormat, prettyLanguage } from './utils'
import { Session } from '@/app/program/program'
import Link from 'next/link'
import { Title } from '@/components/title/Title'

export const SimpleTalk = ({
  session: { endTime, format, language, room, speakers, startTime, title, id, length },
  children,
}: {
  session: Session
  children?: ReactNode
}) => (
  <div className="styles.session">
  <Link href={`/program/${id}`} className="text-[#F6DA98] hover:text-[#F6DA98]">
    <li className="flex flex-col gap-4 m-8 p-8 shadow-2xl bg-[#033E4F] whitespace-pre-line">
      <Title type="program">{title}</Title>
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
