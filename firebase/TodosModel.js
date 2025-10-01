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

export const getUserByEmail = async(email,success , unsuccess)=>{
    console.log("email: "+email) 
    let userRefID
    try{
        let qry = query(userCollection,where("email","==",email))
        let querySnapshot = await getDocs(qry)
        querySnapshot.forEach((doc)=>{
            
            userRefID = doc.ref
        })
        console.log("userRefID: "+userRefID)
        qry = query(todosCollection,where("user_id","==",userRefID))
        querySnapshot = await getDocs(qry)
        querySnapshot.forEach((doc)=>{
            
            success(doc)
        })
    }catch(e){
        unsuccess(e)
    }   
}

