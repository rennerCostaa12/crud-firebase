import Tabela from "./components/Tabela";
import Botao from "./components/Botao";
import AdicionarUsuario from "./components/AdicionarUsuario";
import EditarUsuario from "./components/EditarUsuario";

import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { deleteUser } from "./database/callFunctionsDatabase";

import { showData } from "./database/callFunctionsDatabase";

import './components/Icones';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [showModalNovoUsuario, setShowModalNovoUsuario] = useState(false);
  const [showModalEditarUsuario, setShowModalEditarUsuario] = useState(false);

  const [users, setUsers] = useState([]);

  const handleShowModalNovoUsuario = () => setShowModalNovoUsuario(true);
  const handleCloseModalNovoUsuario = () => setShowModalNovoUsuario(false);

  const handleShowModalEditarUsuario = () => setShowModalEditarUsuario(true);
  const handleCloseModalEditarUsuario = () => setShowModalEditarUsuario(false);

  function editUser(param) {
    handleShowModalEditarUsuario();
    console.log(users)
  }


  useEffect(() => {
    showData(setUsers)
  }, [])


  return (
    <div className="container-app">
      <div className="content-app">
        <div className="content-btn-add-user">
          <Botao textButton={'Adicionar novo usuário'}
            onClick={handleShowModalNovoUsuario}
          />
        </div>

        <Tabela editUser={editUser} deleteUser={deleteUser} users={users} />
      </div>

      {/* MODAL EDITAR USUÁRIO */}
      <Modal show={showModalEditarUsuario} onHide={handleCloseModalEditarUsuario}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditarUsuario />
        </Modal.Body>
      </Modal>

      {/* MODAL NOVO USUÁRIO */}
      <Modal show={showModalNovoUsuario} onHide={handleCloseModalNovoUsuario}>
        <Modal.Header closeButton>
          <Modal.Title>Novo Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AdicionarUsuario />
        </Modal.Body>
      </Modal>

    </div>
  );
}

export default App;
