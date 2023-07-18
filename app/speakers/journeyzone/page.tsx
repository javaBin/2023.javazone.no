import Image from 'next/image'
import React from 'react'
import { Title } from '@/components/title/Title'
import { Section } from '@/components/section/Section'

export default function JourneyZonePage() {
  return (
    <Section>
      <Title type="h1" text="JourneyZone 2023" />

      <Section>
        <Title type="h2" text="What is this?" />
        <p>
          JourneyZone is our annual trip exclusively for speakers just after the JavaZone
          conference. This year we will travel to Åndalsnes. Åndalsnes is located is located at the
          end of the Romsdalen walley which features some of the most spectacular scenery in the
          entire country.
        </p>
      </Section>
      <Section>
        <Title type="h2" text="When? Where?" />
        <p>
          We are leaving Oslo early in the morning Friday (the day after JavaZone) September 8th. We
          will be back in Oslo (Central station) in the afternoon on Sunday, September 10th. We will
          travel by train from Oslo to Åndalsnes (which will include the famous and scenic
          Raumabanen)The entire trip is planned, so all you need to do is meet up. You will need
          your outdoor equipment for hiking. We will send a more detailed packing list closer to the
          event.
        </p>
      </Section>
      <Image
        className="pb-8"
        src="/images/journeyzone06.jpeg"
        alt="Team picture on top of Åndalsnes"
        width={1000}
        height={200}
      />

      <Section>
        <Title type="h2" text="Who can attend?" />
        <p>
          All speakers of JavaZone are invited, but we have a limited number of spots available for
          the journey. Those who hold full presentations and workshops are prioritized, but
          presenters of lightning talks are of course also welcome to apply!
        </p>

        <p>
          In order to attend, you must be in a physical condition that allows you to hike up a
          mountain. No extraordinary physical activity is required by participants.
        </p>
      </Section>
      <Section>
        <Title type="h2" text="Personal expenses" />
        <p>
          JavaZone will cover almost all your expenses which is considered your reward for holding
          your talk at the conference. To ensure that we stretch the budget to accommodate as many
          as possible we require that all attendees pay NOK 1500.
        </p>
      </Section>

      <Section>
        <Title type="h2" text="The program" />
        <p>
          The program is, as usual, tightly packed and full of interesting events. The main
          activities are hiking and cycling, so good shoes and hiking gear and clothes are
          absolutely necessary. The details will be a surprise and could change depending on the
          weather conditions. We will adapt to whatever comes our way and set up a great program
          accordingly.
        </p>
      </Section>

      <Image
        className="pb-4"
        src="/images/journeyzone05.jpeg"
        alt="Picture of woman looking down at Åndalsnes"
        width={1000}
        height={200}
      />

      <Section>
        <Title type="h2" text="How to apply" />
        <p>We will send info to all accepted speakers with details on how to apply</p>
      </Section>
    </Section>
  )
}
