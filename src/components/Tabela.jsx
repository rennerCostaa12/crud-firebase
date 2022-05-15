import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../css/tabela.css';

export default function Tabela({ editUser, deleteUser, users }) {

    return (
        <table className="content-table">
            <thead>
                <th>Nome</th>
                <th>Idade</th>
                <th>Função</th>
                <th>Ações</th>
            </thead>
            <tbody>
                {users.map((user, key) => {
                    return (
                        <tr key={key}>
                            <td>{user.nome}</td>
                            <td>{user.idade}</td>
                            <td>{user.funcao}</td>
                            <td className="btns-actions">
                                <button onClick={() => editUser(user.id)}><FontAwesomeIcon icon={'pen-to-square'} /></button>
                                <button onClick={() => deleteUser(user.id)}><FontAwesomeIcon icon={'trash'} /></button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}