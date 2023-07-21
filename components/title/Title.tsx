import React, { ReactNode } from 'react'

interface TitleProps {
  /**
   * Type of header: title, subtitle, or column
   */
  type?: 'title' | 'subtitle' | 'column' | 'card' | 'paragraph' | 'program'

  /**
   * Optional class name
   */
  className?: string
  /**
   * Title content
   */
  children: ReactNode
}

/**
 * Primary UI component for user interaction
 */
export const Title = ({ type = 'title', className, children }: TitleProps) => {
  switch (type) {
    case 'title':
      return (
        <h1 className={`text-4xl font-semibold text-[#FED12D] mb-4 ${className}`}>{children}</h1>
      )
    case 'subtitle':
      return (
        <h2 className={`text-3xl font-semibold text-[#FED12D] mb-4 ${className}`}>{children}</h2>
      )
    case 'column':
      return (
        <h3 className={`text-2xl font-semibold text-[#FED12D] mb-4 max-w-[300px] ${className}`}>
          {children}
        </h3>
      )
    case 'card':
      return (
        <h3 className={`text-2xl font-semibold text-[#650729] bg-[#F6DA98]  mb-4 ${className}`}>
          {children}
        </h3>
      )
    case 'paragraph':
      return (
        <h3 className={`text-2xl font-semibold text-[#FED12D] mb-4 ${className}`}>{children}</h3>
      )
    case 'program':
      return (
        <h3 className={`text-xl font-semibold text-[#FED12D] mb-4 ${className}`}>{children}</h3>
      )
  }
}
