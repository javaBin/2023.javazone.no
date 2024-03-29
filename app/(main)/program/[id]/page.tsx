import React from 'react'
import { fetchIndividualProgram } from '@/app/(main)/program/fetchProgram'
import { formatter, prettyFormat, prettyLanguage } from '@/app/(main)/program/utils'
import Image from 'next/image'
import { Session } from '@/app/(main)/program/program'
import { Metadata, ResolvingMetadata } from 'next'
import { Title } from '@/components/title/Title'
import { Link } from '@/components/link/Link'

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
    <div className="flex flex-col gap-4 text-base ">
      <Title>{session.title}</Title>
      <div className="block bold mb-4 sm:flex sm:justify-between sm:gap-2 sm:text-xl sm:font-bold">
        <p>{prettyFormat(session.format)}</p>
        <p>{prettyLanguage(session.language)}</p>
        {!!dayAndTime && !!session.room ? <p>{dayAndTime}</p> : <p>Day & time coming soon</p>}
      </div>
      <p>
        <b>Length:</b> {session.length} minutes
      </p>
      <p>
        <b>Room:</b> {session.room ? session.room : 'Coming soon'}
      </p>
      {session.video && (
        <div className="pt-[56.25%] relative h-0">
          <iframe
            className="border-0 absolute top-0 left-0"
            title="program video"
            src={`https://player.vimeo.com/video/${session.video}`}
            allowFullScreen
            width={"100%"}
            height={"100%"}
          ></iframe>
        </div>
      )}
      <Title type="program">Abstract</Title>
      <p className="whitespace-pre-line">{session.abstract}</p>

      {session.workshopPrerequisites && (
        <>
          <Title type="program">Prerequisites</Title>
          <p className="whitespace-pre-line">{session.workshopPrerequisites}</p>
        </>
      )}

      <Title type="program">Day & time</Title>
      <p>{dayAndTime ? getDayAndTime(session) : 'Coming soon'}</p>

      <Title type="program">Intended audience</Title>
      <p className="whitespace-pre-line">{session.intendedAudience}</p>

      <ul>
        {session.speakers.map((speaker) => (
          <li key={speaker.name} className="my-4 list-none">
            <Title type="program">{speaker.name}</Title>
            <p className="whitespace-pre-line">{speaker.bio}</p>
            {!!speaker.twitter && (
              <a href={`https://twitter.com/${speaker.twitter}`}>
                <div className="inline-flex items-center gap-1">
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

      {session.registerLoc && (
        <>
          <Title type="program">Registration</Title>
          <Link type="button" href={session.registerLoc} className="self-start">
            Registration
          </Link>
        </>
      )}
    </div>
  )
}
