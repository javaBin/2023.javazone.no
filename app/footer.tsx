import styles from "./footer.module.css"

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
    <a className={`link is-info ${styles.link}`} href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  )
}

const createFooterLinks = () =>
  footerData.map(({ url, text }) => (
    <p key={url} className="level-item has-text-centered">
      <FooterLink href={url} text={text} />
    </p>
  ))

export function Footer() {
  const footerLinks = createFooterLinks()
  return (
    <footer className="footer">
      <nav className="level">{footerLinks}</nav>
    </footer>
  )
}
