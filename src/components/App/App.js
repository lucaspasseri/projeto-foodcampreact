import Overlay from './../Overlay/Overlay';
import Header from './../Header/Header';
import Menu from './../Menu/Menu';
import Footer from './../Footer/Footer';
import React from 'react';

export default function App() {

    const [valor, setValor] = React.useState(false);
    const [dados, setDados] = React.useState(dadosServidor);

    return(
        <>
            <Overlay />
            <Header titulo="FoodCamp" subtitulo="Sua comida em 6 minutos"/>
            <Menu dados={dados} setValor={setValor}/>
            <Footer valor={valor}/>
        </>
    );
}
const dadosServidor = [
    {apresentacao: "Primeiro, seu prato",
    tipo: "pratos",
    produtos: [{
        produto: "prato-frango",
        imagem: "frango_yin_yang",
        titulo: "Frango Yin Yang",
        descricao: "Um pouco de batata, um pouco de salada",
        preco: "R$ 14,90",
        selecionado: false},

        {produto: "prato-carne",
        imagem: "frango_yin_yang",
        titulo: "Carne Yin Yang",
        descricao: "Um pouco de batata, um pouco de salada",
        preco: "R$ 17,90",
        selecionado: false},

        {produto: "prato-peixe",
        imagem: "frango_yin_yang",
        titulo: "Peixe Yin Yang",
        descricao: "Um pouco de batata, um pouco de salada",
        preco: "R$ 16,90",
        selecionado: false
    }]},
    {apresentacao: "Agora, sua bebida",
    tipo: "bebidas",
    produtos: [{
        produto: "bebida-coca",
        imagem: "coquinha_gelada",
        titulo: "Coquinha gelada",
        descricao: "Lata 350ml",
        preco: "R$ 6,90",
        selecionado: false},

        {produto: "bebida-guarana",
        imagem: "coquinha_gelada",
        titulo: "Guaraná gelado",
        descricao: "Lata 350ml",
        preco: "R$ 4,90",
        selecionado: false},

        {produto: "bebida-suco",
        imagem: "coquinha_gelada",
        titulo: "Suco gelado",
        descricao: "500ml",
        preco: "R$ 7,90",
        selecionado: false
    }]},
    {apresentacao: "Por fim, sua sobremesa",
    tipo: "sobremesas",
    produtos: [{
        produto: "sobremesa-pudim",
        imagem: "pudim",
        titulo: "Pudim",
        descricao: "Apenas um pudim",
        preco: "R$ 7,90",
        selecionado: false},

        {produto: "sobremesa-mousse",
        imagem: "pudim",
        titulo: "Mousse",
        descricao: "Cremoso, gostoso",
        preco: "R$ 6,90",
        selecionado: false},

        {produto: "sobremesa-brownie",
        imagem: "pudim",
        titulo: "Brownie",
        descricao: "É um bolinho",  
        preco: "R$ 4,90",
        selecionado: false    
    }]}
];