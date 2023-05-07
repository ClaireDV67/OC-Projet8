import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Block from '../../components/Block/Block'
import works from '../../datas/works.json'
import { useScrollToTop } from '../../utils/functions/scrollToTop'
import styles from './Work.module.css'

function Work() {
  // Récupération de l'id dans les paramètres de l'URL
  const { id } = useParams()
  const navigate = useNavigate()
  // Vérification de l'existence de données et redirection si ce n'est pas le cas
  const work = works.find(work => work.id === id)
  useEffect(() => {
    if (work === undefined) {
      navigate('/error')
    }
  }, [work])

  // Définir un état pour afficher ou masquer le bouton 'retour en haut de page'
  const [isVisible, scrollToTop] = useScrollToTop()

  // Création des listes de compétences et de technologies à partir des données du projet
  const skills = work.skills.map((skill, index) => <li key={work.id + index}>{skill}</li>)
  const technos = work.technos.map(techno => <li key={work.id + techno}>{techno}</li>)

  // Mettre à jour le titre de la page
  useEffect(() => {
    document.title = work && `Claire De Vito - Projet ${work.title}`
  }, [])
  
  return (
    work && (
      <main role='main'>
        <Block>
          <h2 className={styles.title}>{work.title}</h2>
          <section aria-label={`Projet ${work.title}`} className={styles.workContainer}>
            <img className={styles.mainPicture} src={work.picture} alt={work.title} title={work.title} />
            <h3 className='visually-hidden'>Description du projet</h3>
            <p className={styles.p}>{work.description}</p>
            {work.problems && <div><h3 className='visually-hidden'>Problématiques rencontrées</h3><p className={styles.p}>{work.problems}</p></div>}
            <div className={styles.flexContainer}>
              <div className={styles.widthContainer}>
                <ul className={styles.list}>
                  <h3 className={styles.h3}>Compétences évaluées sur ce projet :</h3>
                  {skills}
                </ul>
                <ul className={styles.list}>
                  <h3 className={styles.h3}>Technologies utilisées :</h3>
                  {technos}
                </ul>
              </div>
              <div className={styles.linkContainer}>
                <a className={styles.link} href={work.link} rel='noreferrer' target='_blank'>
                  <i className='fa-brands fa-github'></i>
                  <span className='visually-hidden'>Code sur GitHub</span>
                </a>
                {work.linkPage && <a className={styles.link} href={work.linkPage} rel='noreferrer' target='_blank'>
                  <i className='fa-solid fa-link'></i>
                  <span className='visually-hidden'>Projet en ligne sur GitHub Pages</span>
                </a>}
              </div>
            </div>
            <h3 className='visually-hidden'>Maquette :</h3>
            <picture>
              <source media='(max-width: 576px)' srcSet={work.modelMob} />
              <source media='(min-width: 576px)' srcSet={work.modelDesktop} />
              <img className={styles.pictureModel} src={work.modelDesktop} alt={`Maquette de ` + work.title} title={`Maquette de ` + work.title} />
						</picture>
          </section>
        </Block>
        {isVisible && (
          <span className='iconeBackContainer'>
            <button onClick={scrollToTop} className='iconeBack'>
              <i className='fa-solid fa-circle-chevron-up fa-4x'></i>
              <span className='visually-hidden'>Retour en haut de page</span>
            </button>
          </span>
        )}
      </main>
    )
  )
}

export default Work
