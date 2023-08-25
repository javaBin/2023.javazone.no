'use client'

import '../../../styles/globals.css'
import Image from 'next/image'
import { Title } from "@/components/title/Title";

interface Partner {
  homepageUrl: string
  name: string
  logoUrl: string
}

interface Props {
  partners: Partner[]
}

export default function PartnerOverview({ partners }: Props) {
  return (
    <section className="block w-screen bg-big-text-color p-4 ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)]">
      <Title className="text-center text-red-text-color">Partners in 2023</Title>
      <div className="flex flex-wrap justify-center gap-10">
        {[...partners]
          .sort(() => Math.random() - 0.5)
          .map((partner) => {
            return (
              <a key={partner.name} href={partner.homepageUrl}>
                <Image
                  height={0}
                  width={0}
                  sizes={'100vw'}
                  className="h-16 w-40 transform transition-transform hover:scale-125"
                  src={partner.logoUrl}
                  alt={partner.name}
                  style={{ padding: '5px' }}
                />
              </a>
            )
          })}
      </div>
    </section>
  )
}
