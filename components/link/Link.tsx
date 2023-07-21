import React, { ReactNode } from 'react'

interface LinkProps {
  /**
   * Link href
   */
  href: string
  /**
   * Optional class name
   */
  className?: string
  /**
   * link content
   */
  children: ReactNode
}

export const Link = ({ href, className, children }: LinkProps) => {
  return (
    <a className={`text-[#5AD0A6] ${className}`} href={href}>
      {children}
    </a>
  )
}
