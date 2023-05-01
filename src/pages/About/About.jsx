import Block from "../../components/Block/Block"
import styles from "./About.module.css"

function About() {
  return (
    <main role="main">
      <div className={styles.blockFlex}>
        <section className={styles.block1}>
          <Block>
            <div className={styles.contentBlock}>
              <p>J'ai, aujourd'hui, un peu plus de la trentaine, et ai vécu toute mon enfance partagée entre l'Alsace et la Bretagne. Je vis maintenant en région parisienne, dans le Val d'Oise.</p>
              <p>Après avoir obtenu mon <strong>baccalauréat scientifique</strong>, je me suis dirigée vers les <strong>Mathématiques</strong>, ce qui me semblait logique et naturel.</p>
              <p>Une fois un bac +2 dans cette matière validé, j'ai réalisé que j'avais besoin d'espace. Étant sportive et aimant la nature, j'ai alors totalement changé de voie, et ai choisi de travailler avec les chiens.</p>
              <p>Fin 2021, j'ai ressenti l'envie de renouer avec mon premier amour, l'<strong>informatique</strong>. Quelques recherches sur internet m'ont amenée à m'intéresser aux langages HTML et CSS, puis au JavaScript.</p>
              <p>Une fois éprise de cette discipline, il m'était impossible de m'arrêter là. J'ai alors pris la décision de débuter une <strong>formation</strong> diplômante, afin d'en apprendre plus sur le métier de <strong>développeur web</strong>.</p>
              <p>Aujourd'hui, je suis en fin de formation chez OpenClassrooms. Mon objectif est d'allier mon emploi actuel, qui me satisfait pleinement, et ma passion pour le code, en <strong>freelance</strong>.</p>
            </div>
          </Block>
        </section>
        <section className={styles.block2}>
            <div className={styles.contentBlock}>
              <img className={styles.photoCDV} src={"/images/devito.png"} alt="Claire De Vito" title="Claire De Vito" />
            </div>
        </section>
        <section className={styles.block3}>
          <Block>
            <div className={styles.contentBlock}>
              <p>J'ai réalisé plusieurs projets avec OpenClassrooms, accessibles via la page d'Accueil (avec leurs liens GitHub respectifs). J'ai également été reçue en soutenance par des évaluateurs de l'organisme pour chacun d'entre eux.</p>
              <p>En plus des <strong>compétences</strong> acquises (mentionnées sur la page principale), j'ai aussi appris à devenir <strong>autonome</strong>, et à chercher les réponses à mes questions. J'ai réalisé que j'étais d'un caractère à la fois patient et tenace, face aux différents "bugs" que j'ai pu rencontrer, parfois résolus après de nombreuses heures de travail.</p>
              <p>Je suis ravie de m'être lancée dans cette aventure, car j'ai pris beaucoup de <strong>plaisir</strong> à participer à cette formation. Je souhaite poursuivre dans cette direction.</p>
            </div>
          </Block>
        </section>
      </div>
      <span className={styles.iconeContainer}><a href="#top" className={styles.icone}><i className="fa-solid fa-angles-up fa-2xl"></i></a></span>
    </main>
  )
}

export default About
