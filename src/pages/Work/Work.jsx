import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import Block from "../../components/Block/Block"
import works from "../../datas/works.json"
import styles from "./Work.module.css"

function Work() {
  // Récupération de l'id dans les paramètres de l"URL
  const { id } = useParams()
  const navigate = useNavigate()
  // Vérification de l'existence de données et redirection si ce n'est pas le cas
  const work = works.find(work => work.id === id)
  useEffect(() => {
    if (work === undefined) {
      navigate("/error")
    }
  }, [])
  
  return (
    work && (
      <main role="main">
        <Block>
          <h2 className={styles.title}>{work.title}</h2>
          <div className={styles.workContainer}>
            <img className={styles.mainPicture} src={work.picture} alt={work.title} title={work.title} />
            <div className={styles.descriptionContainer}>
              <p className={styles.description}>{work.description}</p>
              <a className={styles.link} href={work.link} rel='noreferrer' target="_blank"><i className="fa-brands fa-github fa-7x"></i></a>
            </div>
            <img className={styles.pictureModel} src={work.model} alt={`Maquette de ` + work.title} title={`Maquette de ` + work.title} />
          </div>
        </Block>
        <span className={styles.iconeContainer}><a href="#top" className={styles.icone}><i className="fa-solid fa-angles-up fa-2xl"></i></a></span>
      </main>
    )
  )
}

export default Work
