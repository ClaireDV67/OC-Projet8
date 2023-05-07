import { useState } from 'react'
import styles from './AddWork.module.css'
import { ref, set } from 'firebase/database'
import { database } from '../../firebase'

function AddWork() {
  
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const db = database
    set(ref(db, 'works/' + title + Date.now()), {
    title: title,
    description: description
    })
  }
    
  function handleTitleChange(event) {
    setTitle(event.target.value)
  }
    
  function handleDescriptionChange(event) {
    setDescription(event.target.value)
  }

  return (
    <main role='main' className={styles.main}>
       <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Titre</label>
          <input type='text' id='title' value={title} onChange={handleTitleChange} required />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <textarea id='description' value={description} onChange={handleDescriptionChange} required />
        </div>
        <button type='submit'>Ajouter le travail</button>
      </form>
    </main>
  )
}

export default AddWork
