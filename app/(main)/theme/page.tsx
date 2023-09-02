'use client'

import * as React from "react";
import Image from "next/image";
import AOS from "aos";
import 'aos/dist/aos.css';
import { CSSProperties, useEffect } from "react";
import { Section } from '@/components/section/Section'
import { Title } from '@/components/title/Title'
import PageBanner from "@/components/PageBanner";

export default function Theme() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div>
      <Title type="big-title">
        Dear JavaZone community, We are excited to announce that this year’s JavaZone conference
        theme is Circus!
      </Title>

      <PageBanner/>

      <Title className="text-center !mb-12">Why Circus, you might ask?</Title>

      <div>
        <SectionContent
          src={'/images/JavaZone2022Donut.jpeg'}
          alt={'donut'}
          content={'There are several reasons why we chose the circus theme for JavaZone 2023'}
          contentTwo={
            'First, the circus is all about having a good time with great people, and that’s what JavaZone is all about too!'
          }
          contentThree={
            'Just like the circus, we want to showcase the amazing skills and talents of our speakers, partners and attendees, and provide an environment where everyone can learn, grow, and be inspired.'
          }
        />

        <SectionContent
          src={'/images/JavaZone2022Rubix.jpeg'}
          alt={'rubix'}
          content={' Second, we wanted to think outside the box'}
          contentTwo={
            'While at the same time being inspired by the important work voluntary entertainers do to make children smile in hospitals and refugee camps.'
          }
          contentThree={
            'In addition to the excitement and innovation that a circus brings, we also believe that it aligns perfectly with JavaZone’s commitment to diversity and inclusivity. '
          }
        />

        <SectionContent
          src={'/images/JavaZone2022Arcade.jpeg'}
          alt={'arcade'}
          content={'In addition to the excitement and innovation that a circus brings'}
          contentTwo={
            'We also believe that it aligns perfectly\n' +
            '        with JavaZone’s commitment to diversity and inclusivity. The circus has a long history of celebrating\n' +
            '        diversity and providing a space for performers of all backgrounds, abilities, and identities. '
          }
          contentThree={
            'Similarly, we believe that the tech industry should be inclusive and diverse, and that there is space for everyone to contribute and succeed. We hope that the circus theme will serve as a reminder of this important value, and\n' +
            '        that it will inspire our attendees to continue working towards a more inclusive and welcoming tech\n' +
            '        community.'
          }
        />
      </div>

      <div className={'mt-5'}>
        <SectionContent
          src={'/images/JavaZone2022Pool.jpeg'}
          alt={'pool'}
          content={'Finally'}
          contentTwo={
            'We believe that the circus theme will provide a fun and engaging atmosphere for our attendees.\n' +
            '        Whether it’s the colourful decorations, the exiting tech content, or the legendary AweZone party, we want to\n' +
            '        create an environment that encourages attendees to let loose, have fun, and make lasting connections with\n' +
            '        their fellow tech enthusiasts.'
          }
        />
      </div>
    </div>
  )
}

const SectionContent = (props: {
  src: string
  alt: string
  content: string
  contentTwo?: string
  contentThree?: string
  style?: CSSProperties
}) => {
  return (
    <Section type="2-col">
      <div data-aos="fade-right" data-aos-duration="1000">
        <Image src={props.src} width={400} height={200} alt={props.alt} />
      </div>
      <div
        className="left-0 w-[60%] max-md:w-full"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <Title>{props.content}</Title>
        {props.contentTwo ? <p className="mb-4">{props.contentTwo}</p> : <></>}
        {props.contentThree ? <p className="mb-4">{props.contentThree}</p> : <></>}
      </div>
    </Section>
  )
}
