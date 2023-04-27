import { Link } from "react-router-dom"
import styles from "./Header.module.css"

function Header() {
  return (
    <header role="banner" className={styles.header}>
      <h1>Claire DE VITO</h1>
      <nav role="navigation" aria-label="main navigation">
        <ul className={styles.ul}>
          <li className={styles.li}><Link className={styles.a} to="/">Accueil</Link></li>
          <li className={styles.li}><Link className={styles.a} to="/about">À Propos</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
