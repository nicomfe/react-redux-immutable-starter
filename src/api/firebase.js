import * as firebase from 'firebase/firebase-browser'
import { firebaseConfig } from '../config/firebase'

class FirebaseApi {
  static initAuth() {
    firebase.initializeApp(firebaseConfig)
    return new Promise((resolve, reject) => {
      const unsub = firebase.auth().onAuthStateChanged(
        user => {
          unsub()
          resolve(user)
        },
        error => reject(error)
      )
    })
  }

  static signIn(user) {
    return firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  }

  static authSignOut() {
    return firebase.auth().signOut()
  }
}

export default FirebaseApi
