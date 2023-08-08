import React from 'react'

interface SectionProps {
  /**
   * Type of section, normal or 2 columns section
   */
  type?: 'normal' | '2-col'
  /**
   * Optional class name
   */
  className?: string
  /**
   * Section content
   */
  children?: React.ReactNode
}

/**
 * Section component
 */
export const Section = ({ type = 'normal', className = '', children }: SectionProps) => {
  switch (type) {
    case '2-col':
      return (
        <section
          className={`text-base mb-6 flex justify-between gap-8 w-full relative max-[890px]:grid ${className}`}
        >
          {children}
        </section>
      )
    case 'normal':
      return <section className={`text-base mb-4 ${className}`}>{children}</section>
  }
}
