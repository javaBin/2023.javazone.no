'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const dividers = [1, 2, 3, 4, 5]

export default function AnimatedDivider() {
  const [currentDivider, setCurrentDivider] = useState(1)
  const dividerUrl = `/svg/JZ2023-Divider-${currentDivider}.svg`

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDivider((prevDivider) => (prevDivider === dividers.length ? 1 : prevDivider + 1))
    }, 300)
    return () => clearInterval(interval)
  }, [])

  return <Image src={dividerUrl} height={60} width={60} alt="divider" />
}
