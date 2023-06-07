import Image from 'next/image'
import Link from "next/link";
import * as React from "react";
import styles from "./page.module.css";

export default function SuperOverflowPage() {
  return (
    <section className="content is-normal">
      <h1>Super Overflow</h1>

      <section className="content is-normal">
        <h2>JavaZone SuperOverflow 2023, Sept 6th - 7th</h2>
        <p>Due to the massive interest in JavaZone 2023, we are thrilled to announce a brand new concept called SuperOverflow.</p>
        <p>At the javaBin headquarters, Teknologihuset at Rebel, in Oslo city center, we offer the JavaZone experience for a limited group of participants.</p>
        <p>Attend an exclusive track of live presentations at Teknologihuset, while also being able to attend any session from Oslo Spektrum remotely. The sessions from Oslo Spektrum will be streamed in designated rooms with the possibility to post questions to the speakers.</p>
      </section>

      <Image
        className={styles.superoverflow_image}
        src="/images/rebel1.jpg"
        alt="Rebel interior"
        width={1000}
        height={200}
      />

      <section className="content is-normal">
        <h2>What to expect</h2>
        <ul>
          <li>Two conference days, Sept 6th - 7th packed with knowledge, socializing, food and the amazing AweZone Party.</li>
          <li>The live track will be streamed to Oslo Spektrum.</li>
          <li>Designated conference rooms at Teknologihuset, with live streams from all the sessions in Oslo Spektrum.</li>
          <li>You can post questions to the speakers and evaluate the sessions online.</li>
          <li>A mini overflow from four of the Spektrum tracks.</li>
        </ul>

      </section>

      <section className="content is-normal">
        <h2>Workshops</h2>
        <p>The JavaZone SuperOverflow Ticket includes full access to Teknologihuset and entry to Workshops in Oslo Spektrum on Tuesday September 5th (Workshop registration opens in August with limited seating: first come, first served). The price also includes a 1-year membership in javaBin, the Norwegian Java User Group.</p>
      </section>

      <section className="content is-normal">
        <h2>Expo</h2>
        <p>During the whole conference the Expo area is open, serving continuous food and beverage, mingling, games and fun. After the last sessions on Wednesday, we invite you to join the Pre-AweZone party with free drinks and DJ before heading out.</p>
      </section>

      <section className="content is-normal">
        <h2>AweZone Party</h2>
        <p>AweZone is held at Kulturhuset, Himkok and Tukthuset. Here you will meet the other participants from Oslo Spektrum for a night of concerts, partying, more free drinks and food.</p>
      </section>

      <section className="content is-normal">
        <h2>Tickets</h2>
        <p>Ticket price: NOK3000 ex.VAT<br/>
          Pre-sale opens on June 12th.<br/>
          Official sale opens on June 15th.<br/></p>
          <strong>
            <Link className="button is-dark-blue is-fullwidth" href="https://app.checkin.no/event/58282/javazone-superoverflow-2023">
              Book your ticket here
            </Link>
          </strong>
          <p>Note: The button will send you to the webpage of our ticket partner Checkin.</p>
      </section>

      <section className="content is-normal">
        <h2>Conditions</h2>
        <p>All tickets are non-refundable after July 1st 2023, meaning that by purchasing tickets you accept that you cannot under any circumstances demand a refund for such tickets after this date. Notwithstanding the above, you will not receive a refund or be entitled to any other kind of compensation if the event, partly or as a whole, is canceled or postponed due to circumstances outside of our control, including war, strikes, natural disasters, lockdown, power failure, cyber-attacks or any other event that has to be classified as force majeure, as well as any consequences of pandemics including measures laid down by public governmental bodies or corporate policies to mitigate consequences of or health risk related to pandemics at any time.</p>
        <p>In order to make SuperOverflow a success, we need a certain number of participants. We offer tickets from June 12th exclusively to participants who have registered for the ticket waiting list.</p>
        <p>We will refund the full ticket price if SuperOverflow is canceled because of lack of interest.</p>
      </section>

      <section className="content is-normal">
        <h2>Venue</h2>
        <p>Teknologihuset/Rebel, Universitetsgata 2, 0164 Oslo</p>
      </section>


      </section>
  )
}
