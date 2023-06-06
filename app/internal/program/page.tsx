import { Program, SessionFormat, SessionLanguage } from './program'
import { Fragment } from 'react'

const formatter = new Intl.DateTimeFormat(['en'], {
  day: '2-digit',
  weekday: 'long',
  hour: 'numeric',
  minute: 'numeric',
})

const prettyFormat = (format: Filter['format']) => {
  switch (format) {
    case 'presentation':
      return 'Presentation'
    case 'lightning-talk':
      return 'Lightning talk'
    case 'workshop':
      return 'Workshop'
    case 'favorites':
      return 'My favorites'
    default:
      return ''
  }
}

interface Filter {
  format?: SessionFormat | 'favorites'
  language?: SessionLanguage
  room?: string
  day?: 'tuesday' | 'wednesday' | 'thursday'
}

const FilterComp = ({ day, room, language = 'no', format = 'presentation' }: Filter) => {
  console.log({ day, room, language, format })
  return (
        <div>
      <form>
        <fieldset>
          <legend>Day</legend>
          <input
            type="radio"
            id="day-all"
            name="day"
            value="all"
            defaultChecked={day === undefined}
          />
          <label htmlFor="day-all">All</label>
          <input
            type="radio"
            id="day-tuesday"
            name="day"
            value="tuesday"
            defaultChecked={day === 'tuesday'}
          />
          <label htmlFor="day-tuesday">Tuesday</label>
          <input
            type="radio"
            id="day-wednesday"
            name="day"
            value="wednesday"
            defaultChecked={day === 'wednesday'}
          />
          <label htmlFor="day-wednesday">Wednesday</label>
          <input
            type="radio"
            id="day-thursday"
            name="day"
            value="thursday"
            defaultChecked={day === 'thursday'}
          />
          <label htmlFor="day-thursday">Thursday</label>
        </fieldset>
        <fieldset>
          <legend>Language</legend>
          <input
            type="radio"
            id="language-all"
            name="language"
            value="all"
            defaultChecked={language === undefined}
          />
          <label htmlFor="language-all">All</label>
          <input
            type="radio"
            id="language-no"
            name="language"
            value="no"
            defaultChecked={language === 'no'}
          />
          <label htmlFor="language-no">Norwegian</label>
          <input
            type="radio"
            id="language-en"
            name="language"
            value="en"
            defaultChecked={language === 'en'}
          />
          <label htmlFor="language-en">English</label>
        </fieldset>
        <fieldset>
          <legend>Format</legend>
          <input
            type="radio"
            id="format-all"
            name="format"
            value="all"
            defaultChecked={format === undefined}
          />
          <label htmlFor="format-all">All</label>
          <input
            type="radio"
            id="format-presentation"
            name="format"
            value="no"
            defaultChecked={format === 'presentation'}
          />
          <label htmlFor="format-presentation">Presentation</label>
          <input
            type="radio"
            id="format-workshop"
            name="format"
            value="en"
            defaultChecked={format === 'workshop'}
          />
          <label htmlFor="format-workshop">Workshop</label>
          <input
            type="radio"
            id="format-lightning-talk"
            name="format"
            value="en"
            defaultChecked={format === 'lightning-talk'}
          />
          <label htmlFor="format-lightning-talk">Lightning talk</label>
          <input
            type="radio"
            id="format-favorites"
            name="format"
            value="en"
            defaultChecked={format === 'favorites'}
          />
          <label htmlFor="format-favorites">My favorites</label>
        </fieldset>
        <fieldset>
          <legend>Room</legend>
          <input
            type="radio"
            id="room-all"
            name="room"
            value="all"
            defaultChecked={room === undefined}
          />
          <label htmlFor="room-all">All</label>
          {[1, 2, 3, 4, 5, 6, 7].map((currentRoom) => (
            <Fragment key={currentRoom}>
              <input
                type="radio"
                id={`room-${currentRoom}`}
                name="room"
                value="all"
                defaultChecked={currentRoom.toString() === room}
              />
              <label htmlFor={`room-${currentRoom}`}>{currentRoom}</label>
            </Fragment>
          ))}
        </fieldset>
      </form>
    </div>
  )
}

const prettyLanguage = (language: SessionLanguage) => (language === 'no' ? 'Norwegian' : 'English')

export default async function ProgramPage() {
  const data: Program = await fetch(
    'https://sleepingpill.javazone.no/public/allSessions/javazone_2022',
    {
      next: {
        revalidate: 60 * 10, // 10 minute cache
        tags: ['talks'],
      },
    },
  ).then((res) => res.json())

  return (
    <div>
      <FilterComp />
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
