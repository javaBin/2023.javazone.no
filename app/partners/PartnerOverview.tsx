"use client"

import Image from 'next/image'
import styles from './partnerOverview.module.css'

interface Partner {
  homepageUrl: string
  name: string
  logoUrl: string
}

interface Props {
  partners: Partner[]
}

const imageContainer = {
  width: '10rem',
  height: '4rem',
  padding: "5px",
  transition: 'transform 0.3s',
}

export default function PartnerOverview({partners}: Props) {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Partners in 2023</h1>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "2.5rem",
        flexWrap: "wrap"
      }}>
        {[...partners]
          .sort(() => Math.random() - 0.5)
          .map((partner) => {
            return (
              <a key={partner.name} href={partner.homepageUrl}>
                <Image
                  height={0}
                  width={0}
                  sizes={'100vw'}
                  src={partner.logoUrl}
                  alt={partner.name}
                  style={imageContainer}
                  onMouseOver={(e) => {
                    const target = e.target as HTMLStyleElement;
                    target.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLStyleElement;
                    target.style.transform = 'scale(1)';
                  }}
                />
              </a>
            )
          })}
      </div>
    </section>
  )
}
