import React from 'react'

interface BackgroundSectionProps {
  /**
   * Type of section, based on where it is used (Defines the background image)
   */
  type?: 'about'
}

/**
 * Section component
 */
export const BackgroundSection = ({ type = 'about' }: BackgroundSectionProps) => {
  switch (type) {
    case 'about':
      return (
        <section
          className={
            "bg-[url('../public/images/JavaZone2022Hall.jpeg')] min-h-[600px] bg-fixed bg-center bg-no-repeat bg-cover mr-[calc(185px-50vw)] ml-[calc(180px-50vw)] my-3"
          }
        />
      )
  }
}
