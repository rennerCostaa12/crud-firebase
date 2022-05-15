import { Form, FormLabel, Button } from "react-bootstrap"

export default function EditarUsuario(nameUser, functionUser, ageUser) {
    
    return (
        <>
            <Form> 
                <Form.Group className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" value={nameUser} required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Função</Form.Label>
                    <Form.Control type="text" value={functionUser} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <FormLabel>Idade</FormLabel>
                    <Form.Control type="number" value={ageUser} required />
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