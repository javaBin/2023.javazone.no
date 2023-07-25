import { SessionGroup } from "@/app/program/SessionGroup";
import { fetchProgram } from "@/app/program/fetchProgram";
import styles from "./page.module.css"

export default async function Workshops() {
  const workshops = (await fetchProgram()).sessions.filter(session => session.format === "workshop")

  return <article>
    <h1 className={styles.program_title}>JavaZone Workshops 2023</h1>
    <SessionGroup group={"workshop"} sessions={workshops} />
  </article>
}