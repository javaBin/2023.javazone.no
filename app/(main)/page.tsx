import Link from 'next/link'
import styles from './page.module.css'
import AnimatedDivider from '../../components/AnimatedDivider'
import AnimatedHero from '../../components/AnimatedHero'
import Image from 'next/image'
import React from 'react'
import { Title } from '@/components/title/Title'

export default function Home() {
  return (
    <div className="flex m-[0.75rem]">
      <div className={styles.wendy}>
        <Image src={'/svg/JZ2023-Character-Wendy-cropped.svg'} width={300} height={300} alt={'f'} />
      </div>

      <section className="text-center">
        <div className="mb-4">
          <AnimatedHero />
        </div>

        <div className="flex justify-center">
          <AnimatedDivider />
        </div>

        <Title type="big-title">
          Welcome to The Amazing JavaZone 6-7 September in Oslo Spektrum
        </Title>
        <Title type="subtitle">
          Join the Discord: <Link href={'https://discord.javazone.no'}>discord.javazone.no</Link> 🔥
        </Title>
        <div className={'mb-4'}>
          <p className="mb-4">
            Our doors open at <strong>8:00</strong> AM on Wednesday September 6th. At <strong>8:30</strong> AM, you can expect our unique
            opening show taking place in the expo area. The talks will start at <strong>9:00</strong> AM both days
          </p>
          <p>Conference: September 6-7, 2023</p>
          <p>Workshop: September 5, 2023</p>
          <p>Location: Oslo Spektrum, Norway</p>
        </div>
        <div>
          <div>
            <Link href="/program">Program is now ready! 🚀</Link>
          </div>
          <div>
            <Link href="/info">General information can be found here</Link>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <AnimatedDivider />
        </div>
      </section>

      <div className={styles.wheely}>
        <Image
          src={'/svg/JZ2023-Character-Wheely-cropped.svg'}
          width={400}
          height={400}
          alt={'f'}
        />
      </div>
    </div>
  )
}
