import { Program, SessionFormat, SessionLanguage } from './program'

const formatter = new Intl.DateTimeFormat(['en'], {
  day: '2-digit',
  weekday: 'long',
  hour: 'numeric',
  minute: 'numeric',
})

const prettyFormat = (format: SessionFormat) => {
  switch (format) {
    case 'presentation':
      return 'Presentation'
    case 'lightning-talk':
      return 'Lightning talk'
    case 'workshop':
      return 'Workshop'
  }
}

const prettyLanguage = (language: SessionLanguage) => (language === 'no' ? 'Norwegian' : 'English')

export default async function ProgramPage() {
  const data: Program = await fetch(
    'https://sleepingpill.javazone.no/public/allSessions/javazone_2022',
  ).then((res) => res.json())

  return (
    <div>
      <ul>
        {data.sessions
          .sort(
            (a, b) =>
              a.startTime.localeCompare(b.startTime) || a.room?.localeCompare(b.room ?? '') || 0,
          )
          .map((session) => (
            <li
              key={session.id}
              style={{ backgroundColor: 'black', margin: '2rem', padding: '2rem' }}
            >
              <p>{session.title}</p>
              <p>Speakers: {session.speakers.map((speaker) => speaker.name).join(', ')}</p>
              <p>{prettyFormat(session.format)}</p>
              <p>{prettyLanguage(session.language)}</p>
              <p>{formatter.format(new Date(session.startTime))}</p>
              <p>{formatter.format(new Date(session.endTime))}</p>
              <p>{session.room}</p>
            </li>
          ))}
      </ul>
    </div>
  )
}
