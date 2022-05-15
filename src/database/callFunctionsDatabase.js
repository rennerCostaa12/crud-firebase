import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./config";

//GET ALL DATA FROM DATABASE
export async function showData(param) {
    const querySnapshot = await getDocs(collection(db, "users"));
    param(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
}

//ADD USER IN DATABASE
export async function addData(funcaoUser, idadeUser, nomeUser) {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            funcao: funcaoUser,
            idade: idadeUser,
            nome: nomeUser
        });
        console.log("Document written with ID", docRef.id)
    }catch (e){
        console.error("Erro ao adicionar usuário: ", e);
    }
}

export async function deleteUser(id){
    await deleteDoc(doc(db, "users", id))
    alert("Usuário excluído com sucessso!")
    window.location.reload();
}

