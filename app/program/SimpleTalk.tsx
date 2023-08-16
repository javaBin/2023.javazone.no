import React, { ReactNode } from 'react'
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
  <div className="@container">
    <div className="@lg:flex items-center justify-between gap-4 m-4 p-8 shadow-2xl bg-dark-blue-background">
      <Link
        href={`/program/${id}`}
        className="w-full hover:w-full text-normal-text-color hover:text-normal-text-color"
      >
        <li className="whitespace-pre-line list-none [&>p]:my-2">
          <Title type="program">{title}</Title>
          <p>Speakers: {speakers.map((speaker) => speaker.name).join(', ')}</p>
          <p>Type: {prettyFormat(format)}</p>
          <p>Language: {prettyLanguage(language)}</p>
          <p>Length: {length} minutes</p>
          {startTime && <p>Start: {formatter.format(new Date(startTime))}</p>}
          {endTime && <p>End: {formatter.format(new Date(endTime))}</p>}
          {room && <p>{room}</p>}
        </li>
      </Link>
      {children}
    </div>

  </div>
)
