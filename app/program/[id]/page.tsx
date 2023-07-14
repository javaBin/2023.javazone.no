import { fetchProgram } from "@/app/program/fetchProgram";
import { prettyFormat, prettyLanguage } from "@/app/program/utils";

export default async function Page({
  params,
}: {
  params: {
    id: string
  }
}) {
  const program = await fetchProgram()
  const session = program.sessions.find(session => session.id === params.id)

  if (!session) {
    return <div>Klarte ikke finne denne talken :/</div>
  }


  return <div>
    <h1 style={{fontSize: "2em"}}>{session.title}</h1>
    <p>{session.speakers.map(speaker => speaker.name).join(", ")}</p>
    <p>{session.abstract}</p>
    <p>{prettyFormat(session.format)}</p>
    <p>{prettyLanguage(session.language)}</p>
    <ul>
      {session.speakers.map(speaker => <li key={speaker.name}>
        <p>{speaker.name}</p>
        <p>{speaker.bio}</p>
        {speaker.twitter && <p>{speaker.twitter}</p>}
      </li>)}
    </ul>
  </div>
}
