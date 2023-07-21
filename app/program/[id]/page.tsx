import React from 'react'
import { fetchIndividualProgram } from '@/app/program/fetchProgram'
import { formatter, prettyFormat, prettyLanguage } from '@/app/program/utils'
import Image from 'next/image'
import { Session } from '@/app/program/program'
import { Metadata, ResolvingMetadata } from 'next'
import { Title } from '@/components/title/Title'

function getDayAndTime({ endTime, startTime }: Session) {
  if (!startTime || !endTime) {
    return ''
  }
  return formatter.formatRange(new Date(startTime), new Date(endTime))
}

export async function generateMetadata(
  {
    params,
  }: {
    params: {
      id: string
    }
  },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const session = await fetchIndividualProgram(params.id)
  const parentMetadata = await parent
  return {
    title: session?.title
      ? `JavaZone 2023 ${session.format}: ${session.title} - by ${session.speakers
          .map((speaker) => speaker.name)
          .join(', ')}`
      : parentMetadata.title,
    description: session?.abstract ?? parentMetadata.description,
    openGraph: {
      ...(parentMetadata.openGraph && parentMetadata.openGraph),
      locale: session?.language,
      title: session?.title
        ? `JavaZone 2023 ${session.format}: ${session.title} - by ${session.speakers
            .map((speaker) => speaker.name)
            .join(', ')}`
        : parentMetadata.title ?? '',
      url: session?.id
        ? `${parentMetadata.openGraph?.url}/program/${session?.id}`
        : parentMetadata.openGraph?.url ?? '',
      description: session?.abstract ?? parentMetadata.description ?? '',
    },
    twitter: {
      title: session?.title
        ? `JavaZone 2023 ${session.format}: ${session.title} - by ${session.speakers
            .map((speaker) => speaker.name)
            .join(', ')}`
        : parentMetadata.title ?? '',
      description: session?.abstract ?? parentMetadata.description ?? '',
      site: parentMetadata.twitter?.site ?? '',
    },
  }
}

export default async function Page({
  params,
}: {
  params: {
    id: string
  }
}) {
  const session = await fetchIndividualProgram(params.id)

  if (!session) {
    return <div>Klarte ikke finne denne talken :/</div>
  }
  const dayAndTime = getDayAndTime(session)

  return (
    <div className="flex flex-col gap-4 text-base">
      <Title>{session.title}</Title>
      <div className="inline-flex gap-4 text-2xl font-bold">
        <p>{prettyFormat(session.format)}</p>-<p>{prettyLanguage(session.language)}</p>-
        {!!dayAndTime && !!session.room ? <p>{dayAndTime}</p> : <p>Day & time coming soon</p>}
      </div>
      <p>
        <b>Length:</b> {session.length} minutes
      </p>
      <p>
        <b>Room:</b> {session.room ? session.room : 'Coming soon'}
      </p>
      <Title type="program">Abstract</Title>
      <p className={styles.preline}>{session.abstract}</p>

      {session.workshopPrerequisites && (
        <>
          <h3>Prerequisites</h3>
          <p className={styles.preline}>{session.workshopPrerequisites}</p>
        </>
      )}

      <Title type="program">Day & time</Title>
      <p>{dayAndTime ? getDayAndTime(session) : 'Coming soon'}</p>

      <Title type="program">Intended audience</Title>
      <p>{session.intendedAudience}</p>

      <ul>
        {session.speakers.map((speaker) => (
          <li key={speaker.name} className="my-4 list-none">
            <Title type="program">{speaker.name}</Title>
            <p>{speaker.bio}</p>
            {!!speaker.twitter && (
              <a href={`https://twitter.com/${speaker.twitter}`}>
                <div className="inline-flex align-middle gap-1">
                  <Image
                    src={'/icons/twitter-icon.svg'}
                    alt={'Twitter logo'}
                    width={35}
                    height={25}
                  />
                  <p>{speaker.twitter}</p>
                </div>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
