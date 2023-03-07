import mainstyles from '../page.module.css'
import Link from 'next/link'

export default function TicketsPage() {
  return (
    <main className={mainstyles.main}>
      <div>
        <h1 className="title">Tickets</h1>

                <section className="content is-normal">
                    <h2>About JavaZone</h2>
                    <p>
                        JavaZone 2023 will be the 21st physical JavaZone conference and will consist of a day of pre-conference workshop, followed by two days of lightning talks and presentations in September.
                    </p>
                </section>
                <section className="content is-normal">
                    <h2>Price</h2>
                    <p><b>7 990,- (ex MVA and fee)</b></p>
                    <p>Late bird (after April 1st) : 8 790,- (ex MVA and fee)</p>
                </section>
                <section className="content is-normal">
                    <h2>Sold out</h2>
                    <p>We currently do not have any more tickets availble. Some tickets might be come available at a later time. You can sign up on the waiting below. We will then contact you if we get tickets availble.</p>
                    <Link className="button is-dark-blue" href="https://docs.google.com/forms/d/e/1FAIpQLSfnTr0RkltFZO7QpNqPsx_Lwdq-aogH3w5LwhnXkkZ3BGYKbA/viewform?usp=sf_link"><b>Register on waiting list</b></Link>
                </section>
                <section className="content is-normal">
                    <h2>Partner tickets</h2>
                    <p>If you are working for one of our partners, do not order your tickets here. Instead your partner contact will order your tickets directly from us. Read more about partnership <a href="/partners">here</a></p>
                </section>
                <section className="content is-normal">
                    <h2>What's included?</h2>
                    <p>The tickets includes admission to JavaZone both days (September 6th and 7th). It also includes admission to the workshops on September 5th (The workshops have limited seating, and participants will need to sign up. Registration opens in August).</p>

          <p>
            The price also includes a 1-year membership in javaBin, the Norwegian Java User Group.
            Prices are ex. VAT and ticket fee (NOK 120 per ticket)
          </p>
        </section>
      </div>
    </main>
  )
}
