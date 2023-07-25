import React from 'react'
import { Link } from '@/components/link/Link'

interface FooterLinkProps {
  href: string
  text: string
}

const footerData = [
  {
    url: 'https://java.no',
    text: 'About javaBin',
  },
  {
    url: 'https://java.no/principles',
    text: 'Code of Conduct',
  },
  {
    url: 'mailto:javazone@java.no',
    text: 'Mail',
  },
  {
    url: 'https://facebook.com/javazoneconference',
    text: 'Facebook',
  },
  {
    url: 'https://twitter.com/javazone',
    text: 'Twitter',
  },
  {
    url: 'https://www.linkedin.com/company/javazone',
    text: 'LinkedIn',
  },
]

const FooterLink = ({ href, text }: FooterLinkProps) => {
  return (
    <Link type="footer" href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </Link>
  )
}

const createFooterLinks = () =>
  footerData.map(({ url, text }) => (
    <p key={url} className="text-center mt-3">
      <FooterLink href={url} text={text} />
    </p>
  ))

export function Footer() {
  const footerLinks = createFooterLinks()
  return <div className="bg-[#033E4F] flex justify-evenly py-4 max-md:flex-col">{footerLinks}</div>
}
