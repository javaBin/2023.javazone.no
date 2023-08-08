import React, { ReactNode } from 'react'

type TitleProps = {
  /**
   * Type of header: title, subtitle, or column
   */
  type?: 'big-title' | 'title' | 'subtitle' | 'column' | 'card' | 'paragraph' | 'program'

  /**
   * Optional class name
   */
  className?: string
  /**
   * Title content
   */
  children: ReactNode
} & React.HTMLAttributes<HTMLHeadingElement>

/**
 * Primary UI component for user interaction
 */
export const Title = ({ type = 'title', className = '', children, ...props }: TitleProps) => {
  switch (type) {
    case 'big-title':
      return (
        <h1 {...props} className={`text-4xl font-semibold text-big-text-color mb-4 ${className}`}>
          {children}
        </h1>
      )
    case 'title':
      return (
        <h1
          {...props}
          className={`text-3xl leading-9 font-semibold text-big-text-color mb-4 ${className}`}
        >
          {children}
        </h1>
      )
    case 'subtitle':
      return (
        <h1
          {...props}
          className={`text-2xl leading-9 font-semibold text-big-text-color mb-4 ${className}`}
        >
          {children}
        </h1>
      )
    case 'column':
      return (
        <h1
          {...props}
          className={`text-2xl font-semibold text-big-text-color mb-4 max-w-[300px] ${className}`}
        >
          {children}
        </h1>
      )
    case 'card':
      return (
        <h1
          {...props}
          className={`text-2xl font-semibold text-red-text-color bg-normal-text-color mb-4 ${className}`}
        >
          {children}
        </h1>
      )
    case 'paragraph':
      return (
        <h1 {...props} className={`text-2xl font-semibold text-big-text-color mb-4 ${className}`}>
          {children}
        </h1>
      )
    case 'program':
      return (
        <h1 {...props} className={`text-xl font-semibold text-big-text-color mb-4 ${className}`}>
          {children}
        </h1>
      )
  }
}
