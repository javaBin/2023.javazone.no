'use client'

import { ReactNode, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HeaderLink = ({
  children,
  href,
  onClick,
}: {
  children?: ReactNode
  href: string
  onClick?: () => void
}) => (
  <Link className={`navbar-item`} style={{ fontWeight: 'bold' }} href={href} onClick={onClick}>
    {children}
  </Link>
)

const paths = [
  { text: 'Partners', href: '/partners' },
  { text: 'Speakers', href: '/speakers' },
  { text: 'Program', href: '/program' },
  { text: 'Workshops', href: '/workshops' },
  { text: 'Tickets', href: '/tickets' },
  { text: 'Frivillig', href: '/volunteers' },
  { text: 'JourneyZone', href: 'speakers/journeyzone' },
  { text: "This year's theme", href: '/theme' },
  { text: 'About us', href: '/about' },
]

export function Header() {
  const [burger, setBurger] = useState(false)

  const handleLinkClick = () => setBurger(false)

  return (
    <nav className={'navbar is-fixed-top'} role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <Image src="/svg/JZ2023-Hero.svg" height={48} width={48} alt="logo" />
        </a>

        <a
          role="button"
          onClick={() => setBurger(!burger)}
          className={`navbar-burger ${burger && 'is-active'}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={burger ? 'navbar-menu is-active' : 'navbar-menu'}>
        <div className="navbar-start">
          {paths.map((path) => (
            <HeaderLink href={path.href} key={path.href} onClick={handleLinkClick}>
              {path.text}
            </HeaderLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
