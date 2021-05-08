import Overlay from './../Overlay/Overlay';
import Header from './../Header/Header';
import Menu from './../Menu/Menu';
import Footer from './../Footer/Footer';
import React from 'react';

export default function App() {
    
    const [estadoBotao, setEstadoBotao] = React.useState(false);
    const [dados, setDados] = React.useState(dadosServidor);
    function selecionarProduto(id0, id){
        if(!dados[id0].produtos[id].selecionado){
            dados[id0].produtos[id].selecionado = true;
            dados[id0].produtos[id].quantidade=1;

        } else {
            dados[id0].produtos[id].selecionado = false;
            dados[id0].produtos[id].quantidade = 0;
        }
        setDados([...dados]);
        
        const estadoSecoes = [];
        dados.forEach(item => {
            estadoSecoes.push(item.produtos.filter(item => item.selecionado===true).length);
        });

        const numeroSecoesNaoSelecionadas = estadoSecoes.filter(item => item === 0).length;
        const todasSecoesSelecionadas = numeroSecoesNaoSelecionadas === 0;
        if(todasSecoesSelecionadas){
            setEstadoBotao(true);
        } else {
            setEstadoBotao(false);
        }
    }

    function alterarContador(tipo, unidadesContador, setUnidadesContador, id0, id){
        if(tipo ==="resetESet"){
            if(dados[id0].produtos[id].selecionado){
                dados[id0].produtos[id].quantidade=1; 
                setUnidadesContador(1); 
            }
            else{
                dados[id0].produtos[id].quantidade=0; 
                setUnidadesContador(0); 
            }    
        }
        else if(tipo ==="adicao"){
            dados[id0].produtos[id].quantidade++;
            setUnidadesContador(unidadesContador+1);
        }else{
            if(unidadesContador>1){
                dados[id0].produtos[id].quantidade--;
                setUnidadesContador(unidadesContador-1);
            }
            else if(unidadesContador===1){
                dados[id0].produtos[id].selecionado=false;
                setDados([...dados]);
            }
        }
    }

    return(
        <>
            <Overlay />
            <Header titulo="FoodCamp" subtitulo="Sua comida em 6 minutos"/>
            <Menu dados={dados} selecionarProduto={selecionarProduto} 
                     alterarContador={alterarContador}/>
            <Footer estadoBotao={estadoBotao} dados={dados}/>
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
        preco: 14.90,
        selecionado: false,
        quantidade: 0},

        {produto: "prato-carne",
        imagem: "frango_yin_yang",
        titulo: "Carne Yin Yang",
        descricao: "Um pouco de batata, um pouco de salada",
        preco: 17.90,
        selecionado: false,
        quantidade: 0},

        {produto: "prato-peixe",
        imagem: "frango_yin_yang",
        titulo: "Peixe Yin Yang",
        descricao: "Um pouco de batata, um pouco de salada",
        preco: 16.90,
        selecionado: false,
        quantidade: 0
    }]},
    {apresentacao: "Agora, sua bebida",
    tipo: "bebidas",
    produtos: [{
        produto: "bebida-coca",
        imagem: "coquinha_gelada",
        titulo: "Coquinha gelada",
        descricao: "Lata 350ml",
        preco: 6.90,
        selecionado: false,
        quantidade: 0},

        {produto: "bebida-guarana",
        imagem: "coquinha_gelada",
        titulo: "Guaraná gelado",
        descricao: "Lata 350ml",
        preco: 4.90,
        selecionado: false,
        quantidade: 0},

        {produto: "bebida-suco",
        imagem: "coquinha_gelada",
        titulo: "Suco gelado",
        descricao: "500ml",
        preco: 7.90,
        selecionado: false,
        quantidade: 0
    }]},
    {apresentacao: "Por fim, sua sobremesa",
    tipo: "sobremesas",
    produtos: [{
        produto: "sobremesa-pudim",
        imagem: "pudim",
        titulo: "Pudim",
        descricao: "Apenas um pudim",
        preco: 7.90,
        selecionado: false,
        quantidade: 0},

        {produto: "sobremesa-mousse",
        imagem: "pudim",
        titulo: "Mousse",
        descricao: "Cremoso, gostoso",
        preco: 6.90,
        selecionado: false,
        quantidade: 0},

        {produto: "sobremesa-brownie",
        imagem: "pudim",
        titulo: "Brownie",
        descricao: "É um bolinho",  
        preco: 4.90,
        selecionado: false,
        quantidade: 0  
    }]}
];