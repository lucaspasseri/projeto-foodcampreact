import "./Briefing.css";

export default function Briefing(){
    return(
        <ul>
            <li>
            <div className="nome">Frango Yin Yang</div>
            <div className="preco">14,90</div>
            </li>
            <li>
            <div className="nome">Coquinha gelada</div>
            <div className="preco">4,90</div>
            </li>
            <li>
            <div className="nome">Pudim</div>
            <div className="preco">7,90</div>
            </li>
            <li className="total">
            <div>Total</div>
            <div>R$ 27,70</div>
            </li>
        </ul>
    );
}