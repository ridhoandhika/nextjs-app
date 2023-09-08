import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore"
import app from "./init"
import bcrypt from "bcrypt"
import { error } from "console"

const firestore = getFirestore(app)

export async function retrieveData(collectionName: string){
    const snapshot = await getDocs(collection(firestore, collectionName))

    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    })) 
    return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
    const snapshot = await getDoc(doc(firestore, collectionName, id))

    const data = snapshot.data()

    return data
}

export async function signUp(userData: {
    email: string, 
    fullname: string, 
    password: string, 
    role?: string // tanda ? untuk bersifat opsional
}, callback: Function){
    const q = query(
        collection(firestore, "users"), 
        where("email", "==", userData.email)
    );
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))
    if (data.length > 0) return callback({ status: false, message: "email already exists"})

    userData.password = await bcrypt.hash(userData.password, 10)
    userData.role = "member"
    await addDoc(collection(firestore, "users"), userData).then(() => {
        callback({ 
            status: true, 
            message: "Register has been successfully"
        })
    }).catch((error) => {
        callback({
            status: false,
            message: error
        })
    })
    return 
    
}

export async function signIn(userData: {email:string}){
    const q = query(
        collection(firestore, "users"), 
        where("email", "==", userData.email)
    );

    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))
    console.log(data);
    

    if(data) return data[0]

    return null
}