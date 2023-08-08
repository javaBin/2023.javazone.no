import Link from 'next/link'
import styles from './page.module.css'
import AnimatedDivider from '../components/AnimatedDivider'
import AnimatedHero from '../components/AnimatedHero'
import AnimatedFireworks from '../components/AnimatedFireworks'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={'columns'}>
      <div className={styles.wendy}>
        <Image src={'/svg/JZ2023-Character-Wendy-cropped.svg'} width={300} height={300} alt={'f'} />
      </div>

      <section className={`has-text-centered`}>
        <div className="mb-4">
          <AnimatedHero />
        </div>

        <div className="flex justify-center">
          <AnimatedDivider />
          <AnimatedFireworks />
        </div>

        <h1 className={`title ${styles.fontAndColor} mt-4`}>
          Welcome to The Amazing JavaZone 6-7 September in Oslo Spektrum
        </h1>
        <div className={'mb-4'}>
          <p>Conference: September 6-7, 2023</p>
          <p>Workshop: September 5, 2023</p>
          <p>Location: Oslo Spektrum, Norway</p>
        </div>
        <div>
          <div>
            <Link href="/program">Program</Link> is now ready! 🚀
          </div>
          <div className="has-text-weight-bold">
            NB! Want to be a partner? Click <Link href="/partners">here</Link>
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
