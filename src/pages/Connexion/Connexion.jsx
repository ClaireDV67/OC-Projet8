import { useState } from 'react'
import styles from './Connexion.module.css'
import { database } from '../../firebase'
import Block from '../../components/Block/Block'
import { useNavigate } from 'react-router-dom'
import { child, get, ref } from 'firebase/database';

function Connexion() {
const navigate = useNavigate()

  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const [name, setName] = useState('')
  const [mdp, setMdp] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const dbRef = ref(database)
    const nameRef = child(dbRef, 'users', name)
    const mdpRef = child(dbRef, 'users', mdp)

    get(nameRef)
      .then((snapshot) => {
        if (!snapshot.exists()) {
          alert('Nom/MDP erroné')
        } else {
          console.log(snapshot)
          get(mdpRef)
            .then((snapshot) => {
                if (!snapshot.exists()) {
                    alert('Nom/MDP erroné')
                } else {
                setIsFormSubmitted(true)
                // navigate('/admincdv28071992addwork')
                }
            })
            .catch((error) => {
              console.error(error)
              alert('Une erreur est survenue lors de la vérification des informations')
            })
    }})
      .catch((error) => {
        console.error(error)
        alert('Une erreur est survenue lors de la vérification des informations')
      })
  }

  function handleNameChange(event) {
    setIsFormSubmitted(false)
    setName(event.target.value)
  }

  function handleMdpChange(event) {
    setIsFormSubmitted(false)
    setMdp(event.target.value)
  }

  return (
    <main role='main'>
        <Block>
            <form onSubmit={handleSubmit} id='form' className={styles.form}>
            <div>
                <label htmlFor='name'>Nom</label>
                <input type='text' id='name' onBlur={handleNameChange} required />
            </div>
            <div>
                <label htmlFor='mdp'>Mot de Passe</label>
                <input type='password' id='mdp' onBlur={handleMdpChange} required />
            </div>
            <input type='submit' id='buttonSubmit' value='Se connecter'/>
            {isFormSubmitted && <p>Connecté !</p>}
        </form>
    </Block>
    </main>
  )
}
export default Connexion