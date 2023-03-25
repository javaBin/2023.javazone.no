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
          <HeaderLink onClick={handleLinkClick} href="/partners">
            Partners
          </HeaderLink>
          <HeaderLink onClick={handleLinkClick} href="/speakers">
            Speakers
          </HeaderLink>
          <HeaderLink onClick={handleLinkClick} href="/tickets">
            Tickets
          </HeaderLink>
          <HeaderLink onClick={handleLinkClick} href="/volunteers">
            Frivillig
          </HeaderLink>
          <HeaderLink onClick={handleLinkClick} href="/about">
            About us
          </HeaderLink>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <strong>
                <Link className="button is-dark-blue" href="/speakers" onClick={handleLinkClick}>
                  Submit your talk!
                </Link>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
