import { ReactNode } from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JavaZone 2023 - Speakers',
}

export default function SpeakersPage() {
  const TalkTypeCard = (props: { type: string; timing: string; children: ReactNode }) => {
    return (
      <div className="box">
        <h3 className="text-2xl text-[#FED12D] font-semibold mb-2">{props.type}</h3>
        <i>{props.timing}</i>
        {props.children}
      </div>
    )
  }

  return (
    <section>
      <h1 className="text-4xl leading-tight font-semibold text-[#FED12D] mb-2">
        Call for speakers
      </h1>

      <section className="block mb-6">
        <h2 className="text-3xl text-[#FED12D] font-semibold mb-2">About JavaZone</h2>
        <p className="mb-2">
          {`JavaZone 2023 will be the 21st physical JavaZone conference and will consist of a day of
          pre-conference workshop, followed by two days of lightning talks and presentations in
          September.`}
        </p>
        <p className="mb-2">
          JavaZone is typically sold out, with more than 3200 attendees enjoying well over 100
          sessions.
        </p>
        <p className="mb-2">
          {`JavaZone hosts both international and Norwegian speakers. We'd love to have you join us
          the coming September!`}
        </p>
        <p className="mb-2">
          Our call for speakers is open from <b className="is-underlined">January 27th</b> until{' '}
          <b className="is-underlined">April 17th</b>.
        </p>
        <strong>
          <Link className="button is-dark-blue" href="https://talks.javazone.no">
            Submit your talk!
          </Link>
        </strong>
      </section>

      <section className="block mb-6">
        <h2 className="text-3xl text-[#FED12D] font-semibold mb-2">
          What is it like speaking at JavaZone?
        </h2>
        <p className="mb-2">
          Over the last decade JavaZone has grown to become one of the most important Java events in
          Europe! You can see for yourself – over 1500 videos from previous years talks are
          available for free at <a href="https://vimeo.com/javazone">Vimeo</a>, and the{' '}
          <a href="https://2022.javazone.no/program">full program from JavaZone 2022</a> is also
          available.
        </p>
        <p className="mb-2">
          {`We can brag as much as we want, but JavaZone would be nothing without all the great
          speakers! That's why we need your help to make sure that JavaZone 2023 will be at least as
          awesome as the earlier events. If you think you have something interesting to share,
          please submit your talk or workshop.`}
        </p>
        <p className="mb-2">
          JavaZone is committed to diversity, and we are especially interested in quality
          submissions from groups that are under-represented in tech.
        </p>
      </section>

      <section className="block mb-6">
        <h2 className="text-3xl text-[#FED12D] font-semibold mb-2">Formats and durations</h2>
        <p className="mb-2">
          You should think about which format your talk will work best in. Are you presenting a new
          idea, or do you require more time to elaborate on your subject? How hands-on do you want
          to be? We have three formats you can present your material in.
        </p>

        <TalkTypeCard type="Lightning talks" timing="10 or 20 minutes">
          <p className="mb-2">
            Are you presenting a great new idea, or want to give the audience a teaser for a cool
            topic? Then you should strongly consider the lightning talk format. Note that the 10-20
            minute time limit is strictly enforced!
          </p>
        </TalkTypeCard>

        <TalkTypeCard type="Presentations" timing="45 or 60 minutes">
          <p className="mb-2">
            Presentations at JavaZone can be either 45 or 60 minutes long. This gives you room to
            elaborate on an idea. When submitting your talk, please indicate clearly in the outline
            how much time is reserved for questions.
          </p>
        </TalkTypeCard>

        <TalkTypeCard type="Workshops" timing="2 hours, 4 hours, 8 hours">
          <p className="mb-2">
            We will continue the popular workshop concept with a range of sessions on Tuesday,
            September 6th. The format for the workshops is in-depth, hands-on and interactive.
          </p>
        </TalkTypeCard>
      </section>

      <section className="block mb-6">
        <h2 className="text-3xl text-[#FED12D] font-semibold mb-2">Audience and topics</h2>
        <p className="mb-2">
          JavaZone is a conference for developers and technical architects, with an emphasis on
          technical talks. However, we are open to talks about other areas, including methodology,
          project management, and other topics related to programming.
        </p>
        <p className="mb-2">
          Despite our conference name, we do not limit our content to Java technology. We will
          consider all talks based on their relevance to developers and technical architects. We do
          however set a focus on technology surrounding the JVM when selecting talks.
        </p>
      </section>

      <section className="block mb-6">
        <h2 className="text-3xl text-[#FED12D] font-semibold mb-2">Ongoing evaluation of talks</h2>
        <p className="mb-2">
          Each year we receive hundreds of submissions and we consider each submission as it
          arrives. Due to a large number of submissions, we can not guarantee that you will hear
          from us immediately. We do however answer all submissions and will do so no later than end
          of June.
        </p>
        <p className="mb-2">
          Our advice to you is simple. <strong>Submit early!</strong> The earlier you submit, the
          more likely you are to be noticed. Avoid drowning in the end-of-Call for Speakers-tsunami!
        </p>
        <br />

        <div className="max-w-screen-lg mb-10">
          <div className="flex justify-center">
            <div className="w-[50%] max-md:w-[100%] bg-[#033E4F]">
              <div className="px-16 py-12 text-xl text-white">
                <h3 className="text-3xl text-[#FED12D] font-semibold mb-2">Submission tips</h3>
                <p className="mb-2">Learn how to increase your chance of getting accepted.</p>
                <a className="font-bold text-white underline" href="/speakers/speakers-tips">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="block mb-6">
        <h2 className="text-3xl text-[#FED12D] font-semibold mb-2">{`What's in it for me?`}</h2>
        <h3 className="text-2xl text-[#FED12D] font-semibold mb-2">
          Accepted presentations, lightning talks, and workshops
        </h3>
        <p className="mb-2">
          {`As a JavaZone speaker, you get free admission to the conference. Additionally, you are
          also invited to the speakers' dinner, held on September 6th.`}
        </p>
        <p className="mb-2">
          All accepted speakers can apply to join us on JourneyZone. See more information on
          Journeyzone{' '}
          <a className="has-text-weight-bold" href="/speakers/journeyzone">
            here
          </a>
        </p>
        <h3 className="text-2xl text-[#FED12D] font-semibold mb-2">Coverage of expenses</h3>
        <p className="mb-2">
          Please see our <a href="/speakers/monetary-policy">reimbursement policy</a> if you have
          any questions regarding coverage of other expenses.
        </p>
      </section>

      <section className="block mb-6">
        <h2 className="text-3xl text-[#FED12D] font-semibold mb-2">Important principles</h2>
        <p className="mb-2">
          JavaZone is proud to be an independent and community-driven conference. It is organized by
          volunteers from <a href="https://javabin.no">javaBin</a> (the Norwegian Java User Group)
          and is run as a non-profit organization. This means that we have three important
          principles for selecting talks:
        </p>
        <ul className="ml-8 my-4 list-disc">
          <li>We do not sell speaker slots.</li>
          <li>We do not accept sales pitches masked as presentations</li>
          <li>We do not differentiate between speakers from partners and independent speakers</li>
        </ul>
        <p className="mb-2">
          If your talk adheres to these very important principles, you are more than welcome to
          submit it to our Call for Speakers!
        </p>
      </section>
      <h2>
        We hope to see you at JavaZone 2023 - please feel free to spread the word to your local
        community!
      </h2>
      <p className="mb-2">
        Best regards,
        <br />
        the JavaZone Program Committee
      </p>
    </section>
  )
}
