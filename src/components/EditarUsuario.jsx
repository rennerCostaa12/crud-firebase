import { Form, FormLabel, Button } from "react-bootstrap"
import { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../database/config";
import { updateUser } from "../database/callFunctionsDatabase";

export default function EditarUsuario({ idUser }) {

    const [nome, setNome] = useState();
    const [idade, setIdade] = useState();
    const [funcao, setFuncao] = useState();

    function RefreshWindow() {
        return window.location.reload();
    }

    const handleEditUsers = async () => {
        const docRef = doc(db, "users", idUser);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setNome(docSnap.data().nome);
            setIdade(docSnap.data().idade);
            setFuncao(docSnap.data().funcao);

        } else {
            alert('Documento não encontrado!')
        }
    }

    const editUser = (e) => {
        e.preventDefault();
        updateUser(idUser, funcao, idade, nome);
        alert('Editado com sucesso!')
        setTimeout(RefreshWindow, 700)
    }

    useEffect(() => {
        if (idUser !== undefined && idUser !== "") {
            handleEditUsers();
        }
    }, [idUser])

    return (
        <>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Função</Form.Label>
                    <Form.Control type="text" value={funcao} onChange={(e) => setFuncao(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <FormLabel>Idade</FormLabel>
                    <Form.Control type="number" value={idade} onChange={(e) => setIdade(e.target.value)} required />
                </Form.Group>

                <div style={{ display: "flex", justifyContent: "flex-end" }} >
                    <Button variant="success" type="submit" onClick={editUser}>
                        Salvar
                    </Button>
                </div>
            </Form>
        </>
    )
}