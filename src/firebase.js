// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCJtu2oup1OZxxEN3q42rz7_uWvXY8_wxk',
  authDomain: 'portfolio-9be1c.firebaseapp.com',
  databaseURL: 'https://portfolio-9be1c-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'portfolio-9be1c',
  storageBucket: 'gs://portfolio-9be1c.appspot.com',
  messagingSenderId: '342215807434',
  appId: '1:342215807434:web:0406ba62a99012562e3f33',
  measurementId: 'G-VVP28823XS'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const analytics = getAnalytics(app)

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app)

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app)