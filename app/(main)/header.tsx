'use client'

import React, { ReactNode, useState } from 'react'
import Image from 'next/image'
import { Link } from '@/components/link/Link'

const HeaderLink = ({
  children,
  href,
  onClick,
}: {
  children?: ReactNode
  href: string
  onClick?: () => void
}) => (
  <Link type="header" href={href} onClick={onClick}>
    {children}
  </Link>
)

const Line = ({ className }: { className: string }) => (
  <>
    <span
      className={`block w-[16px] h-[1px] bg-big-text-color absolute left-[calc(50%-8px)] duration-100 ease-out origin-center transition-[background-color] transition-[opacity] transition-[transform] ${className}`}
      aria-hidden="true"
    />
  </>
)
type BurgerProps = {
  active: boolean
  setActive: (b: boolean) => void
}
const paths = [
  { text: 'Info', href: '/info' },
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

const Burger = ({ active, setActive }: BurgerProps) => (
  <a
    role="button"
    onClick={() => setActive(!active)}
    className="bg-none border-none cursor-pointer block h-[3.25rem] w-[3.25rem] relative ml-auto hover:text-[#26A27E] hover:bg-[#033443] lg:hidden"
    aria-label="menu"
    aria-expanded="false"
  >
    <Line className={`top-[calc(50%-6px)] ${active ? 'translate-y-[5px] rotate-45' : ''}`} />
    <Line className={`top-[calc(50%-1px)] ${active ? 'hidden' : ''}`} />
    <Line className={`top-[calc(50%+4px)] ${active ? 'translate-y-[-5px] rotate-[-45deg]' : ''}`} />
  </a>
)

export function Header() {
  const [active, setActive] = useState(false)

  const handleLinkClick = () => setActive(false)

  return (
    <nav
      className="lg:flex lg:items-stretch top-0 left-0 right-0 fixed z-30 bg-dark-blue-background min-h[3.25rem]"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="flex items-stretch grow-0 shrink-0 min-h-[3.25rem]">
        <Link type="header" href="/">
          <Image src="/svg/JZ2023-Hero.svg" height={48} width={48} alt="logo" />
        </Link>

        <Burger active={active} setActive={setActive} />
      </div>

      <div className={`flex max-lg:flex-col ${active ? '' : 'max-lg:hidden'} `}>
        {paths.map((path) => (
          <HeaderLink href={path.href} key={path.href} onClick={handleLinkClick}>
            {path.text}
          </HeaderLink>
        ))}
      </div>
    </nav>
  )
}
