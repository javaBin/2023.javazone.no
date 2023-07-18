import React from 'react'

interface SectionProps {
  /**
   * TODO
   * Type of section, normal or 2 columns section
   */
  type?: 'normal' | '2-col'
  /**
   * Section content
   */
  children?: React.ReactNode
}

/**
 * Section component
 */
export const Section = ({ type = 'normal', children }: SectionProps) => {
  switch (type) {
    case '2-col':
      return (
        <section className="text-base mb-3 flex justify-between gap-8 w-full relative max-md:grid max-md:text-center">
          {children}
        </section>
      )
    case 'normal':
      return <section className="text-base mb-3">{children}</section>
  }
}
