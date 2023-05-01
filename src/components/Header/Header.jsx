import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"
import { useState } from "react"

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [animation, setAnimation] = useState(0)

  function toggleMenu() {
    if (isOpen === true) {
      if (animation === 0) {
        setAnimation(1)
      } else {
        setAnimation(0)
      }
      setTimeout(() => {setIsOpen(false)}, 350)
    } else {
      setIsOpen(true)
      if (animation === 0) {
        setAnimation(1)
      } else {
        setAnimation(0)
      }
    }
    
  }

  return (
    <header id="top" role="banner" className={styles.header}>
      <h1 className={styles.title}>Claire De Vito</h1>
      <nav className={styles.nav} role="navigation" aria-label="main navigation">
        <button onClick={toggleMenu} animation={animation} className={styles.iconeNav}>
          <i className="fa-solid fa-bars fa-xl"></i>
        </button>
        <ul animation={animation} className={`${styles.ul} ${isOpen ? "" : styles.hideMenu}`}>
          <li className={styles.li}>
            <NavLink onClick={toggleMenu} className={styles.a} to="/">Accueil</NavLink>
          </li>
          <li className={styles.li}>
            <NavLink onClick={toggleMenu} className={styles.a} to="/about">À Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
