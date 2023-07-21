import React, { ReactNode } from 'react'
import { Metadata } from 'next'
import { partners } from '../api/partners/partners'
import dynamic from 'next/dynamic'
import { Title } from '@/components/title/Title'
import { Section } from '@/components/section/Section'

const PartnerOverview = dynamic(() => import('./PartnerOverview'), { ssr: false })

export const metadata: Metadata = {
  title: 'JavaZone 2023 - Partners',
}

export default function Partners() {
  return (
    <>
      <Section>
        <Title type="subtitle">Sold out</Title>
        <p>We are now sold out of partner packages.</p>
      </Section>
      <PartnerOverview partners={partners} />

      <Section>
        <Title type="subtitle">Video from JavaZone 2023 Partner meeting on March 14th</Title>
        <video controls>
          <source src="/videos/partner-meeting.mp4" type="video/mp4" />
          <track
            label="English"
            kind="subtitles"
            srcLang="en"
            src="/videos/partner-meeting-captions.vtt"
            default
          />
        </video>
      </Section>

      <Section>
        <Title type="subtitle">Partner information</Title>
        <p className="mb-4">
          Even though all partners are considered equal, there are a few options to choose from.
          There is a base package that everyone gets, and then there are a few available expansions.
          Note that these expansions have limited availability.
        </p>
        <p>
          All organisations registered before January 6th will be entered into a random draw and
          preferences will be allocated in the order in which partners are drawn. We will then
          contact your organisation to confirm your choices. After the initial draw, the remaining
          available packages will be allocated on a first-come, first-served basis.
        </p>
      </Section>

      <Section className="font-['Noto Serif']">
        <Title>Packages</Title>
        <StandardPackage />
        <DonutStand />
        <Title>Possible expansions</Title>
        <ConceptStand />
        <RestaurantStand />
        <Title>Partner tickets</Title>
        <PartnerCard title="Ticket types">
          <ul className="list-disc ml-8 my-4">
            <li>
              EarlyBird 0-30 billetter (inkl javaBin-medlemskap, ex MVA) -{' '}
              {moneyFormat.format(7590)}
            </li>
            <li>
              EarlyBird 30-50 billetter (inkl javaBin-medlemskap, ex MVA) -{' '}
              {moneyFormat.format(7390)}
            </li>
            <li>
              EarlyBird 50+ billetter (inkl javaBin-medlemskap, ex MVA) - {moneyFormat.format(7190)}
            </li>
            <li>
              LateBird (ekstrabestillinger) (inkl javaBin-medlemskap, ex MVA) -{' '}
              {moneyFormat.format(8390.0)}
            </li>
          </ul>
        </PartnerCard>
      </Section>

      <p>
        You can contact us about partnership details at{' '}
        <a href="mailto:partner@java.no">partner@java.no</a>
      </p>
    </>
  )
}

const moneyFormat = Intl.NumberFormat('nb-NO', {
  currency: 'NOK',
  style: 'currency',
  currencyDisplay: 'code',
})

const PartnerCard = (props: {
  title: string
  price?: {
    value: number
    additional?: boolean
  }
  children: ReactNode
}) => {
  const priceText = props.price?.additional ? 'Additional price' : 'Price'
  return (
    <Section className={`rounded-md shadow-2xl is-normal is-info`}>
      <Title type="card" className="px-4 py-8">
        {props.title}
      </Title>
      <div className="p-0 ml-5 pb-5">
        {props.children}
        {props.price && (
          <p className="mt-auto">
            {priceText}:{' '}
            <span className="has-text-weight-bold">
              <data value={props.price.value}>{moneyFormat.format(props.price.value)}</data>
            </span>{' '}
            excl. MVA / fees
          </p>
        )}
      </div>
    </Section>
  )
}

const StandardPackage = () => (
  <PartnerCard title="Standard Package" price={{ value: 87000 }}>
    <strong>Stand</strong>
    <ul className="list-disc ml-8 my-4">
      <li>Location in conference hall</li>
      <li>6 square meters with backing wall</li>
    </ul>

    <strong>Profiling</strong>
    <ul className="list-disc ml-8 my-4">
      <li>Logo on homepage, program, announcements, and other activities related to JavaZone</li>
    </ul>

    <strong>Stand tickets</strong>
    <ul className="list-disc ml-8 my-4">
      <li>4 flexible conference tickets for operating the stand</li>
    </ul>

    <strong>Participant tickets</strong>
    <ul className="list-disc ml-8 my-4">
      <li>Reduced price on tickets for your colleagues</li>
    </ul>
  </PartnerCard>
)

const DonutStand = () => (
  <PartnerCard title="Donut Stand" price={{ value: 87000 }}>
    <strong>Stand</strong>
    <ul className="list-disc ml-8 my-4">
      <li>Location outside the main hall in the “Donut” which runs around the hall</li>
      <li>Greater opportunity for a bit more freedom with decorations</li>
    </ul>
  </PartnerCard>
)

const ConceptStand = () => (
  <PartnerCard title="Concept Stand" price={{ value: 72000, additional: true }}>
    <ul className="list-disc ml-8 my-4">
      <li>60 (10 x 6) square meters</li>
      <li>Large space for showing off your own concept</li>
      <li>Extremely limited – only 3 available</li>
    </ul>
  </PartnerCard>
)

const RestaurantStand = () => (
  <PartnerCard title="Restaurant Stand" price={{ value: 78000, additional: true }}>
    <ul className="list-disc ml-8 my-4">
      <li>24 square meters (12m back wall)</li>
      <li>Food area with seating</li>
      <li>Continuous service of food throughout the conference</li>
      <li>Menu selection in cooperation with event partners</li>
      <li>Limited - only 8 available</li>
    </ul>
  </PartnerCard>
)
