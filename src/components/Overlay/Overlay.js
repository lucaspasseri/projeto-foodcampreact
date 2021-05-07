import Briefing from '../Briefing/Briefing';
import "./Overlay.css";

export default function Overlay(){
    return(
        <div className="overlay escondido">
            <div className="confirmar-pedido">
                <div className="titulo">Confirme seu pedido</div>
                <Briefing />
                <button className="confirmar">Tudo certo, pode pedir!</button>
                <button className="cancelar">Cancelar</button>
            </div>
        </div>
    );
}