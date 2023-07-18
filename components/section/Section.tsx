import React from 'react'

interface SectionProps {
  /**
   * TODO
   * Type of section, normal or undefined
   */
  type?: 'normal' | 'undefined'
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
    case 'normal':
      return <section className="text-base mb-3">{children}</section>
    case 'undefined':
      return undefined
  }
}
