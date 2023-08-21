import { fetchProgram } from '@/app/program/fetchProgram'
import { Title } from '@/components/title/Title'
import dynamic from 'next/dynamic'

const FilteredSessions = dynamic(() => import('./FilteredSessions'), { ssr: false })

export default async function ProgramPage() {
  const data = await fetchProgram()

  const sessions = data.sessions.filter((session) => session.format !== 'workshop')

  return (
    <article>
      <Title type="big-title">JavaZone Program 2023</Title>
      <p className="mb-4">Psst..🦻 do you want mark sessions as favorite for you to follow? Press the ❤️ icon and filter by &quot;My favorites&quot;. Your favorites is stored locally in your browser.</p>
      <FilteredSessions sessions={sessions} />
    </article>
  )
}
