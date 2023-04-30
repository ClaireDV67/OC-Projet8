import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"

function Header() {
  return (
    <header role="banner" className={styles.header}>
      <h1 className={styles.title}>Claire De Vito</h1>
      <nav className={styles.nav} role="navigation" aria-label="main navigation">
        <ul className={styles.ul}>
          <li className={styles.li}><NavLink className={styles.a} to="/">Accueil</NavLink></li>
          <li className={styles.li}><NavLink className={styles.a} to="/about">À Propos</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
