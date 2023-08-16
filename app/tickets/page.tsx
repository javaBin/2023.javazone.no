import React from 'react'
import { Metadata } from 'next'
import { Title } from '@/components/title/Title'
import { Section } from '@/components/section/Section'
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: 'JavaZone 2023 - Tickets',
}

export default function TicketsPage() {
  return (
    <div>
      <Title type="big-title">Tickets</Title>
      <PageBanner/>

      <Section>
        <Title>About JavaZone</Title>
        <p>
          JavaZone 2023 will be the 21st physical JavaZone conference and will consist of a day of
          pre-conference workshop, followed by two days of lightning talks and presentations in
          September.
        </p>
      </Section>
      <Section>
        <Title>Price</Title>
        <p className="mb-4">
          <b>7 990,- (ex MVA and fee)</b>
        </p>
        <p>Late bird (after April 1st) : 8 790,- (ex MVA and fee)</p>
      </Section>
      <Section>
        <Title>Sold out</Title>
        <p className="mb-4">We are all out of tickets</p>
      </Section>
      <Section>
        <Title>Partner tickets</Title>
        <p>
          If you are working for one of our partners, do not order your tickets here. Instead your
          partner contact will order your tickets directly from us. Read more about partnership{' '}
          <a href="/partners">here</a>
        </p>
      </Section>
      <Section>
        <Title>What is included?</Title>
        <p className="mb-4">
          The tickets includes admission to JavaZone both days (September 6th and 7th). It also
          includes admission to the workshops on September 5th (The workshops have limited seating,
          and participants will need to sign up. Registration opens in August).
        </p>

        <p>
          The price also includes a 1-year membership in javaBin, the Norwegian Java User Group.
          Prices are ex. VAT and ticket fee (NOK 120 per ticket)
        </p>
      </Section>
    </div>
  )
}
