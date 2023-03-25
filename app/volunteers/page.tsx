import mainstyles from '../page.module.css';
import Link from 'next/link';

export default function VolunteersPage(){
  return (
      <main className={mainstyles.main}>
        <div>
          <h1 className="title">Frivillig</h1>

          <section className="content is-normal">
            <h2>Bli frivillig på JavaZone</h2>
            <p>Information in Norwegian for potential student volunteers</p>
          </section>
          <section className="content is-normal">
            <h2>Hva er Javazone?</h2>
            <p>
              JavaZone er verdens største community-drevne Java-konferanse.
            </p>
            <p>
              Hvert år strømmer over 3200 utviklere til Oslo for å delta på JavaZone. I tillegg kommer nærmere 160
              foredragsholdere fra hele verden, pluss mennesker fra over 50 ulike partnere.
            </p>
          </section>
          <section className="content is-normal">
            <h2>Hvem leter vi etter?</h2>
            <p>
              Har du lyst til å bidra til at disse menneskene skal få en fantastisk opplevelse, og også få ta del
              i dette selv?<br/>
              Er du student høsten 2023?
            </p>
            <p>
              Perfekt! Du er akkurat den vi leter etter! <br/>
              Søk som frivillig og bli med å hjelpe oss å lage tidenes beste JavaZone!<br/><br/>
            </p>
            <p>
              <Link className="button is-primary" href="https://forms.gle/EMDxZVii6mhT6utj7">Meld deg som frivillig!</Link>
            </p>
          </section>

          <section className="content is-normal">
            <h2 className="title">Ofte stilte spørsmål</h2>
            <section className="content is-normal">
              <h2>I don&apos;t speak Norwegian what about me?</h2>
              <p>
              Being a volunteer at JavaZone you need to be able to communicate in both Norwegian and English. This is because you are one of the main go-to-people for 3200 guests.
              </p>
            </section>
            <section className="content is-normal">
              <h2>Hvem kan bli frivillig på JavaZone?</h2>
              <p>
                Alle studenter som behersker norsk og engelsk
                flytende kan bli frivillige på JavaZone. Så lenge du vil gjøre en innsats, så er du
                hjertelig velkommen til å søke!
              </p>
            </section>

            <section className="content is-normal">
              <h2>Hva skal jeg gjøre som frivillig?</h2>
              <p>
                Det vil være en del ulike oppgaver, og du kan
                blant annet være salvakt, ha ansvar for info-stand eller utdeling av headsett. Nærmere
                informasjon om oppgavene vil gis rett før JavaZone og under opplæringsmøtet i forkant av
                konferansen. Vi vil prøve å dele ut vakter og arbeidoppgaver tilpasset dine ønsker og
                interesser.
              </p>
            </section>

            <section className="content is-normal">
              <h2>Hvor mange frivillige bidrar på JavaZone?</h2>
              <p>
                Hvert år deltar over 50 frivillige på JavaZone.
                Interessen for dette er stor, så dessverre får ikke alle søkere plass. Men ikke la dette
                hindre deg i å søke, prøv da vel!
              </p>
            </section>

            <section className="content is-normal">
              <h2>Får jeg med meg noe faglig som frivillig?</h2>
              <p>
                Å være frivillig på JavaZone er litt som å være frivillig på en musikkfestival, bare mer nerdete! Du
                får ca. 50% fri, og kan da gå på foredrag, spise god mat og snakke med kule folk.
              </p>
            </section>

            <section className="content is-normal">
              <h2>Hva med reise hvis jeg ikke bor i Oslo?</h2>
              <p>
                JavaZone dekker ikke reise eller overnatting for
                frivillige. Men erfaringsmessig så er det mange studiesteder som velger å gi
                reisestøtte. Spør derfor studentforeningen eller instituttet ditt om dette.
              </p>
            </section>

            <section className="content is-normal">
              <h2>Får jeg bli med på AweZone?</h2>
              <p>
                Selvsagt får du det! JavaZone er ikke det samme
                uten! Her får du se de kuleste bandene og snakke med de beste folka i IT-bransjen! Ingen
                jobbing på kvelden – bare fest og moro =)
              </p>
            </section>

            <section className="content is-normal">
              <h2>Når må jeg møte opp som frivillig?</h2>
              <p>
                Det er oppmøte i Oslo Spektrum kl. 19:00 tirsdag
                5. september for opplæring, noen oppgaver, mat og omvisning i lokalene. JavaZone er
                ferdig kl. 18 på torsdag 7. september. Da rigger vi ned i ca. 1 time, og deretter går vi videre for
                mat og drikke. Vi spanderer :) Detaljer blir sendt ut til de som blir tatt opp som
                frivillige.
              </p>
            </section>

            <section className="content is-normal">
              <h2>Når må jeg søke?</h2>
              <p>
                Søknadsfristen er mandag 5. juni.
              </p>
            </section>

            <section className="content is-normal">
              <h2>Hvordan kan jeg tipse andre?</h2>
              <p>
                Lik og del gjerne en av våre poster i sosiale
              </p>
              <div>
                <a href="https://www.facebook.com/javazoneconference/posts/pfbid02kvYPb6m3FkqPbtiexsA6MYDPyNkXDoTv5eaQ9ugRJoRoUitLgQmwJwUdYneRLaswl">Facebook</a>
              </div>
              <div>
                <a href="https://twitter.com/javazone/status/1559618872998871041">Twitter</a>
              </div>
              <div>
                <a href="https://www.linkedin.com/feed/update/urn:li:share:6965354996812910592">LinkedIn</a>
              </div>

            </section>
          </section>
        </div>
      </main>
  )
}
