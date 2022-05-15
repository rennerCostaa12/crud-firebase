import '../css/botao.css';

export default function Botao({ textButton, onClick}) {
    return <button className="style-default-btn" onClick={onClick}>{textButton}</button>

}