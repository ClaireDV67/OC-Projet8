import { useState } from 'react'
import styles from './AddWork.module.css'
import { ref, set } from 'firebase/database'
import { database } from '../../firebase'
import { getStorage, uploadBytes, ref as refS } from 'firebase/storage'

function AddWork() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  
  const [title, setTitle] = useState('')
  const [imageMain, setImageMain] = useState(null)
  const [description, setDescription] = useState('')
  const [problems, setProblems] = useState('')
  const [technos, setTechnos] = useState([])
  const [skills, setSkills] = useState([])
  const [linkGH, setLinkGH] = useState('')
  const [link, setLink] = useState('')
  const [model, setModel] = useState(null)
  const [modelMob, setModelMob] = useState(null)

  const storage = getStorage()

  function handleSubmit(event) {
    event.preventDefault()
    const db = database
    const mainRef = refS(storage, `images/${title}/` + imageMain.name)
    const modelRef = refS(storage, `images/${title}/` + model.name)
    const modelMobRef = refS(storage, `images/${title}/` + modelMob.name)
    set(ref(db, 'works/' + title), {
      title: title,
      imageMainUrl: `gs://portfolio-9be1c.appspot.com/images/${title}/` + imageMain.name,
      description: description,
      problems: problems,
      technos: technos,
      skills: skills,
      linkGH: linkGH,
      link: link,
      modelUrl: `gs://portfolio-9be1c.appspot.com/images/${title}/` + model.name,
      modelMobUrl: `gs://portfolio-9be1c.appspot.com/images/${title}/` + modelMob.name
    })
      .then(() => {
        setIsFormSubmitted(true)
        document.getElementById('form').reset()
        setTitle('')
        setImageMain(null)
        setDescription('')
        setProblems('')
        setTechnos([])
        setSkills([])
        setLinkGH('')
        setLink('')
        setModel(null)
        setModelMob(null)
      })
      .catch((error) => {
        console.log(error)
      })
    uploadBytes(mainRef, imageMain)
      .then(() => {
        console.log('Fichier image uploadé')
      })
      .catch((error) => {
        console.log(error)
      })
    uploadBytes(modelRef, model)
      .then(() => {
        console.log('Fichier image uploadé')
      })
      .catch((error) => {
        console.log(error)
      })
    uploadBytes(modelMobRef, modelMob)
      .then(() => {
        console.log('Fichier image uploadé')
      })
      .catch((error) => {
        console.log(error)
      })
  }
    
  function handleTitleChange(event) {
    setIsFormSubmitted(false)
    setTitle(event.target.value)
  }

  function handleImageMainChange(event) {
    setIsFormSubmitted(false)
    setImageMain(event.target.files[0])
  }
    
  function handleDescriptionBlur(event) {
    setIsFormSubmitted(false)
    setDescription(event.target.value)
  }

  function handleProblemsChange(event) {
    setIsFormSubmitted(false)
    setProblems(event.target.value)
  }

  function handleTechnosChange(event) {
    setIsFormSubmitted(false)
    const index = parseInt(event.target.dataset.index)
    const value = event.target.value
    const updatedTechnos = [...technos]
    updatedTechnos[index] = value
    setTechnos(updatedTechnos)
  }

  function handleSkillsChange(event) {
    setIsFormSubmitted(false)
    const index = parseInt(event.target.dataset.index)
    const value = event.target.value
    const updatedSkills = [...skills]
    updatedSkills[index] = value
    setSkills(updatedSkills)
  }

  function handlelinkGHChange(event) {
    setIsFormSubmitted(false)
    setLinkGH(event.target.value)
  }

  function handlelinkChange(event) {
    setIsFormSubmitted(false)
    setLink(event.target.value)
  }

  function handleModelChange(event) {
    setIsFormSubmitted(false)
    setModel(event.target.files[0])
  }

  function handleModelMobChange(event) {
    setIsFormSubmitted(false)
    setModelMob(event.target.files[0])
  }

  return (
    <main role='main' className={styles.main}>
       <form onSubmit={handleSubmit} id='form'>
        <div>
          <label htmlFor='title'>Titre</label>
          <input type='text' id='title' onBlur={handleTitleChange} required />
        </div>
        <div>
          <label htmlFor='imageMain'>Image principale</label>
          <input type='file' id='imageMain' onBlur={handleImageMainChange} required />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <textarea id='description' onBlur={handleDescriptionBlur} required />
        </div>
        <div>
          <label htmlFor='problems'>Problèmes rencontrés</label>
          <textarea id='problems' onBlur={handleProblemsChange} />
        </div>
        <div>
          <label htmlFor='technos technos1 technos2 technos3 technos4 technos5'>Technologies utilisées</label>
          <input type='text' id='technos' data-index='0' onBlur={handleTechnosChange} required />
          <input type='text' id='technos1' data-index='1' onBlur={handleTechnosChange} />
          <input type='text' id='technos2' data-index='2' onBlur={handleTechnosChange} />
          <input type='text' id='technos3' data-index='3' onBlur={handleTechnosChange} />
          <input type='text' id='technos4' data-index='4' onBlur={handleTechnosChange} />
          <input type='text' id='technos5' data-index='5' onBlur={handleTechnosChange} />
        </div>
        <div>
          <label htmlFor='skills skills1 skills2 skills3 skills4 skills5'>Compétences</label>
          <input type='text' id='skills' data-index='0' onBlur={handleSkillsChange} required />
          <input type='text' id='skills1' data-index='1' onBlur={handleSkillsChange} />
          <input type='text' id='skills2' data-index='2' onBlur={handleSkillsChange} />
          <input type='text' id='skills3' data-index='3' onBlur={handleSkillsChange} />
          <input type='text' id='skills4' data-index='4' onBlur={handleSkillsChange} />
          <input type='text' id='skills5' data-index='5' onBlur={handleSkillsChange} />
        </div>
        <div>
          <label htmlFor='linkGH'>Lien Github</label>
          <input type='text' id='linkGH' onBlur={handlelinkGHChange} required />
        </div>
        <div>
          <label htmlFor='link'>Lien</label>
          <input type='text' id='link' onBlur={handlelinkChange} />
        </div>
        <div>
          <label htmlFor='model'>Maquette</label>
          <input type='file' id='model' onBlur={handleModelChange} required />
        </div>
        <div>
          <label htmlFor='modelMob'>Maquette mobile</label>
          <input type='file' id='modelMob' onBlur={handleModelMobChange} />
        </div>
        <input type='submit' id='buttonSubmit' value='Ajouter le travail'/>
        {isFormSubmitted && <p>Envoyé !</p>}
      </form>
    </main>
  )
}

export default AddWork
