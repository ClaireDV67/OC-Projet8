import styles from "./Footer.module.css"

function Footer() {
  return (
    <footer role="contentinfo" className={styles.footer}>
      <div className={styles.contact}>
        <span>Claire DE VITO</span>
        <span className={styles.italic}>Développeuse Web Junior</span>
      </div>
      <div className={styles.links}>
        <a href="mailto: claire.devito@gmail.com" className={styles.socialNetworks}><i className="fa-regular fa-envelope fa-2xl"></i></a>
        <a href="https://github.com/ClaireDV67" rel='noreferrer' target="_blank" className={styles.socialNetworks}><i className="fa-brands fa-github fa-2xl"></i></a>
        <a href="https://www.linkedin.com/in/claire-dv/" rel='noreferrer' target="_blank" className={styles.socialNetworks}><i className="fa-brands fa-linkedin fa-2xl"></i></a>
        <a href="https://twitter.com/ClaireVito" rel='noreferrer' target="_blank" className={styles.socialNetworks}><i className="fa-brands fa-twitter fa-2xl"></i></a>
      </div>
    </footer>
  )
}

export default Footer
