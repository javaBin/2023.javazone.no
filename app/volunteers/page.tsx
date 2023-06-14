'use client'

import voulenterstyles from './volunteers.module.css';
import Link from 'next/link';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import * as React from "react";
import Image from "next/image";
import styles from "../footer.module.css";

export default function VolunteersPage() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
      <div className={voulenterstyles.fontSize}>
        <h1 className="title has-text-centered">Bli frivillig på JavaZone</h1>
        <p className="title has-text-centered mb-6">Information in Norwegian for potential student volunteers</p>

        {SectionContent({title: "Hva er Javazone?", content: "JavaZone er verdens største community-drevne Java-konferanse.", contentTwo: "Hvert år strømmer over 3200 utviklere til Oslo for å delta på JavaZone. I tillegg kommer nærmere 160 foredragsholdere fra hele verden, pluss mennesker fra over 50 ulike partnere."})}

        {SectionContent({title: "Hvem leter vi etter?", content: "Har du lyst til å bidra til at disse menneskene skal få en fantastisk opplevelse, og også få ta del i dette selv?", contentTwo: "Er du student høsten 2023?"})}

        <div className="has-text-centered">
          <Image src="/svg/JZ2023-Character-Bendy-cropped.svg" height={500} width={500} alt="hero" />
        </div>

        <strong>
          <Link className="button is-dark-blue is-fullwidth" href="https://forms.gle/EMDxZVii6mhT6utj7">
            Meld deg som frivillig!
          </Link>
        </strong>

        <h1 className="title has-text-centered mt-6">Ofte stilte spørsmål</h1>

        {SectionContent({title: "I don't speak Norwegian what about me?", content: "Being a volunteer at JavaZone you need to be able to communicate in both Norwegian and English. This is because you are one of the main go-to-people for 3200 guests."})}

        {SectionContent({title: "Hvem kan bli frivillig på JavaZone?", content: "Alle studenter som behersker norsk og engelsk flytende kan bli frivillige på JavaZone. Så lenge du vil gjøre en innsats, så er du hjertelig velkommen til å søke!"})}

        {SectionContent({title: "Hva skal jeg gjøre som frivillig?", content: "Det vil være en del ulike oppgaver, og du kan blant annet være salvakt, ha ansvar for info-stand eller utdeling av headsett. Nærmere informasjon om oppgavene vil gis rett før JavaZone og under opplæringsmøtet i forkant av konferansen. Vi vil prøve å dele ut vakter og arbeidoppgaver tilpasset dine ønsker og interesser."})}

        {SectionContent({title: "Hvor mange frivillige bidrar på JavaZone?", content: "Hvert år deltar over 50 frivillige på JavaZone. Interessen for dette er stor, så dessverre får ikke alle søkere plass. Men ikke la dette hindre deg i å søke, prøv da vel!"})}

        {SectionContent({title: "Får jeg med meg noe faglig som frivillig?", content: "Å være frivillig på JavaZone er litt som å være frivillig på en musikkfestival, bare mer nerdete! Du får ca. 50% fri, og kan da gå på foredrag, spise god mat og snakke med kule folk."})}

        {SectionContent({title: "Hva med reise hvis jeg ikke bor i Oslo?", content: "JavaZone dekker ikke reise eller overnatting for frivillige. Men erfaringsmessig så er det mange studiesteder som velger å gi reisestøtte. Spør derfor studentforeningen eller instituttet ditt om dette."})}

        {SectionContent({title: "Får jeg bli med på AweZone?", content: "Selvsagt får du det! JavaZone er ikke det samme uten! Her får du se de kuleste bandene og snakke med de beste folka i IT-bransjen! Ingen jobbing på kvelden – bare fest og moro =)"})}

        {SectionContent({title: "Når må jeg møte opp som frivillig?", content: "Det er oppmøte i Oslo Spektrum kl. 19:00 tirsdag 5. september for opplæring, noen oppgaver, mat og omvisning i lokalene. JavaZone er ferdig kl. 18 på torsdag 7. september. Da rigger vi ned i ca. 1 time, og deretter går vi videre for mat og drikke. Vi spanderer :) Detaljer blir sendt ut til de som blir tatt opp som frivillige."})}

        {SectionContent({title: "Når må jeg søke?", content: "Søknadsfristen er mandag 5. juni."})}


        <section className={`content is-normal ${voulenterstyles.displayFlex}`}>
          <h2>Hvordan kan jeg tipse andre?</h2>

          <div className={voulenterstyles.pDiv} style={{display: "flex", gap: 9}}>
            <p>
              Lik og del gjerne en av våre poster i sosiale medier:{" "}
              <a className={`link is-info ${styles.link}`} href="https://www.facebook.com/javazoneconference/posts/pfbid0fE6STTXjpepZV89NPwCJDGCRFTCouw1Z1pQXtPcjrjJ5UbRjnhCs8ppR82FGuMHel" target="_blank" rel="noreferrer">Facebook</a>,
              <a className={`link is-info ${styles.link}`} href="https://twitter.com/javazone/status/1643639280625938432" target="_blank" rel="noreferrer">{" "}Twitter</a>,
              <a className={`link is-info ${styles.link}`} href="https://www.linkedin.com/posts/javazone_it-student-og-lyst-til-%C3%A5-f%C3%A5-med-deg-verdens-activity-7049437067902164993-y1EF?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noreferrer">{" "}LinkedIn</a>
            </p>
          </div>
        </section>
      </div>
  )
}

const SectionContent = (props:{
  title: string
  content: string
  contentTwo?: string }) => {
  return (
    <section className={`content is-normal ${voulenterstyles.displayFlex}`}>
      <h2 data-aos="fade-right" data-aos-duration="1000">{props.title}</h2>
      <div className={voulenterstyles.pDiv} data-aos="fade" data-aos-duration="1000" data-aos-delay="500">
        <p>{props.content}</p>
        {props.contentTwo ? <p>{props.contentTwo}</p> : <></>}
      </div>
    </section>
  );
}
