import { SessionGroup } from "@/app/program/SessionGroup";
import { fetchProgram } from "@/app/program/fetchProgram";
import PageBanner from "@/components/PageBanner";
import { Title } from "@/components/title/Title";

export default async function Workshops() {
  const workshops = (await fetchProgram()).sessions.filter(session => session.format === "workshop")

  return <article>
    <Title type="big-title">JavaZone Workshops 2023</Title>
    <Title>Find your workshop - Registration opens on August 21nd at 12:00</Title>
    <PageBanner/>
    <SessionGroup group={"workshop"} sessions={workshops} />
  </article>
}
