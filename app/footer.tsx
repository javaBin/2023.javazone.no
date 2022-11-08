import styles from './footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://java.no" target="_blank" rel="noopener noreferrer">
        Laget av JavaBin
      </a>
      <a href="https://java.no/principles" target="_blank" rel="noopener noreferrer">
        Code of Conduct
      </a>
      <a href="mailto:javazone@java.no">Mail</a>
      <a href="https://facebook.com/javazoneconference" target="_blank" rel="noopener noreferrer">
        Facebook
      </a>
      <a href="https://twitter.com/javazone" target="_blank" rel="noopener noreferrer">
        Twitter
      </a>
      <a href="https://www.linkedin.com/company/javazone" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </footer>
  )
}
