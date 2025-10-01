import todosApp from './Connect'
import { getFirestore, collection , query , getDocs , orderBy , limit , where , addDoc , doc , updateDoc , deleteDoc } from 'firebase/firestore'

const db = getFirestore(todosApp)
const todosCollection = collection(db, 'todos')
const userCollection = collection(db, 'users')

