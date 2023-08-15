import { Metadata } from 'next'
import { Title } from '@/components/title/Title'
import { Section } from '@/components/section/Section'
import { BackgroundSection } from '@/components/backgroundSection/BackgroundSection'

export const metadata: Metadata = {
  title: 'JavaZone 2023 - About JavaZone',
}

export default function About() {
  return (
    <div>
      <div className="inline-block">
        <Title type="big-title">JavaZone: The biggest community-driven Java conference</Title>
      </div>
      <h2 className="text-3xl mb-8">What is it? Who is behind it?</h2>

      <Section>
        <Title type="subtitle">WHAT IS JAVAZONE?</Title>

        <p className="mb-4">
          JavaZone is the biggest community-driven Java conference that has been organized in Oslo,
          Norway since 2001. It is organized on a voluntary basis by a group of people from javaBin,
          the Norwegian Java User Group, working around the year and putting many hours to create an
          amazing conference experience for you.
        </p>
        <p className="mb-4">
          Our goal is to organize a community-driven conference for developers where they can learn
          new things, share knowledge, and socialize.
        </p>
        <p className="mb-4">
          We are happy to see the event grow bigger and better every year. In 2019 we hosted over
          3200 participants and 160 speakers across 7 parallel tracks over the course of two days.
          In addition, we also offered a selection of 11 workshops held on the day before the
          conference started.
        </p>
      </Section>

      <BackgroundSection type="about" />

      <Section>
        <Title type="subtitle">WHO IS BEHIND IT?</Title>
        <p className="mb-4">
          Organizing a conference of this size on a voluntary basis is a lot of hard work (and it is
          great fun too!). The conference organization is represented by the JavaZone Core Team – a
          group of main organizers of the conference, where each representative is responsible for
          one or several areas or is leading a group of other JUG members. An example of such groups
          can be Program Committee, IT systems, etc.
        </p>
        <p className="mb-4">The JavaZone Core Team for 2023:</p>
        <ul className="ml-8 my-4 list-disc">
          <li>
            <em>Leader</em> –{' '}
            <a href="mailto:javazone@java.no" target="_blank" rel="noreferrer">
              javazone@java.no
            </a>{' '}
            – Anders Karlsen
          </li>
          <li>
            <em>Program Committee</em> –{' '}
            <a href="mailto:program@java.no" target="_blank" rel="noreferrer">
              program@java.no
            </a>{' '}
            – Marek Machnik
          </li>
          <li>
            <em>Partners</em> –{' '}
            <a href="mailto:partner@java.no" target="_blank" rel="noreferrer">
              partner@java.no
            </a>{' '}
            – Kjetil Myhre
          </li>
          <li>
            <em>Volunteers</em> –{' '}
            <a href="mailto:student@java.no" target="_blank" rel="noreferrer">
              student@java.no
            </a>{' '}
            – Bendik Dyrli, Ellaoui Abdellaoui
            and Ole Berg
          </li>
        </ul>

        <p className="mb-4">
          Being the biggest community-driven conference would not have been easy without all the
          partners, event coordinators, and subcontractors, so we would like to thank them as well!
          Thank you, all!
        </p>

        <p className="mb-4">
          If you have any questions or comments, you can always reach the Core Team at{' '}
          <a href="mailto:javazone@java.no" target="_blank" rel="noreferrer">
            javazone@java.no
          </a>
          .
        </p>
      </Section>
    </div>
  )
}
