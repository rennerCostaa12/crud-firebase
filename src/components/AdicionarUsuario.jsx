import { useState } from "react";
import { Form, FormLabel, Button } from "react-bootstrap"
import { addData } from "../database/callFunctionsDatabase"

export default function AdicionarUsuario() {
    const [nameUser, setNameUser] = useState();
    const [functionUser, setFunctionUser] = useState();
    const [ageUser, setAgeUser] = useState();

    function RefreshWindow() {
        return window.location.reload();
    }

    function addUser(e) {
        e.preventDefault();
        addData(functionUser, ageUser, nameUser);
        alert('Adicionado com sucesso!')
        setTimeout(RefreshWindow, 700)
    }

    return (
        <>
            <Form onSubmit={addUser}> 
                <Form.Group className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" onChange={(e) => setNameUser(e.target.value)} required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Função</Form.Label>
                    <Form.Control type="text" onChange={(e) => setFunctionUser(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <FormLabel>Idade</FormLabel>
                    <Form.Control type="number" onChange={(e) => setAgeUser(e.target.value)} required />
                </Form.Group>

                <div style={{ display: "flex", justifyContent: "flex-end" }} >
                    <Button variant="success" type="submit" >
                        Salvar
                    </Button>
                </div>
            </Form>
        </>
    )
}