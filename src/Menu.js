import Secao from './Secao';

export default function Menu(){
    const dados = [
        {titulo:"Primeiro, seu prato", tipo:"pratos"},
        {titulo:"Agora, sua bebida", tipo:"bebidas"},
        {titulo:"Por fim, sua sobremesa", tipo:"sobremesas"}
    ]

    const dadosComponentizados = dados.map(item => <Secao titulo={item.titulo} 
        tipo={item.tipo} />);

    return(
        <div class="menu">
            
            {dadosComponentizados}
           
        </div>
    );
}