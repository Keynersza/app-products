import { addDoc, collection, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import firebaseApp from '../Firebase/firebase'
const db = getFirestore(firebaseApp)