import React, { ReactNode } from 'react'

type LinkProps = {
  /**
   * Type of link, footer or header
   */
  type?: 'footer' | 'normal' | 'header' | 'button'
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

export const Link = ({ type = 'normal', href, className = '', children, ...props }: LinkProps) => {
  className = className || ''
  switch (type) {
    case 'normal':
      return (
        <a className={`text-link-color ${className}`} href={href} {...props}>
          {children}
        </a>
      )
    case 'footer':
      return (
        <a
          className={`text-big-text-color hover:text-hover-text-color ${className}`}
          rel="noreferrer noopener"
          href={href}
          {...props}
        >
          {children}
        </a>
      )
    case 'header':
      return (
        <a
          className={`text-big-text-color font-bold hover:text-hover-text-color hover:bg-[#033443] cursor-pointer flex items-center py-2 px-3 relative grow-0 shrink-0 ${className}`}
          href={href}
          {...props}
        >
          {children}
        </a>
      )
    case 'button':
      return (
        <a
          className={`border-[1px] rounded cursor-pointer text-red-text-color bg-normal-text-color border-transparent py-[calc(.5em-1px)] px-[1em] text-center whitespace-nowrap justify-center hover:text-hover-text-color ${className}`}
          href={href}
          {...props}
        >
          {children}
        </a>
      )
  }
}
