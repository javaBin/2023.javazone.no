'use client'

import PageBanner from "../../components/PageBanner";
import Image from "next/image";
import styles from "./theme.module.css";
import voulenterstyles from "../volunteers/volunteers.module.css";
import AOS from "aos";
import 'aos/dist/aos.css';
import * as React from "react";
import {useEffect} from "react";

export default function Theme() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <h1 className="title">Dear JavaZone community,
        We are excited to announce that this year’s JavaZone conference theme is Circus!</h1>

      <PageBanner/>

      <h1 className={"title has-text-centered"} style={{marginBottom: "4rem"}}>Why Circus, you might ask?</h1>

      <div>
        <SectionContent src={"/images/JavaZone2022Donut.jpg"} alt={"donut"}
                        content={"There are several reasons why we chose the circus theme for JavaZone 2023"}
                        contentTwo={
                          "First, the circus is all about having a good time with great people, and that’s what JavaZone is all about too!"}
                        contentThree={"Just like the circus, we want to showcase the amazing skills and talents of our speakers, partners and attendees, and provide an environment where everyone can learn, grow, and be inspired."}/>

        <SectionContent src={"/images/JavaZone2022Rubix.jpg"} alt={"rubix"}
                        content={" Second, we wanted to think outside the box"}
                        contentTwo={"While at the same time being inspired by the important work voluntary entertainers do to make children smile in hospitals and refugee camps."}
                        contentThree={"In addition to the excitement and innovation that a circus brings, we also believe that it aligns perfectly with JavaZone’s commitment to diversity and inclusivity. "}/>

        <SectionContent src={"/images/Javazone2022Arcade.jpg"} alt={"arcade"}
                        content={"In addition to the excitement and innovation that a circus brings"}
                        contentTwo={"We also believe that it aligns perfectly\n" +
                          "        with JavaZone’s commitment to diversity and inclusivity. The circus has a long history of celebrating\n" +
                          "        diversity and providing a space for performers of all backgrounds, abilities, and identities. "}
                        contentThree={"Similarly, we believe that the tech industry should be inclusive and diverse, and that there is space for everyone to contribute and succeed. We hope that the circus theme will serve as a reminder of this important value, and\n" +
                          "        that it will inspire our attendees to continue working towards a more inclusive and welcoming tech\n" +
                          "        community."}/>
      </div>

      <div className={"mt-5"}>
        <SectionContent src={"/images/JavaZone2022Pool.jpg"} alt={"pool"} content={"Finally"}
                        contentTwo={"We believe that the circus theme will provide a fun and engaging atmosphere for our attendees.\n" +
                          "        Whether it’s the colourful decorations, the exiting tech content, or the legendary AweZone party, we want to\n" +
                          "        create an environment that encourages attendees to let loose, have fun, and make lasting connections with\n" +
                          "        their fellow tech enthusiasts."} contentThree={" "}/>
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
  style?: any
}) => {
  return (
    <section className={`content is-normal ${styles.displayFlex}`} style={props.style}>
      <Image src={props.src} data-aos="fade-right" data-aos-duration="1000" width={400} height={200} alt={props.alt}/>
      <div className={voulenterstyles.pDiv} data-aos="fade" data-aos-duration="1000" data-aos-delay="500">
        <h1>{props.content}</h1>
        {props.contentTwo ? <p>{props.contentTwo}</p> : <></>}
        {props.contentThree ? <p>{props.contentThree}</p> : <></>}
      </div>
    </section>
  );
}
