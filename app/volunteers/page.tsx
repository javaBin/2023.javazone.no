'use client'

import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import * as React from 'react'
import Image from 'next/image'

export default function VolunteersPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
      <div>
      <h1 className="text-center text-4xl font-semibold text-[#FED12D] mb-8">
        Bli frivillig på JavaZone
      </h1>
      <p className="text-center text-2xl font-semibold text-[#FED12D] mb-6">
        Information in Norwegian for potential student volunteers
      </p>

      {SectionContent({
        title: 'Hva er Javazone?',
        content: 'JavaZone er verdens største community-drevne Java-konferanse.',
        contentTwo:
          'Hvert år strømmer over 3200 utviklere til Oslo for å delta på JavaZone. I tillegg kommer nærmere 160 foredragsholdere fra hele verden, pluss mennesker fra over 50 ulike partnere.',
      })}

      {SectionContent({
        title: 'Hvem leter vi etter?',
        content:
          'Har du lyst til å bidra til at disse menneskene skal få en fantastisk opplevelse, og også få ta del i dette selv?',
        contentTwo: 'Er du student høsten 2023?',
      })}

      <div className="flex justify-center">
        <Image src="/svg/JZ2023-Character-Bendy-cropped.svg" height={500} width={500} alt="hero" />
      </div>

      <strong>
        <Link
          className="button is-dark-blue is-fullwidth"
          href="https://forms.gle/EMDxZVii6mhT6utj7"
        >
          Meld deg som frivillig!
        </Link>
      </strong>

      <h1 className="text-center text-4xl font-semibold text-[#FED12D] mt-8 mb-6">
        Ofte stilte spørsmål
      </h1>

      {SectionContent({
        title: "I don't speak Norwegian what about me?",
        content:
          'Being a volunteer at JavaZone you need to be able to communicate in both Norwegian and English. This is because you are one of the main go-to-people for 3200 guests.',
      })}

      {SectionContent({
        title: 'Hvem kan bli frivillig på JavaZone?',
        content:
          'Alle studenter som behersker norsk og engelsk flytende kan bli frivillige på JavaZone. Så lenge du vil gjøre en innsats, så er du hjertelig velkommen til å søke!',
      })}

      {SectionContent({
        title: 'Hva skal jeg gjøre som frivillig?',
        content:
          'Det vil være en del ulike oppgaver, og du kan blant annet være salvakt, ha ansvar for info-stand eller utdeling av headsett. Nærmere informasjon om oppgavene vil gis rett før JavaZone og under opplæringsmøtet i forkant av konferansen. Vi vil prøve å dele ut vakter og arbeidoppgaver tilpasset dine ønsker og interesser.',
      })}

      {SectionContent({
        title: 'Hvor mange frivillige bidrar på JavaZone?',
        content:
          'Hvert år deltar over 50 frivillige på JavaZone. Interessen for dette er stor, så dessverre får ikke alle søkere plass. Men ikke la dette hindre deg i å søke, prøv da vel!',
      })}

      {SectionContent({
        title: 'Får jeg med meg noe faglig som frivillig?',
        content:
          'Å være frivillig på JavaZone er litt som å være frivillig på en musikkfestival, bare mer nerdete! Du får ca. 50% fri, og kan da gå på foredrag, spise god mat og snakke med kule folk.',
      })}

      {SectionContent({
        title: 'Hva med reise hvis jeg ikke bor i Oslo?',
        content:
          'JavaZone dekker ikke reise eller overnatting for frivillige. Men erfaringsmessig så er det mange studiesteder som velger å gi reisestøtte. Spør derfor studentforeningen eller instituttet ditt om dette.',
      })}

      {SectionContent({
        title: 'Får jeg bli med på AweZone?',
        content:
          'Selvsagt får du det! JavaZone er ikke det samme uten! Her får du se de kuleste bandene og snakke med de beste folka i IT-bransjen! Ingen jobbing på kvelden – bare fest og moro =)',
      })}

      {SectionContent({
        title: 'Når må jeg møte opp som frivillig?',
        content:
          'Det er oppmøte i Oslo Spektrum kl. 19:00 tirsdag 5. september for opplæring, noen oppgaver, mat og omvisning i lokalene. JavaZone er ferdig kl. 18 på torsdag 7. september. Da rigger vi ned i ca. 1 time, og deretter går vi videre for mat og drikke. Vi spanderer :) Detaljer blir sendt ut til de som blir tatt opp som frivillige.',
      })}

      {SectionContent({ title: 'Når må jeg søke?', content: 'Søknadsfristen er mandag 5. juni.' })}

      {SectionContentWithLinks({
        title: 'Hvordan kan jeg tipse andre?',
        content: 'Lik og del gjerne en av våre poster i sosiale medier:',
        links: [
          {
            text: 'Facebook',
            url: 'https://www.facebook.com/javazoneconference/posts/pfbid0fE6STTXjpepZV89NPwCJDGCRFTCouw1Z1pQXtPcjrjJ5UbRjnhCs8ppR82FGuMHel',
          },
          {
            text: 'Twitter',
            url: 'https://twitter.com/javazone/status/1394342027644044800',
          },
          {
            text: 'LinkedIn',
            url: 'https://www.linkedin.com/feed/update/urn:li:activity:6794047558720288256/',
          },
        ],
      })}
    </div>
  )
}

const SectionContent = (props: { title: string; content: string; contentTwo?: string }) => {
  return (
    <section className="flex justify-between max-md:grid mb-8">
      <h2
        className="text-4xl text-[#FED12D] font-semibold max-w-xs mb-8"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        {props.title}
      </h2>
      <div
        className="w-3/5 right-0 max-md:w-full"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <p className="text-2xl mb-8">{props.content}</p>
        {props.contentTwo ? <p className="text-2xl">{props.contentTwo}</p> : <></>}
      </div>
    </section>
  )
}

const SectionContentWithLinks = (props: {
  title: string
  content: string
  links: { text: string; url: string }[]
}) => {
  return (
    <section className="flex justify-between max-md:grid mb-8">
      <h2
        className="text-4xl text-[#FED12D] font-semibold max-w-xs mb-8"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        {props.title}
      </h2>
      <div
        className="w-3/5 right-0 max-md:w-full"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <p className="text-2xl mb-8">
          {props.content}{' '}
          {props.links.map((link, index) => (
            <>
              <a
                key={index}
                className="text-[#FED12D]"
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.text}
              </a>
              {index < props.links.length - 1 && ', '}
            </>
          ))}
        </p>
      </div>
    </section>
  )
}
