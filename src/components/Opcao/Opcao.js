import React from 'react';
import "./Opcao.css";

export default function Opcao(props){
    const {id0, id,
         estadoCategoria, setEstadoCategoria,
          produto, imagem, titulo, descricao, preco, selecionado } = props;
    const produtoInativo = "opcao "+produto;
    const produtoAtivo = "opcao "+produto+" selecionado";
    const [estadoProduto, setEstadoProduto] = React.useState(produtoInativo);
    const [estadoContador, setEstadoContador] = React.useState("contador escondido");
    const [estadoUnidades, setEstadoUnidades] = React.useState(1); 



    function selecionarProduto(){
        if(estadoProduto === produtoInativo){
            setEstadoProduto(produtoAtivo);
            setEstadoContador("contador");
            alteraEstadoCategoria(id0, id, estadoCategoria, setEstadoCategoria);
        } else {
            deselecionarProduto();
        }
    }
    function deselecionarProduto(){
        setEstadoProduto(produtoInativo);
        setEstadoContador("contador escondido");
        setEstadoUnidades(1);
        alteraEstadoCategoria(id0, id, estadoCategoria, setEstadoCategoria);
    }

    function adicionarUnidade(){
        setEstadoUnidades(estadoUnidades+1);
    }
    function subtrairUnidade(){
        if(estadoUnidades>1){
            setEstadoUnidades(estadoUnidades-1);
        } 
        else {
            deselecionarProduto();
        }      
    }   
    
    return(
        <div className={estadoProduto}>
            <img onClick={selecionarProduto} src={"img/"+imagem+".png"} />
            <div className="titulo">{titulo}</div>
            <div className="descricao">{descricao}</div>
            <div className="valores">
                <div className="preco">{preco}</div>
                <div className={estadoContador}>
                    <div className="contador">
                        <span onClick={subtrairUnidade} className="subtrair-unidades">-</span>
                        <span> {estadoUnidades} </span>
                        <span onClick={adicionarUnidade} className="adicionar-unidades">+</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function alteraEstadoCategoria(id0, id, estadoCategoria, setEstadoCategoria){
    console.log(id0,id,estadoCategoria);
    if(estadoCategoria[id]){
        estadoCategoria[id] = false;
        setEstadoCategoria([...estadoCategoria]);
    } else {
        estadoCategoria[id] = true;
        setEstadoCategoria([...estadoCategoria]);
    }
}