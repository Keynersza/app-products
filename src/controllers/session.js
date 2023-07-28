
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import firebaseApp from '../Firebase/firebase'
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const collectionUser = 'users'
const Session = () => {
  const register = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
          console.log('res', res)
          let idUser = res.user.uid
          let resDoc = await setDoc(doc(db, collectionUser, idUser), {
            name: '',
            lastName: '',
            email: res.user.email,
            photoUrl: '',
            number: '',
          })
          console.log('res', resDoc)
        })
      return { status: '200' }

    } catch (error) {
      let errorCode;
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorCode = 'Correo ya registrado'
          return errorCode
      }
      return errorCode
    }
  }

  const singIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
          localStorage.setItem('idToke', res.user.accessToken)
        })
      return { status: '200' }

    } catch (error) {
      console.log('error', error)
      let errorCode;
      switch (error.code) {
        case 'auth/user-not-found':
          errorCode = 'Este correo no existe'
          return errorCode
        case 'auth/wrong-password':
          errorCode = 'Contrasena Invalida'
          return errorCode
        case 'auth/too-many-requests':
          errorCode = 'Se bloqueo el acceso temporalmente'
          return errorCode
      }
      return errorCode
    }

  }
  return { register, singIn }

}
export default Session
