import todosApp from './Connect'
import { getFirestore, collection , query , getDocs , orderBy , limit , where , addDoc , doc , updateDoc , deleteDoc } from 'firebase/firestore'

const db = getFirestore(todosApp)
const todosCollection = collection(db, 'todos')
const userCollection = collection(db, 'users')

export const getAllTodos = async(success , unsuccess)=>{
    console.log("getAllTodos activated")
    
    try{
        const qry = query(todosCollection)
        const querySnapshot = await getDocs(qry)

        querySnapshot.forEach((doc)=>{
            console.log(`${doc.id} => task: ${doc.data().task}`)
            success(doc)
        })
    }catch(e){
        unsuccess(e)
    }
    
}

