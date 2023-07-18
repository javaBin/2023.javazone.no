import React from 'react'

interface TitleProps {
  /**
   * Type of title, H1, H2 or H3
   */
  type?: 'h1' | 'h2' | 'h3'
  /**
   * Title content
   */
  text: string
}

/**
 * Primary UI component for user interaction
 */
export const Title = ({ type = 'h1', text }: TitleProps) => {
  switch (type) {
    case 'h1':
      return <h1 className="text-4xl font-semibold text-[#FED12D] mb-2">{text}</h1>
    case 'h2':
      return <h2 className="text-2xl font-semibold text-[#FED12D] mb-2">{text}</h2>
    case 'h3':
      return <h3 className="text-xl text-[#FED12D] font-semibold mb-2">{text}</h3>
  }
}
