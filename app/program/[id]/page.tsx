import { fetchProgram } from '@/app/program/fetchProgram'
import { formatter, prettyFormat, prettyLanguage } from '@/app/program/utils'
import Image from 'next/image'
import { Session } from '@/app/program/program'

function getDayAndTime({ endTime, startTime }: Session) {
  if (!startTime || !endTime) {
    return ''
  }
  return formatter.formatRange(new Date(startTime), new Date(endTime))
}

export default async function Page({
  params,
}: {
  params: {
    id: string
  }
}) {
  const program = await fetchProgram()
  const session = program.sessions.find((session) => session.id === params.id)

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

      <h3>Intenden audience</h3>
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
