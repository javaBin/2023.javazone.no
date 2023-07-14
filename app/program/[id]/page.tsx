import { fetchIndividualProgram } from '@/app/program/fetchProgram'
import { formatter, prettyFormat, prettyLanguage } from '@/app/program/utils'
import Image from 'next/image'
import { Session } from '@/app/program/program'
import { Metadata, ResolvedMetadata } from 'next'

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
  parent: ResolvedMetadata,
): Promise<Metadata> {
  const session = await fetchIndividualProgram(params.id)
  const parentMetadata = await parent
  return {
    title: session?.title
      ? `JavaZone 2023 ${session.format}: ${session.title} - by ${session.speakers.map((speaker) => speaker.name).join(', ')}`
      : parentMetadata.title,
    description: session?.abstract ?? parentMetadata.description,
    openGraph: {
      ...(parentMetadata.openGraph && parentMetadata.openGraph),
      locale: session?.language,
      title: session?.title ?? parentMetadata.title ?? '',
      url: session?.id
        ? `${parentMetadata.openGraph?.url}/program/${session?.id}`
        : parentMetadata.openGraph?.url ?? '',
    },
    twitter: {
      title: session?.title
        ? `JavaZone 2023 ${session.format}: ${session.title} - by ${session.speakers.map((speaker) => speaker.name).join(', ')}`
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
    <div className="content is-normal">
      <h1 className="title">{session.title}</h1>
      <div
        style={{
          display: 'inline-flex',
          fontWeight: 600,
          gap: '2rem',
          fontSize: 'x-large',
        }}
      >
        <p>{prettyFormat(session.format)}</p>-<p>{prettyLanguage(session.language)}</p>-
        {!!dayAndTime && !!session.room ? <p>{dayAndTime}</p> : <p>Day & time not available</p>}
      </div>
      <p>
        <b>Length:</b> {session.length} minutes
      </p>
      <p>
        <b>Room:</b> {session.room ? session.room : 'N/A'}
      </p>
      <h3>Abstract</h3>
      <p>{session.abstract}</p>

      <h3>Day & time</h3>
      <p>{dayAndTime ? getDayAndTime(session) : 'N/A'}</p>

      <h3>Intended audience</h3>
      <p>{session.intendedAudience}</p>

      <ul style={{ listStyle: 'none', margin: '2rem 0' }}>
        {session.speakers.map((speaker) => (
          <li key={speaker.name} style={{ margin: '2rem 0' }}>
            <h3>{speaker.name}</h3>
            <p>{speaker.bio}</p>
            {!!speaker.twitter && (
              <a href={`https://twitter.com/${speaker.twitter}`}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
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
