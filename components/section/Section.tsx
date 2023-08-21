import React, { ComponentProps } from 'react'

type SectionProps = ComponentProps<'section'> & {
  /**
   * Type of section, normal or 2 columns section
   */
  type?: 'normal' | '2-col'
}

/**
 * Section component
 */
export const Section = ({ type = 'normal', className = '', children, ...props }: SectionProps) => {
  switch (type) {
    case '2-col':
      return (
        <section
          className={`text-base mb-6 flex justify-between gap-8 w-full relative max-[890px]:grid ${className}`}
          {...props}
        >
          {children}
        </section>
      )
    case 'normal':
      return (
        <section className={`text-base mb-4 ${className}`} {...props}>
          {children}
        </section>
      )
  }
}
