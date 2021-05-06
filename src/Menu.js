import Secao from './Secao';

export default function Menu(){

    return(
        <div class="menu">
            {dados.map(item => <Secao
                                    apresentacao={item.apresentacao}
                                    tipo={item.tipo}
                                    produtos={item.produtos}
                                 />)
            }
           
        </div>
    );
}

const dados = [
    {apresentacao: "Primeiro, seu prato",
    tipo: "pratos",
    produtos: [{
        produto: "prato-frango",
        imagem: "frango_yin_yang",
        titulo: "Frango Yin Yang",
        descricao: "Um pouco de batata, um pouco de salada",
        preco: "R$ 14,90"},

        {produto: "prato-carne",
        imagem: "frango_yin_yang",
        titulo: "Carne Yin Yang",
        descricao: "Um pouco de batata, um pouco de salada",
        preco: "R$ 17,90"},

        {produto: "prato-peixe",
        imagem: "frango_yin_yang",
        titulo: "Peixe Yin Yang",
        descricao: "Um pouco de batata, um pouco de salada",
        preco: "R$ 16,90"
    }]},
    {apresentacao: "Agora, sua bebida",
    tipo: "bebidas",
    produtos: [{
        produto: "bebida-coca",
        imagem: "coquinha_gelada",
        titulo: "Coquinha gelada",
        descricao: "Lata 350ml",
        preco: "R$ 6,90"},

        {produto: "bebida-guarana",
        imagem: "coquinha_gelada",
        titulo: "Guaraná gelado",
        descricao: "Lata 350ml",
        preco: "R$ 4,90"},

        {produto: "bebida-suco",
        imagem: "coquinha_gelada",
        titulo: "Suco gelado",
        descricao: "500ml",
        preco: "R$ 7,90"
    }]},
    {apresentacao: "Por fim, sua sobremesa",
    tipo: "sobremesas",
    produtos: [{
        produto: "sobremesa-pudim",
        imagem: "pudim",
        titulo: "Pudim",
        descricao: "Apenas um pudim",
        preco: "R$ 7,90"},

        {produto: "sobremesa-mousse",
        imagem: "pudim",
        titulo: "Mousse",
        descricao: "Cremoso, gostoso",
        preco: "R$ 6,90"},

        {produto: "sobremesa-brownie",
        imagem: "pudim",
        titulo: "Brownie",
        descricao: "É um bolinho",  
        preco: "R$ 4,90"
    }]}
];