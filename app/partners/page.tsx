import { ReactNode } from 'react'
import mainstyles from '../page.module.css'

export default function Partners() {
  return (
    <main className={mainstyles.main}>
      <div style={{ width: '75%' }}>
        <section>
          <h2>Partner information</h2>
          <p>
            Even though all partners are considered equal, there are a few options to choose from.
            There is a base package that everyone gets, and then there are a few available
            expansions. Note that these expansions have limited availability.
          </p>
          <p>
            All organisations registered before January 6th will be entered into a random draw and
            preferences will be allocated in the order in which partners are drawn. We will then
            contact your organisation to confirm your choices. After the initial draw, the remaining
            available packages will be allocated on a first-come, first-served basis.
          </p>
          <a
            href="https://docs.google.com/forms/d/1faOABDDGZ-w1pzeorrXO_qzw6rLG7keKFpMhEMtrq9o"
            style={{ fontWeight: 'bold', fontSize: '2rem' }}
          >
            Link to registration form
          </a>
        </section>
        <section>
          <div>
            <h2>Packages</h2>
            <StandardPackage />
            <DonutStand />
            <h2>Possible expansions</h2>
            <ConceptStand />
            <RestaurantStand />
            <h2>Partner tickets</h2>
            <PartnerCard title="Ticket types">
              <ul>
                <li>
                  EarlyBird 0-30 billetter (inkl javaBin-medlemskap) - {moneyFormat.format(7590)}
                </li>
                <li>
                  EarlyBird 30-50 billetter (inkl javaBin-medlemskap) - {moneyFormat.format(7390)}
                </li>
                <li>
                  EarlyBird 50+ billetter (inkl javaBin-medlemskap) - {moneyFormat.format(7190)}
                </li>
                <li>
                  LateBird (ekstrabestillinger) (inkl javaBin-medlemskap) -{' '}
                  {moneyFormat.format(8390.0)}
                </li>
              </ul>
            </PartnerCard>
          </div>
        </section>
        <p>
          You can contact us about partnership details at{' '}
          <a href="mailto:partner@java.no">partner@java.no</a>
        </p>
      </div>
    </main>
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
    <div
      style={{
        backgroundColor: '#191919',
        padding: '1rem',
        marginBottom: '1rem',
      }}
    >
      <h3>{props.title}</h3>
      {props.children}
      {props.price && (
        <p style={{ marginTop: 'auto' }}>
          {priceText}:{' '}
          <span style={{ fontWeight: 'bold' }}>
            <data value={props.price.value}>{moneyFormat.format(props.price.value)}</data>
          </span>{' '}
          excl. MVA / fees
        </p>
      )}
    </div>
  )
}

const StandardPackage = () => (
  <PartnerCard title="Standard Package" price={{ value: 87000 }}>
    <ul>
      <li>
        Stand
        <ul>
          <li>Location in conference hall</li>
          <li>6 square meters with backing wall</li>
        </ul>
      </li>
      <li>
        Profiling
        <ul>
          <li>
            Logo on homepage, program, announcements, and other activities related to JavaZone
          </li>
        </ul>
      </li>
      <li>
        Stand tickets
        <ul>
          <li>4 flexible conference tickets for operating the stand</li>
        </ul>
      </li>
      <li>
        Participant tickets
        <ul>
          <li>Reduced price on tickets for your colleagues</li>
        </ul>
      </li>
    </ul>
  </PartnerCard>
)

const DonutStand = () => (
  <PartnerCard title="Donut Stand" price={{ value: 87000 }}>
    <ul>
      <li>Location outside the main hall in the “Donut” which runs around the hall</li>
      <li>Greater opportunity for a bit more freedom with decorations</li>
    </ul>
  </PartnerCard>
)


const ConceptStand = () => (
  <PartnerCard title="Concept Stand" price={{ value: 72000, additional: true }}>
    <ul>
      <li>70 (10 x 7) square meters</li>
      <li>Large space for showing off your own concept</li>
      <li>Extremely limited – only 3 available</li>
    </ul>
  </PartnerCard>
)

const RestaurantStand = () => (
  <PartnerCard title="Restaurant Stand" price={{ value: 78000, additional: true }}>
    <ul>
      <li>108 (12 x 9) square meters</li>
      <li>Large back wall</li>
      <li>Food area with seating</li>
      <li>Continuous service of food throughout the conference</li>
      <li>Menu selection in cooperation with event partners</li>
      <li>Limited - only 8 available</li>
    </ul>
  </PartnerCard>
)
