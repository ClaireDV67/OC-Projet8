import { useState } from 'react'
import styles from './Connexion.module.css'
import { database } from '../../firebase'
import Block from '../../components/Block/Block'
import { useNavigate } from 'react-router-dom'
import { child, get, ref } from 'firebase/database'
import { getTokenKey } from '../../utils/functions/getTokenKey'
import jwt from 'jsonwebtoken'

function Connexion() {
const navigate = useNavigate()

  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const [name, setName] = useState('')
  const [mdp, setMdp] = useState('')

  const { setAuthCookie } = useAuth()

  function handleSubmit(event) {
    const dbRef = ref(database)
    event.preventDefault()
    console.log(`users/` + name)
    const nameRef = child(dbRef, `users/` + name)
    get(nameRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          if (snapshot.val() === mdp) {
            console.log('Connexion réussie')
            setAuthCookie({ name }, { path: '/' })
            navigate('/admincdv28071992addwork')
          } else {
            console.log('Erreur dans le MDP/Nom')
          }
        } else {
          console.log('Erreur dans le MDP/Nom')
        }
      })
      .catch((error) => {
        console.log(error)
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
              <div>
                <input type='submit' id='buttonSubmit' value='Se connecter'/>
              {isFormSubmitted && <p>Connecté !</p>}
              </div>
          </form>
    </Block>
    </main>
  )
}
export default Connexion