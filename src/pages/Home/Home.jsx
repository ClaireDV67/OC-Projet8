import styles from "./Home.module.css"
import Block from "../../components/Block/Block"
import Collapse from "../../components/Collapse/Collapse"
import { Carousel } from "antd"
import works from "../../datas/works.json"
import ProgressBar from "../../components/ProgressBar/ProgressBar"
import { NavLink } from "react-router-dom"

function Home() {
  const worksPictures = () => works.map(work => 
    <div key={`${work.title + work.id}`}>
      <h3 className="visually-hidden">{work.title}</h3>
      <NavLink to={`/work/${work.id}`}>
        <img className={styles.carouselPicture} src={work.picture} alt={work.title} title={work.title} />
      </NavLink>
    </div>
  )

  return (
    <main role="main">
      <section className={styles.presentationContainer}>
        <h2 className="visually-hidden">Présentation</h2>
        <Block>
          <p>Bonjour, je suis <strong>Claire De Vito</strong> !</p>
          <p>Je termine actuellement ma formation de <strong>Développeur Web</strong> chez OpenClassrooms.</p>
          <p>Je souhaite par la suite travailler en <strong>freelance</strong>.</p>
        </Block>
          <div className={styles.decoration}>
            <img className={styles.profilePicture} src={"/images/avatar.png"} alt="Claire DE VITO" title="Photo de profil" />
          </div>
      </section>
      <section className={styles.collapseContainer}>
        <h2 className="visually-hidden">Compétences</h2>
        <Collapse
          titleCollapse={<div><i className={styles.icone + " fa-solid fa-code"}></i>Front-end</div>}
          textCollapse={
            <ul className={styles.list}>
              <li>HTML5<ProgressBar percentage="80" /></li>
              <li>CSS3<ProgressBar percentage="80" /></li>
              <li>JavaScript<ProgressBar percentage="60" /></li>
              <li>React<ProgressBar percentage="40" /></li>
            </ul>
          }
        />
        <Collapse
          titleCollapse={<div><i className={styles.icone + " fa-solid fa-server"}></i>Back-end</div>}
          textCollapse={
            <ul className={styles.list}>
              <li>NodeJS<ProgressBar percentage="40" /></li>
              <li>Express<ProgressBar percentage="40" /></li>
              <li>Postman<ProgressBar percentage="60" /></li>
              <li>MongoDB<ProgressBar percentage="60" /></li>
            </ul>
          }
        />
        <Collapse
          titleCollapse={<div><i className={styles.icone + " fa-solid fa-list"}></i>Gestion de projet</div>}
          textCollapse={
            <ul className={styles.list}>
              <li>Trello</li>
              <li>Git & Github</li>
              <li>Wakelet</li>
              <li>Feedly</li>
            </ul>
          }
        />
        <Collapse
          titleCollapse={<div><i className={styles.icone + " fa-solid fa-bug"}></i>Optimisation et debug</div>}
          textCollapse={
            <ul className={styles.list}>
              <li>Chrome DevTools</li>
              <li>LightHouse</li>
              <li>Wave</li>
              <li>HeadingsMap</li>
              <li>Microdata avec Schema.org</li>
            </ul>
          }
        />
      </section>
      <section className={styles.worksContainer}>
        <Block>
          <h2 className={styles.title}><i className={styles.icone + " fa-solid fa-briefcase"}></i>Mes projets OpenClassrooms réalisés</h2>
          <div className={styles.carouselContainer}>
            <Carousel autoplay>
              {worksPictures()}
            </Carousel>
          </div>
        </Block>
      </section>
      <span className={styles.iconeContainer}><a href="#top" className={styles.icone}><i className="fa-solid fa-angles-up fa-2xl"></i></a></span>
    </main>
  )
}

export default Home
