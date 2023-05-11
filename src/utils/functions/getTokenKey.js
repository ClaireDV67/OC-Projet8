import { child, get, ref } from "firebase/database"
import { database } from "../../firebase"

export function getTokenKey() {
  const dbRef = ref(database)
  get(child(dbRef, `token`))
    .then((snapshot) => {
      const token = snapshot.val()
      console.log(token)
      return token
    })
    .catch((error) => {
      console.error(error);
    })
}
