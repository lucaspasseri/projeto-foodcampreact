export default function Opcao(props){
    const produto = "opcao "+props.produto;
    const imagem = "img/"+props.imagem+".png";
    return(
        <div class={produto} onclick="selecionarPrato('.prato-frango', 'Frango Yin Yang', 14.90)">
            <img src={imagem} />
            <div class="titulo">{props.titulo}</div>
            <div class="descricao">{props.descricao}</div>
            <div class="preco">{props.preco}</div>
            <div class="check">
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        </div>
    );
}