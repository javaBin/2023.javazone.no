import React, { ReactNode } from 'react'

type LinkProps = {
  /**
   * Type of link, footer or header
   */
  type?: 'footer' | 'normal'
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
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const Link = ({ type = 'normal', href, className, children, ...props }: LinkProps) => {
  switch (type) {
    case 'normal':
      return (
        <a className={`text-[#5AD0A6] ${className}`} href={href} {...props}>
          {children}
        </a>
      )
    case 'footer':
      return (
        <a className={`text-[#FED12D] hover:text-[#FF8525] ${className}`} href={href} {...props}>
          {children}
        </a>
      )
  }
}
