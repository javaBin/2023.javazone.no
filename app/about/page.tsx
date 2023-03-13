import mainstyles from "../page.module.css";
import pagestyles from './about.module.css';

export default function About() {
  return (
    <main className={mainstyles.main}>
      <div>
        <div className="is-inline-block">
          <h1 className="title is-size-1">JavaZone: The biggest community-driven Java conference</h1>
        </div>
        <h2 className="content is-size-3">What is it? Who is behind it?</h2>

        <section className="content is-normal">
          <h2>WHAT IS JAVAZONE?</h2>

          <p>
            JavaZone is the biggest community-driven Java conference that has been organized in Oslo, Norway since 2001.
            It is organized on a voluntary basis by a group of people from javaBin, the Norwegian Java User Group,
            working around the year and putting many hours to create an amazing conference experience for you.
          </p>
          <p>
            Our goal is to organize a community-driven conference for developers where they can learn new things, share
            knowledge, and socialize.
          </p>
          <p>
            We are happy to see the event grow bigger and better every year. In 2019 we hosted over 3200 participants
            and 160 speakers across 7 parallel tracks over the course of two days. In addition, we also offered a
            selection of 11 workshops held on the day before the conference started.
          </p>
        </section>

        <section className={pagestyles.child}/>

        <section className="content is-normal mt-5">
          <h2>WHO IS BEHIND IT?</h2>
          <p>
            Organizing a conference of this size on a voluntary basis is a lot of hard work (and it is great fun too!).
            The conference organization is represented by the JavaZone Core Team – a group of main organizers of the
            conference, where each representative is responsible for one or several areas or is leading a group of other
            JUG members. An example of such groups can be Program Committee, IT systems, etc.
          </p>
          <p>
            The JavaZone Core Team for 2023:
          </p>
          <ul>
            <li><em>Leader</em> – <a href="mailto:javazone@java.no" target="_blank"
                                     rel="noreferrer">javazone@java.no</a> – Anders Karlsen
            </li>
            <li><em>Program Committee</em> – <a href="mailto:program@java.no" target="_blank"
                                                rel="noreferrer">program@java.no</a> – Marek Machnik
            </li>
            <li><em>Partners</em> – <a href="mailto:partner@java.no" target="_blank"
                                       rel="noreferrer">partner@java.no</a> – Gareth Western
            </li>
            <li><em>Volunteers</em> – <a href="mailto:student@java.no" target="_blank"
                                         rel="noreferrer">student@java.no</a> – Ellaoui Abdellaoui
            </li>
          </ul>

          <p>Being the biggest community-driven conference would not have been easy without all the partners, event
            coordinators, and subcontractors, so we would like to thank them as well! Thank you, all!</p>

          <p>If you have any questions or comments, you can always reach the Core Team at <a
            href="mailto:javazone@java.no"
            target="_blank" rel="noreferrer">javazone@java.no</a>.</p>

        </section>
      </div>
    </main>
  )
}
