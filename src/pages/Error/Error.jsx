import { Link } from "react-router-dom"
import styles from "./Error.module.css"
import Block from "../../components/Block/Block"

function Error() {
  return (
    <main role="main" className={styles.main}>
      <Block>
        <h2 className={styles.error}>404</h2>
        <div className={styles.text}>Oups ! La page que vous demandez n'existe pas.</div>
        <i className={styles.icone + " fa-solid fa-arrow-right"}></i><Link className={styles.link} to="/">Retourner sur la page d'accueil</Link>
      </Block>
    </main>
  )
}

export default Error
