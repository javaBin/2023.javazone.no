'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const Fireworks = dynamic(() => import('@fireworks-js/react'))

export default function AnimatedFireworks() {
  const [timeOver, setTimeOver] = useState(false)

  useEffect(() => {
    const disableAnimation = window.matchMedia('(prefers-reduced-motion)').matches

    if (disableAnimation) {
      setTimeOver(true)
      return
    }

    const timeout = setTimeout(() => {
      setTimeOver(true)
    }, 5000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    /*if timeout is true, then show the fireworks */
    !timeOver ? (
      <div>
        <Fireworks
          options={{
            rocketsPoint: {
              min: 0,
              max: 100,
            },
          }}
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'fixed',
          }}
        />
      </div>
    ) : null
  )
}
