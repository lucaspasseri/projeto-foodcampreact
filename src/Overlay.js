import Briefing from './Briefing';

export default function Overlay(){
    return(
        <div class="overlay escondido">
            <div class="confirmar-pedido">
                <div class="titulo">Confirme seu pedido</div>
                <Briefing />
                <button class="confirmar">Tudo certo, pode pedir!</button>
                <button class="cancelar">Cancelar</button>
            </div>
        </div>
    );
}