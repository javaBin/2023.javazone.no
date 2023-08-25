import { Title } from '@/components/title/Title'
import { Section } from '@/components/section/Section'
import { Link } from '@/components/link/Link'
import Image from 'next/image'

export default function Info() {
  return (
    <article>
      <Title type="big-title">General information</Title>
      <Section id="javazone101">
        <Title>JavaZone 101 - The Who, What and Where</Title>
        <p className="mb-4">
          JavaZone – the biggest European community-driven conference for modern developers will be
          22 years old in 2023! Don’t miss out on two days of inspiring tech talks, a day of
          hands-on sessions, mingling, and a great party!
        </p>
        <p className="mb-4">
          JavaZone is organized by javaBin, the Norwegian Java User Group. Our goal is to organize a
          community-driven conference for Java developers where they can learn new things, share
          knowledge, and socialize.
        </p>
        <p className="mb-4">
          We have been organizing JavaZone since 2001 and have been excited to watch the event grow
          bigger and better every year.
        </p>
        <p className="mb-4">
          We would not be what we are today without YOU! Thank you for your support and
          contributions over the years. Don’t procrastinate! Join your fellow Java developers at
          JavaZone on September 6th-7th, 2023!
        </p>
        <Image
          src={'/images/220907Javazone0101.jpg'}
          alt={'A lot of people inside the conference main area'}
          width={1200}
          height={600}
        />
      </Section>
      <Section id="claim-your-tickets">
        <Title>Claiming your ticket</Title>
        <p className="mb-4">
          As the previous years we are all sold out . If you are one of the lucky to be a ticket
          holder you claim your badge when arriving at Oslo Spektrum. (You can change the name on
          the ticket until you arrive and get your badge at Oslo Spektrum, but after that the ticket
          is personal and non transferable).
        </p>
        <p className="mb-4">
          If you are attending a workshop on Tuesday September 5th you pick up your badge when you
          arrive at the workshop.
        </p>
        <p className="mb-4">
          On Tuesday September 5th from 16:00 until 18:00 you can pick up your badge at Oslo
          Spektrum - entrance 3 (and thus walk straight past the queue on Wednesday)
        </p>
      </Section>
      <Section id="conference-days">
        <Title>Two conference days</Title>
        <p className="mb-4">
          Two days full of talks from renowned Norwegian and international speakers, in varying
          formats and categories. You don´t want to miss our amazing lineup.
        </p>
        <p className="mb-4">
          Our doors open at 8:00 on Wednesday September 6th . At 8:30, you can expect our unique
          opening show taking place in the expo. The talks will start at 9:00 both days.
        </p>
        <p className="mb-4">The last talk will be finished at 18:00 on Thursday September 7th.</p>
      </Section>
      <Section id="afterparty">
        <Title>An afterparty to remember</Title>
        <p className="mb-4">
          After a long day of unique learning experiences, it feels good to chill out with some good
          food and drink. JavaZone parties are legendary - and we can promise something amazing for
          our afterparty this year as well! Scroll down for more information about{' '}
          <Link href={'#awezone'}>AweZone!</Link>
        </p>
      </Section>
      <Section id="workshops">
        <Title>Hands-on workshops</Title>
        <p className="mb-4">
          Do you prefer practical tasks more than theory? Take part in one of our great workshops
          and boost your knowledge and skills. The workshops are included in your ticket, but we
          have a limited number of seat so you need to register.. Workshop registrations opens on
          Monday August 21th at 12:00. More info at{' '}
          <Link href={'/workshops'}>https://2023.javazone.no/workshops</Link>
        </p>
      </Section>
      <Section id="love-at-javazone">
        <Title>...And a whole lotta love ❤️</Title>
        <p>
          You will meet lots of interesting people at JavaZone! Grab your coffee (or tea) and mingle
          away!
        </p>
      </Section>
      <Section id="program">
        <Title>The JavaZone Program</Title>
        <p className="mb-4">
          The full program is available at{' '}
          <Link href="/program">https://2023.javazone.no/program</Link>
        </p>
        <Title type="subtitle">Lightning talks</Title>
        <p className="mb-4">
          Lightning talks are either 10 or 20 minutes long and often give a quick introduction to a
          concept. This is a great way to get a sneak peek at something new.
        </p>
        <Title type="subtitle">Presentations</Title>
        <p className="mb-4">
          Presentations at JavaZone have a length of 45 or 60 minutes and will give you a deeper
          understanding of a concept than lightning talks.
        </p>
      </Section>
      <Section id="awezone">
        <Title>AweZone: Celebrating the community</Title>
        <p className="mb-4">
          AweZone is JavaZone&apos;s traditional party which takes place on Wednesday evening.
        </p>
        <p className="mb-4">
          The party offers a great chance to catch up with old friends, meet new ones, and also
          experience a great line-up of entertainment!
        </p>
        <p className="mb-4">
          On Wednesday, we will be starting the pre-party at Oslo Spektrum at 19:20. At 20:00, we
          will be leaving Oslo Spektrum together and moving towards Youngstorget, and the best geeky
          super-party ever – AweZone! We will be spending the evening at <strong>Tukthuset</strong>,{' '}
          <strong>Himkok</strong>, and <strong>Kulturhuset</strong>.
        </p>
        <p className="mb-4">
          You will be able to enjoy the drinks, stay in the chill-out areas, participate in
          activities like Shuffleboard, Ping Pong, or Foosball, as well as mingle with the
          conference organizers, speakers, other participants, and our partners!
        </p>
        <p className="mb-4">
          Oh, and one more thing! We will be serving good food in the evening as well. Some drinks
          are on us, some will be on our partners!
        </p>
      </Section>
      <Section id="principles">
        <Title>A few very important principles</Title>
        <p className="mb-4">
          JavaZone is a 100% community-organized conference created by javaBin. The program is
          chosen by our independent program committee, and they operate under the principle that
          no-one is paid to hold a presentation, and likewise, that no-one can pay us to get their
          presentation accepted.
        </p>
        <p className="mb-4">
          We as organizers strive to create the best possible learning experience for all our
          speakers and participants, and we expect you to do the same. Everyone is welcome at
          JavaZone, but we do require that you treat your fellow conference participants with
          respect. We reserve the right to take any action necessary to make sure this principle is
          upheld. For more details, see our Code of Conduct that applies to all events organized by
          javaBin.
        </p>
        <p className="mb-4">Should any unwanted event occur, we‘re here to help:</p>
        <strong>
          <p className="mb-4">Before the conference</p>
        </strong>

        <p className="mb-4">
          You can contact us by email: <Link href="mailto:javazone@java.no">javazone@java.no</Link>{' '}
          (this goes to a small group of people, the core organizers of JavaZone), or styret@java.no
          (this goes to the javaBin board).
        </p>
        <strong>
          <p className="mb-4">During the conference</p>
        </strong>
        <p className="mb-4">
          Ask at the info stand, and we‘ll be in touch. Contact information will also be available
          at the info stand.
        </p>
      </Section>

      <Section id="food">
        <Title>Food</Title>
        <p className="mb-4">More information coming.</p>
        <Image
          src={'/images/JavaZone2022Donut.jpeg'}
          alt={'A lot of people inside the conference main area'}
          width={1200}
          height={600}
        />
      </Section>

      <Section id="sustainability">
        <Title>Sustainable waste management and recycling at JavaZone</Title>
        <p className="mb-4">
          In an era where environmental consciousness is at the forefront, responsible waste
          management practices have become imperative. At Oslo Spektrum, an innovative partnership
          with Oslo Municipality and Franzefoss ensures that waste is not just disposed of, but
          actively sorted and recycled, promoting a greener future.
        </p>
        <p className="mb-4">
          Upon entering JavaZone, attendees may not be immediately aware of the meticulous waste
          management system that operates behind the scenes. Once waste is discarded, the process of
          responsible disposal begins. A comprehensive sorting mechanism is in place, designed to
          separate recyclables from non-recyclable materials.
        </p>
        <p className="mb-4">
          One notable aspect of this waste management initiative is the sorting and collection of
          beverage containers for deposit refund, known as &quot;pant&quot; in Norway. The bottles
          and cans are systematically collected, sorted, and sent for recycling, embodying the ethos
          of resource efficiency.
        </p>
        <p className="mb-4">
          Considerable portions of waste generated during JavaZone are earmarked for recycling.
          Through a blend of advanced waste separation technology and dedicated staff, materials
          like paper, plastic, glass, and metal are carefully segregated. The residual waste is
          further sorted at the Franzefoss plant in Haraldsrud and the remaining 70% is ground up
          and converted into FOB (refined waste fuel). Franzefoss has an agreement with Norcem for
          the delivery of FOB and this is used by Norcem as a high-value fuel for cement production.
          The food waste/wet organic waste delivered is used for biogas and fertilizer on grain
          fields. This not only reduces the environmental impact of JavaZone but also sets an
          example for attendees and the wider community.
        </p>
      </Section>

      <Section id="questions">
        <Title>Questions?</Title>
        <p className="mb-4">
          Do not hesitate to contact us if you have any questions. Contact us at{' '}
          <Link href="mailto:javazone@java.no">javazone@java.no</Link> and we’ll try our best to
          give you an answer.
        </p>
        <p className="mb-4">We are looking forward to seeing you at JavaZone 2023!</p>
      </Section>
    </article>
  )
}
